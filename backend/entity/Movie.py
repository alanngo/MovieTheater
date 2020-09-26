import json


class Movie:
    def __init__(self,  title, rating, rated):
        self.title = title
        self.rating = rating
        self.rated = rated

    def to_json(self):
        return json.dumps(self, default=lambda o: o.__dict__)
