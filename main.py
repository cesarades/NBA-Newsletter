from scraper import *
from player import *

players = scrape("https://www.bettingpros.com/nba/odds/player-props/",
                 "?date=2023-04-22",
                 display=True)

for player in players:
    print("\n")
    print(player)
    for prop in player.props:
        print(prop)
