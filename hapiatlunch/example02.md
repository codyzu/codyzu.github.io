# Code Example \#2

### Create / Read / List Organizations API


# config


`config.js`

```javascript
{
  // hapi.Server(...)
  server: {},

  // server.connection(...)
  connections: [ {
    port: 3000
  } ],

  // server.register(...)
  registrations: []
}
```


```javascript
import config from './config'
import glue from 'glue'
```
<!-- .element: class="fragment fade-in" data-fragment-index="1" -->

```javascript
glue.compose(config, {relativeTo: __dirname}, (err, server) => {
  if (err) {
    throw err
  }
```
<!-- .element: class="fragment fade-left" data-fragment-index="2" -->

```javascript
  server.start((err) => {
    if (err) {
      throw err
    }

    server.route({
      method: 'GET'
      // ...
    })

    console.log(`Server running at: ${server.info.uri}`)
  })
```
<!-- .element: class="fragment fade-left" data-fragment-index="3" -->

```javascript
})
```
<!-- .element: class="fragment fade-right" data-fragment-index="2" -->


# getByName


```javascript
server.route({
```
<!-- .element: class="fragment fade-left" data-fragment-index="1" -->

```javascript
  method: 'GET',
  path: '/orgs/{name}',
```
<!-- .element: class="fragment fade-left" data-fragment-index="2" -->

```javascript
  handler: (request, reply) => {
    reply(`hello ${request.params.name}!`)
  },
```
<!-- .element: class="fragment fade-left" data-fragment-index="3" -->

```javascript
  config: {
    validate: {
      params: {
        name: joi.string().max(10)
      }
    }
    // response: {} schema for reflection
  }
```
<!-- .element: class="fragment fade-left" data-fragment-index="4" -->
```javascript
})
```
<!-- .element: class="fragment fade-right" data-fragment-index="1" -->


# post


```javascript
server.route({
```
<!-- .element: class="fragment fade-left" data-fragment-index="1" -->

```javascript
  method: 'POST',
  path: '/orgs',
```
<!-- .element: class="fragment fade-left" data-fragment-index="2" -->

```javascript
  handler: (request, reply) => {
    reply(request.payload).code(201)
  },
```
<!-- .element: class="fragment fade-left" data-fragment-index="3" -->

```javascript
  config: {
    validate: {
      payload: joi.object({
        name: joi.string().max(10).required(),
        email: joi.string().email().required()
      }).unknown(),
      options: {
        stripUnknown: true
      }
    }
    // response: {} schema for reflection
  }
```
<!-- .element: class="fragment fade-left" data-fragment-index="4" -->

```javascript
})
```
<!-- .element: class="fragment fade-right" data-fragment-index="1" -->


# getAll


```javascript
server.route({
```
<!-- .element: class="fragment fade-left" data-fragment-index="1" -->

```javascript
  method: 'GET',
  path: '/orgs',
```
<!-- .element: class="fragment fade-left" data-fragment-index="2" -->

```javascript
  handler: (request, reply) => {
    const orgs = Object.values(db)
    console.log('GET ALL:', orgs)
    reply(orgs)
  },
```
<!-- .element: class="fragment fade-left" data-fragment-index="3" -->

```javascript
  config: {
    response: {
      schema: joi.array().items(
        joi.object({
          name: joi.string().max(10).required(),
          email: joi.string().email().required()
        }).unknown())
      .example([{name: 'Axway', email: 'cody@email.com'}])
    }
  }
```
<!-- .element: class="fragment fade-left" data-fragment-index="4" -->

```javascript
})
```
<!-- .element: class="fragment fade-right" data-fragment-index="1" -->


# Demo \#2

```bash
git checkout demo02
npm start
```

http://localhost:3000/documentation

_Note: swagger doc and UI_

![nodejs logo](images/nodejs.png)
