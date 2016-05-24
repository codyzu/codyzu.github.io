# REST api with hapi

###Cody Zuschlag
![cody](images/cody1_bw_100px.jpg)


![hoodie](images/hoodie.png)

* Member [hoodie](http://hood.ie) project (server using hapi + pouchdb)
* express.js REST apis for **Axway Engage**
* New keystore microservice using hapi for **Axway Engage**
* Passionate for everything node.js!



![hapi logo](images/hapi.png)

# hapi.js


## why

1. big teams
2. code isolation


## differences

* modular, no middlewares, everything plugins, some events
* plugins
  * inter-plugin dependencies



![pouchdb logo](images/pouchdb.png)

[pouchdb.com](pouchdb.com)

* open source js db
* can sync
* db for npm


## backends
* couchdb
* leveldb/leveldown (in-memory, sqlite, sql)



# express.js

## issues



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
