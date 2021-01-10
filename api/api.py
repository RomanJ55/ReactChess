import sys
import json
import flask
from flask import jsonify

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
    return "<h1>Testing</h1>"


@app.route('/api/test', methods=['GET'])
def api_all():
    json_str = json.dumps(game, default=lambda x: x.__dict__, indent=2)
    return jsonify(json_str)


app.run()
