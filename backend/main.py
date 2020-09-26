from flask import *
from flask_cors import *

# runtime configurations
from entity.Movie import Movie
from mongo.MongoDB import MongoDB

HOST = 'localhost'
PORT = 5000
DATABASE = "MovieRepo"
COLLECTIONS = ["movie"]
MONGO_PORT = 27017
ROOT_URL = "/api/"

mongo = MongoDB(host=HOST, port=MONGO_PORT, database=DATABASE, docs=COLLECTIONS)
movies = mongo.collection["movie"]
app = Flask(__name__)


@app.route(f"{ROOT_URL}movies", methods=['GET'])
def get_movies():
    return jsonify(movies.find_all())


@app.route(f"{ROOT_URL}movies", methods=['POST'])
def add_movie():
    obj = request.get_json()
    m = Movie(
        title=obj["title"],
        rated=obj["rated"],
        rating=obj["rating"]
    )
    movies.add(m.__dict__)
    return jsonify(m.__dict__)


@app.route(f"{ROOT_URL}movies/<id>", methods=['DELETE'])
def delete_movie(id):
    m = movies.find_by_id(id)
    movies.remove_by_id(id)
    return jsonify(m)


def main():
    CORS(app)
    app.debug = True
    app.run(HOST, PORT)


main()
