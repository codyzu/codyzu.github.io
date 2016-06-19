![express](images/express.png)
![node express](images/node-express.jpg)
![node express mongo](images/node-express-mongo.jpg)

# [expressjs.com](http://expressjs.com)

Note:
* exists since 2012
* sur internet


# amazing!
![express npm stats](images/express-npm-stats.png)

_25 May 2016_


# middlewares & routes

* middlewares === chain of functions <!-- .element: class="fragment fade-in" -->
* req / res <!-- .element: class="fragment fade-in" -->
* routes matched by regex <!-- .element: class="fragment fade-in" -->

Note:

* **order matters!**
* body-parser _must be before_ cookie parser (or passport): undocumented dependencies (and order) between middlewares!
* req / res are **wrapped native node objects**
* dirty, changes to node ~> broken?
* mixes http and business logic (hard to decouple)
  * "no clean seperation between business logic and framework"
* ~~parser reads body objects into memory before parsing _no limit on size_ (out of memory!)~~ Not true with express 4
* ~~node by default uses streams for http connection, express makes it difficult to not parse *all the time*~~


![express-middlewares](images/express-middleware.png)

_- [Eran Hammer of WalMart Labs presents hapi (YouTube)](https://youtu.be/Recv7vR8ZlA?list=PLB7q09icyCHVp3YLoYigTK5JisixHEBf6)_


<!-- .slide: data-background-image="http://i.giphy.com/pcC2u7rl89b44.gif" -->
