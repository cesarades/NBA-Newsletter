from prop_scraper import *

players = scrape("https://www.bettingpros.com/nba/odds/player-props/",
                 "?date=2023-04-22",
                 display=True)

for player in players:
    print(player)
