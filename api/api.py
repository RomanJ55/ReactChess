import sys
import json
import flask
from flask import jsonify, request

sys.path.insert(0, "../backend")

try:
    from game import Game
except ImportError:
    print('Import failed')

app = flask.Flask(__name__)
app.config["DEBUG"] = True

game = Game()
game.run_game()


@app.route("/", methods=["GET"])
def home():
    return "<h1>Chess Api</h1>"


@app.route('/api/chess', methods=['GET'])
def api_all():
    json_str = json.dumps(game, default=lambda x: x.__dict__, indent=2)
    return jsonify(json_str)


@app.route('/api/chess/post', methods=['POST'])
def handle_post():
    result = request.get_json()
    x, y, piece_color = result["x"], result["y"], result["player"]
    # print(x, y, piece_type)
    if game.board[x][y]:
        if piece_color == game.turn:
            game.unselect_all()
            game.board[x][y].select()
            moves = game.board[x][y].get_valid_moves(game)
            return jsonify(moves)
    return "Not a valid piece!"


app.run()
