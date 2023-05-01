from nba_data import *
from player import *
from csv_reader import *
# from scraper import *
from scraper_no_threading import *
from player_averages import *
# change back to 4/22
# can make these be asynch as they are pinging different databases

print("-----------------------------------------")
player_stats = get_player_stats("2023-04-29")
bets = csv_to_dict()
# player_props = scrape("https://www.bettingpros.com/nba/odds/player-props/",
#                  "?date=2023-04-29",
#                  display=True)

# Have all info we need, now feed information from this into prompt
# Get the value of all stats from day's game of players whose bets were taken
bets_results = {}

for player in bets:
    # order of values being placed in there are points, rebounds, assists, FGM, FGA, time played
    curr_row = player_stats[player_stats['PLAYER_NAME'] == player]
    bets_results[player] = [int(curr_row['PTS'].tolist()[0]), int(curr_row['REB'].tolist()[0]), int(curr_row['AST'].tolist()[0]), int(curr_row['FGM'].tolist()[0]), int(curr_row['FGA'].tolist()[0]), (curr_row['MIN'].tolist()[0])]

# dictionary of averages of players who got bet, order = points, rebounds, assists, fgm, fga, time_played
season_averages = {}
for player in bets:
    season_averages[player] = player_year_stats(player)
    