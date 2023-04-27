from prop_scraper import *
from player import *

players = scrape("https://www.bettingpros.com/nba/odds/player-props/",
                 "?date=2023-04-22",
                 display=False)

for player in players:
    print(player)
