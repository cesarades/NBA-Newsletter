from prop_scraper import *

players = scrape(
    "https://www.bettingpros.com/nba/odds/player-props/?date=2023-04-18",
    "?date=2023-04-18",
    testing=True)

print(players[0])
print(player[0].props[0])
