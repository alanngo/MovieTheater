# Full Stack Movie Repository

### Prerequisites
###### Backend
```bash
$ sudo pip3 install pymongo
$ sudo pip3 install pymongo[srv]
$ sudo pip3 install flask
$ sudo pip3 install flask-cors
```

###### Frontend
```bash
$ sudo apt install npm
$ sudo apt install nodejs
$ sudo npm install -g @angular/cli
```
### How to run
1. Open 3 terminals.
2. Make sure all of them are in the MovieTheater directory

Terminal 1
```bash
$ bash backend.sh <DB_USERNAME> <DB_PASSWORD>
```

Terminal 2
```bash
$ bash frontend.sh
```

Terminal 3 <i>(Run this only when you want to terminate the app)</i>
```bash
$ bash terminate.sh
```
