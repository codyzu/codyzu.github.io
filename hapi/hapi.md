# REST api with hapi

###Cody Zuschlag

Senior Software Engineer

Axway Engage


![hoodie](images/hoodie.png)

* Member [hoodie](http://hood.ie) project (server using hapi + pouchdb)
* express.js REST apis for **Axway Engage**
* New keystore microservice using hapi for **Axway Engage**
* Passionate for everything node.js!



![express](images/express.png)
![node express](images/node-express.jpg)
![node express mongo](images/node-express-mongo.jpg)

# [expressjs.com](http://expressjs.com)


# amazing!
![express npm stats](images/express-npm-stats.png)

_25 May 2016_


## middlewares & routes

* middlewares === chain of functions <!-- .element: class="fragment fade-in" -->
* routes matched by regex <!-- .element: class="fragment fade-in" -->
* req / res -> wrapped native node objects with added fields <!-- .element: class="fragment fade-in" -->

Note:

* **order matters!**
* body-parser _must be before_ cookie parser (or passport): undocumented dependencies (and order) between middlewares!
* ~~parser reads body objects into memory before parsing _no limit on size_ (out of memory!)~~ Not true with express 4
* node by default uses streams for http connection, express makes it difficult to not parse *all the time*
* dirty, changes to node ~> broken?
* mixes http and business logic (hard to decouple)
  * "no clean seperation between business logic and framework"


![express-middlewares](images/express-middleware.png)

_from [https://youtu.be/Recv7vR8ZlA](https://youtu.be/Recv7vR8ZlA)_



<!-- .slide: data-background-image="http://i.giphy.com/pcC2u7rl89b44.gif" -->



![hapi logo](images/hapi.png)

# [hapijs.com](http://hapijs.com)


# Why???


<iframe data-autoplay class="stretch" width="853" height="480" src="https://www.youtube.com/embed/y6Sxv-sUYtM?rel=0&amp;showinfo=0&start=132&end=162" frameborder="0" allowfullscreen></iframe>


# not bad...
![express npm stats](images/hapi-npm-stats.png)

_25 May 2016_


# history

* born in yahoo -> walmart
* mobile site (single point, proxy)
  * node.js: "heavy on network, light on processing... streaming"
* originally built on express.js


# why

1. limitations in other frameworks
1. big teams
1. code isolation


## differences

* modular: <!-- .element: class="fragment fade-up" -->
  * no middlewares
  * everything plugins (+ some events)
* plugins: <!-- .element: class="fragment fade-up" -->
* code isolation -> better for big teams
  * inter-plugin dependencies
* configuration over ???: <!-- .element: class="fragment fade-up" -->
  * easier to validate
* caching built-in <!-- .element: class="fragment fade-up" -->


<!-- .slide: data-background-image="images/hapi-wishlist.png" data-background-size="contain" -->

Note:
_from [https://youtu.be/Recv7vR8ZlA?t=15m19s](https://youtu.be/Recv7vR8ZlA?t=15m19s)_


<!-- .slide: data-background-image="images/hapi-config-over-code.png" data-background-size="contain" -->

Note:
_from [https://youtu.be/Recv7vR8ZlA?t=15m19s](https://youtu.be/Recv7vR8ZlA?t=15m19s)_


## Principles

* config over code
  * can write code, but can _also_ do as much as possible with config
  * input/output validation (schema)


## validation

* in node difficult to have conditional validation (if quary param then no body, etc) with callbacks


# BIG framework?

### express is small (few hundred lines of code)
### hapi is big?

features start in core -> moved to plugin if not 'core' feature
<!-- .element: class="fragment fade-in" -->

Note:

normally in node.js we say "no big frameworks!"


# 100% coverage

### "for every percent between 85 and 100... we found at least 1 bug"

_- Eran Hammer_



# Live Coding part 1

_see [prerequisites](#/prerequisites)_


## Setup + Install

```bash
git clone https://github.com/codyzu/hapi-demo.git
cd hapi-demo
git checkout step00
```

<p class="fragment fade-up">
end tag: ```step00```
</p>

```bash
npm install
```
<!-- .element: class="fragment fade-up" -->


## Hello world

```javascript
import hapi from 'hapi'
```
<!-- .element: class="fragment fade-up" -->
```javascript
const server = new hapi.Server()
server.connection({port: 3000})
```
<!-- .element: class="fragment fade-up" -->
```javascript
server.route({
  method: 'GET',
  path: '/',
  handler: (request, reply) => {
    reply('Hello world!')
  }
})
```
<!-- .element: class="fragment fade-up" -->
```javascript
server.start((err) => {
  if (err) {
    throw err
  }

  console.log(`Server running at: ${server.info.uri}`)
})
```
<!-- .element: class="fragment fade-up" -->

<p class="fragment fade-up">
git tag: ```step01```
</p>

## getByName

git tag: ```step02```

## config + swagger

## post


## getOne
## getAll
(in memory)

start tag: ```step03```

**Exercise: Write GET and GET/{name}**

<p class="fragment fade-up">
end tag: ```step04```
</p>


## Validation
## Plugins

start tag: ```step05```

**Exercise: Extract + refactor validations**

<p class="fragment fade-up">
end tag: ```step06```
</p>

Note:
* setup: create empty validations.js and import \*
* speak about importing using validation objects inside validate config block (don't move entire validate block)


<!-- .slide: id="prerequisites" -->
## Prerequisites: Tools

* [git](https://git-scm.com/)
* [node](https://nodejs.org/en/download/) v5 or v6
  * [nvm](https://github.com/creationix/nvm) is better!
* [npm](https://www.npmjs.com/) (included in node)


## Prerequisites: editor

* [atom](https://atom.io/) _used by me_
  * [linter-js-standard](https://atom.io/packages/linter-js-standard)
  * [ternjs](https://atom.io/packages/atom-ternjs)
* [sublime v3](https://www.sublimetext.com/3)
  * [sublimelinter-contrib-standard](https://github.com/Flet/SublimeLinter-contrib-standard) _see also [standardjs](http://standardjs.com/index.html#text-editor-plugins)_
  * [ternjs](https://github.com/ternjs/tern_for_sublime)
* [visualstudio code](https://code.visualstudio.com/)
  * [vscode-standard](https://github.com/shinnn/vscode-standard)

_note: best experience with one of the above (no intellij)_



![pouchdb logo](images/pouchdb.png)

# [pouchdb.com](http://pouchdb.com)


* open source javascript db
* browser **and** node.js
* "offline first" (mobile: offline should _not_ be an error)
* db for npm
* works with couchdb protocol


## backends

* couchdb
* cloud
* leveldb/leveldown (in-memory, sqlite, sql)


## documents
* json
* \_id
* \_rev (optimistic concurrency)

```
{
  "_id": "dfasf",
  "_rev": "dfsfaf",
  "name": "my name",
  "description": "description"
}
```


## indexes

Use them!

* https://pouchdb.com/2014/06/17/12-pro-tips-for-better-code-with-pouchdb.html
* https://pouchdb.com/2014/05/01/secondary-indexes-have-landed-in-pouchdb.html



# Live Coding part 2


## Models

start tag: ```step07```

**Exercise: Use model in getByName + post**

<p class="fragment fade-up">
end tag: ```step08```
</p>


## Error Handling
## Code reuse
## Pre handlers

start tag: ```step09```

**Exercise: Use model in getByName + post**

<p class="fragment fade-up">
end tag: ```step10```
</p>



# Out of Scope


## _see also_

* cache
  * with server.method! get user? or get user token?
* templates & views
* request lifecycle
* generic error handler / failActions
* testing
  * ```inject```



# links
### hapi

* https://youtu.be/B3u0XkbhleA?list=PLB7q09icyCHVp3YLoYigTK5JisixHEBf6
* https://youtu.be/Recv7vR8ZlA?list=PLB7q09icyCHVp3YLoYigTK5JisixHEBf6
* https://youtu.be/ybX2s_sFdnk?list=PLB7q09icyCHVp3YLoYigTK5JisixHEBf6


### pouchdb

* https://youtu.be/7L7esHWAjSU



<!-- .slide: data-background-image="http://i.giphy.com/RTXqWOJ3hDkcg.gif" -->

Note:

## Outline

1. hello world
1. plugins
1. declaritive config
1. validation (get/post)
1. pouchdb
1. models
1. pre-handlers (http://hapijs.com/api#route-prerequisites)
1. tests

## Outline v2

1. Introduction
  1. hello world
  1. getByName
1. configuration / plugins / swagger
  1. config (glue)
  1. blip+good
  1. swagger+tag apis (fix console URL include /documentation)
1. CRUDL (almost)
  1. post (validate body, in memory db)
  1. getAll
  1. complete validations (+swagger doc, examples/defaults, could do sooner)
1. code organization (plugins)
  1. api to plugin
  1. prefixes to config
  1. handlers into config, extract config to file
  1. extract handlers
  1. extract validations to file
1. models
  1. create org model (memdown, pouchdb in constructor)
  1. _demo:_ test model index (or test?)
  1. create model plugin
  1. load plugin in config
  1. getAll -> model
  1. model in all handlers
  1. _demo:_ pouch in memory vs persistent (leave in memory) (can change order)
1. error handling
  1. errors: catch(reply)
  1. _info:_ boom, how hapi deals with errors (500 for non boom errors)
  1. errors: catch(reply: boom)
  1. _info:_ vs global handler (`'onPreResponse'`, http://hapijs.com/api#error-transformation)
1. response preparation -> `pre`s and modular handlers
  1. prepare response inline (getByName)
  1. _demo:_ prepare in function, misses access to request
  1. prepare as pre handler
  1. refactor handlers: use arrays for common type
  1. _bug:_ post -> 200, want 201
  1. add ok and created handler
1. tests (out of scope)

## TODO

1. rename urls (add orgs prefix from begining)
1. add swagger docs soon so we can use swagger UI?
1. simplify good config sooner
1. add swagger examples sooner?
1. name param validation to validations.js
1. pass pouch as constructor to model from begining (reduce refactoring)

1. speak about server.decorate
1. revisit plugin prefix:
  * does it make sense to have orgs prefix in the config?
  * using v1 in the plugin prefix makes the urls wrong
  * remove v1 prefix?
1. add url schema to get/getAll
