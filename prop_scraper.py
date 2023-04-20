from bs4 import BeautifulSoup
from selenium import webdriver
from selenium.webdriver.safari.options import Options
from selenium.webdriver.common.by import By
from selenium.webdriver.support.ui import WebDriverWait
from selenium.webdriver.support import expected_conditions as EC


class Player:

    def __init__(self, name, props=[]):
        self.name = name
        self.props = props

    def __str__(self):
        return f"** {self.name} **\n{len(self.props)} props\n"

    def add_prop(self, prop):
        self.props.append(prop)


class Prop:

    def __init__(self, name, over, under):
        self.name = name
        self.over_line = over[0]
        self.over_cost = over[1]
        self.under_line = under[0]
        self.under_cost = under[1]

    def __repr__(self):
        return f"{self.name}:\n\t{self.over_line} {self.over_cost}\t{self.under_line} {self.under_cost}\n"

    def __str__(self):
        return f"{self.name}:\n\t{self.over_line} {self.over_cost}\t{self.under_line} {self.under_cost}\n"


def scrape(url):

    # "https://www.bettingpros.com/nba/odds/player-props/?date=2023-04-18"

    # list of the players and their props
    players = []

    # Configure Safari options
    safari_options = Options()

    # Create a new browser instance
    browser = webdriver.Safari(options=safari_options)

    # Navigate to the URL
    browser.get(url)

    # Timeout after 10 seconds
    wait = WebDriverWait(browser, 10)
    player_cards = wait.until(
        EC.presence_of_all_elements_located((By.CLASS_NAME, "player-card")))

    # get hrefs for each player
    hrefs = [
        p.find_element(By.TAG_NAME, "a").get_attribute("href")
        for p in player_cards
    ]

    # loop through hrefs and get prop data
    for href in hrefs:

        # get player name
        name = href.split("/")[-2].split("-")
        name = " ".join([n.capitalize() for n in name])

        # create a new player object
        player = Player(name)

        # wait for the page to load
        browser.get(href)
        wait = WebDriverWait(browser, 10)
        player_props = wait.until(
            EC.presence_of_all_elements_located(
                (By.CLASS_NAME, "grouped-items-with-sticky-footer__content")))

        for player_prop in player_props:
            name = player_prop.find_element(By.TAG_NAME, "span").text
            if "Over/Under" not in name:
                continue
            consensus = player_prop.find_elements(By.CLASS_NAME,
                                                  "odds-offer__item")[-1]

            lines = [
                l.text for l in consensus.find_elements(
                    By.CLASS_NAME, "odds-cell__line")
            ]
            costs = [
                c.text for c in consensus.find_elements(
                    By.CLASS_NAME, "odds-cell__cost")
            ]
            player.add_prop(
                Prop(name, (lines[0], costs[0]), (lines[1], costs[1])))

    # Close the browser instance
    browser.quit()

	return players
