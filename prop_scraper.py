from bs4 import BeautifulSoup
from datetime import datetime
from selenium import webdriver
from selenium.webdriver.chrome.options import Options
from selenium.webdriver.common.by import By
from selenium.webdriver.common.keys import Keys
from selenium.webdriver.support.ui import WebDriverWait
from selenium.webdriver.support import expected_conditions as EC
import concurrent.futures


class Player:

    def __init__(self, name, props=None):
        self.name = name
        self.props = props if props is not None else []

    def __str__(self):
        border = "*" * (len(self.name) + 6)
        return f"{border}\n** {self.name} **\n{border}"

    def __repr__(self):
        border = "*" * (len(self.name) + 6)
        return f"{border}\n** {self.name} **\n{border}"

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
        return f"{self.name}:\t{self.over_line} {self.over_cost}\t{self.under_line} {self.under_cost}"

    def __str__(self):
        return f"{self.name}:\t{self.over_line} {self.over_cost}\t{self.under_line} {self.under_cost}"


def scrape_player_props(player_href, display=False):

    # Create a new player object
    name = " ".join(n.capitalize()
                    for n in player_href.split("/")[-2].split("-"))
    if display: print(f"Scraping {name}")
    player = Player(name)

    # Configure Chrome options and create instance
    chrome_options = Options()
    chrome_options.add_argument("--headless")
    browser = webdriver.Chrome(options=chrome_options)

    # Navigate to the URL and get the props
    browser.get(player_href)
    wait = WebDriverWait(browser, 20)
    props = wait.until(
        EC.presence_of_all_elements_located(
            (By.CLASS_NAME, "grouped-items-with-sticky-footer__content")))

    # Loop through the props and get the consensus
    for prop in props:
        try:
            # Get the name of the prop
            pname = prop.find_element(By.TAG_NAME, "span").text
            if "Over/Under" not in pname:
                continue

            # Get the consensus lines and costs
            con = prop.find_elements(By.CLASS_NAME, "odds-offer__item")[-1]
            lines = [
                l.text
                for l in con.find_elements(By.CLASS_NAME, "odds-cell__line")
            ]
            costs = [
                c.text
                for c in con.find_elements(By.CLASS_NAME, "odds-cell__cost")
            ]

            # Add the prop to the player
            player.add_prop(
                Prop(pname, (lines[0], costs[0]), (lines[1], costs[1])))
        except:
            continue

    # Close the browser instance
    browser.quit()

    if display: print(f"Finished scraping {name}.")
    return player


def scrape(url, date, display=False):

    # Configure Chrome options and create instance
    chrome_options = Options()
    chrome_options.add_argument("--headless")
    browser = webdriver.Chrome(options=chrome_options)

    # Navigate to the URL and get the player cards
    browser.get(url + date)
    wait = WebDriverWait(browser, timeout=10)
    player_cards = wait.until(
        EC.presence_of_all_elements_located((By.CLASS_NAME, "player-card")))

    # Get hrefs for each player
    hrefs = [
        p.find_element(By.TAG_NAME, 'a').get_attribute('href')
        for p in player_cards
    ]

    # Use concurrent.futures to scrape each player's props
    with concurrent.futures.ThreadPoolExecutor() as executor:
        players = list(
            executor.map(
                lambda href: scrape_player_props(href + date, display=display),
                hrefs))
        executor.shutdown(wait=True)

    # Close the browser instance
    browser.quit()

    return players
