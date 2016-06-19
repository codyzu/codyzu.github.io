![hapi logo](images/hapi.png)

# [hapijs.com](http://hapijs.com)


# And now...


<!-- .slide: data-background-image="images/hapi.png" data-background-size="100px" data-background-repeat="round" -->
<iframe data-autoplay class="stretch" width="853" height="480" src="https://www.youtube.com/embed/y6Sxv-sUYtM?rel=0&amp;showinfo=0&start=132&end=162" frameborder="0" allowfullscreen></iframe>


# not bad...
![express npm stats](images/hapi-npm-stats.png)

_25 May 2016_


# history

* born in yahoo -> walmart <!-- .element: class="fragment fade-up" -->
* mobile site (single point, proxy) <!-- .element: class="fragment fade-up" -->
  * node.js: "heavy on network, light on processing... streaming"
* originally built on express.js <!-- .element: class="fragment fade-up" -->
* today: powers all mobile APIs at Walmart <!-- .element: class="fragment fade-up" -->
* soon: powering all e-commerce at Walmart <!-- .element: class="fragment fade-up" -->

Note:
* Walmart: world's largest company by revenue (Fortune Global 500 list in 2014)
  * chiffre d'affaire
* Walmart: biggest private employer in the world (2.2 million employees)


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
* configuration over code: <!-- .element: class="fragment fade-up" -->
  * do as much as possible with config!
* caching built-in <!-- .element: class="fragment fade-up" -->

Note:

* big teams / code isolation: not as important for microservices, but still interesting


## Principle: config over code

* <!-- .element: class="fragment fade-up" data-fragment-index="1" --> everything possible in code...
* <!-- .element: class="fragment fade-up" data-fragment-index="2" --> _as much as possible with config!_
* <!-- .element: class="fragment fade-up" data-fragment-index="3" --> input/output validation (schema)
* <!-- .element: class="fragment fade-up" data-fragment-index="3" --> reflection (create documentation, generate stubs)
* <!-- .element: class="fragment fade-up" data-fragment-index="3" --> can validate config (bad keys, bad values) -> reduces errors
* <!-- .element: class="fragment fade-up" data-fragment-index="3" --> more reusable (easier to copy config vs code)

Note:

* stubs for java/objective-C, i.e. for android devs don't have update all of there java class for serialization


## try to keep minimum interactions with framework

* ### config -> framework
* ### code -> business logic


## Features

<ul>
  <li class="fragment fade-up">
    <h3>validation</h3>
    <ul>
      <li>difficult to have conditional validation (if quary param then no body, etc)</li>
      <li>especially in node with if asynchronous</li>
    </ul>
  </li>
  <li class="fragment fade-up"><h3>utilities (static files, dirs, proxies)</h3>
  <li class="fragment fade-up"><h3>views (basic template support)</h3>
</ul>


# BIG framework?

### express is small (few hundred lines of code)...
### hapi is big?

features start in core
<!-- .element: class="fragment fade-in" -->

if feature adds value, stays integrated in framework, else move to plugin
<!-- .element: class="fragment fade-in" -->

Note:

* node.js, we say "no big frameworks!"
* the result is a highly functional, integrated framework


# 100% coverage

### "for every percent between 85 and 100... we found at least 1 bug"

_- Eran Hammer_
