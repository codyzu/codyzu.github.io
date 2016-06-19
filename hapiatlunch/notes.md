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
