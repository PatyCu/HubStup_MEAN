HubStup, MEAN version
==========

NodeJS modules in use:
- express
- mongoose
- node-restful
- method-override
- body-parser
- lodash
- karma
- generator-karma


## Setup on Mac OS X

(PREREQUISITE: Homebrew installed)

1. brew install node
2. brew install mongodb
3. npm install -g grunt-cli
4. npm install -g bower

## Run the app on Mac OS X

1. sudo mongod
2. cd hubstup/server
3. node index.js
4. cd hubstup/client
5. sudo grunt serve
