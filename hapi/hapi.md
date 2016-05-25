# REST api with hapi

###Cody Zuschlag
![cody](images/cody1_bw_100px.jpg)


![hoodie](images/hoodie.png)

* Member [hoodie](http://hood.ie) project (server using hapi + pouchdb)
* express.js REST apis for **Axway Engage**
* New keystore microservice using hapi for **Axway Engage**
* Passionate for everything node.js!



# express.js

![express](images/express.png)
![node express](images/node-express.jpg)
![node express mongo](images/node-express-mongo.jpg)


# amazing!
![express npm stats](images/express-npm-stats.png)


## middlewares & routes

![express-middlewares](images/express-middleware.png)

_from [https://youtu.be/Recv7vR8ZlA](https://youtu.be/Recv7vR8ZlA)_


## middlewares & routes

* middlewares === chain of functions
* routes matched by regex
* req / res -> wrapped native node objects with added fields


## middlewares & routes

* **order matters!** body-parser _before_ cookie-parser
* now all body objects are read into memory
  * _no limit on size_ (out of memory!)
* complicated to stream directly into file


* req / res -> native node objects + added fields
  * _dirty_
  * node changes ~> broken?
* undocumented dependencies (and order) between middlewares!
* mix http and business logic
  * wrapped native objects
  * hard to decouple business logic
* parse (by default) does not limit size of payload (out of memory!) (unknown unless you look at implementation)


## issues



![hapi logo](images/hapi.png)

# hapi.js


# not bad...
![express npm stats](images/hapi-npm-stats.png)


## history

* born in yahoo -> walmart
* mobile site (single point, proxy)
* "heavy on network, light on processing... streaming"
* built on express.js


## why

1. big teams
2. code isolation


## differences

* modular, no middlewares, everything plugins, some events
* plugins
  * inter-plugin dependencies


# wishlist

![hapi wishlist](images/hapi-wishlist.png)


# principles

![config over code](images/hapi-config-over-code.png)

_from https://youtu.be/Recv7vR8ZlA?t=15m19s _

* config over code
  * can write code, but can _also_ do as much as possible with config
  * input/output validation (schema)


## validation

* in node difficult to have conditional validation (if quary param then no body, etc) with callbacks


### express is small (few hundred lines of code), hapi is big?

features start in core -> moved to plugin if not 'core' feature


# 100% coverage

"for every percent between 85 and 100... we found at least 1 bug"



![pouchdb logo](images/pouchdb.png)

[pouchdb.com](pouchdb.com)

* open source js db
* can sync
* db for npm


## backends

* couchdb
* leveldb/leveldown (in-memory, sqlite, sql)



# Outline

1. hello world
2. plugins
3. declaritive config
4. validation (get/post)
5. pouchdb
6. models
7. pre-handlers
8. tests



## Hello world

```javascript
import hapi from 'hapi'

const server = new hapi.Server()
server.connection({port: 3000})

server.route({
  method: 'GET',
  path: '/',
  handler: (request, reply) => {
    reply('Hello world!')
  }
})

server.start((err) => {
  if (err) {
    throw err
  }

  console.log(`Server running at: ${server.info.uri}`)
})
```



# links

* https://youtu.be/B3u0XkbhleA?list=PLB7q09icyCHVp3YLoYigTK5JisixHEBf6
* https://youtu.be/Recv7vR8ZlA?list=PLB7q09icyCHVp3YLoYigTK5JisixHEBf6
* https://youtu.be/ybX2s_sFdnk?list=PLB7q09icyCHVp3YLoYigTK5JisixHEBf6



# prerequisites

* git
* node (v5 or v6)
  * nvm is better! https://github.com/creationix/nvm)
* npm (included in node)
* decent editor:
  * atom
  * sublime v3
    * standard (http://standardjs.com/index.html#text-editor-plugins)
    * sublimelinter-contrib-standard (https://github.com/Flet/SublimeLinter-contrib-standard)
    * tern (https://github.com/ternjs/tern_for_sublime)
  * visualstudio code
    * vscode-standard (https://github.com/shinnn/vscode-standard)
