# Code Example \#3

### Plugins


# Plugin basics


```javascript
import pack from '../package.json'
import * as config from './config'
```
<!-- .element: class="fragment fade-left" data-fragment-index="1" -->

```javascript
export function register (server, options, next) {
  // do plugin stuff

  next()
}
```
<!-- .element: class="fragment fade-left" data-fragment-index="2" -->

```javascript
register.attributes = {
  name: 'orgs',
  version: pack.version
}
```
<!-- .element: class="fragment fade-left" data-fragment-index="3" -->


# routes


`orgs/index.js`

```javascript
export function register (server, options, next) {
```
<!-- .element: class="fragment fade-left" data-fragment-index="1" -->
```javascript
  server.route({
    method: 'GET',
    path: '/orgs',
    config: config.getAll
  })
```
<!-- .element: class="fragment fade-left" data-fragment-index="2" -->
```javascript
  server.route({
    method: 'GET',
    path: '/orgs/{name}',
    config: config.getByName
  })
```
<!-- .element: class="fragment fade-left" data-fragment-index="3" -->
```javascript
  server.route({
    method: 'POST',
    path: '/orgs',
    config: config.post
  })
```
<!-- .element: class="fragment fade-left" data-fragment-index="4" -->

```javascript
  next()
}
```
<!-- .element: class="fragment fade-right" data-fragment-index="1" -->


# config


`orgs/config.js`

```javascript
import * as handlers from './handlers'
import * as validations from './validations'
```

```javascript
export const getAll = {
  tags: ['api'],
  response: {
    schema: validations.orgList
  },
  handler: handlers.getAllOrgs
}
```
<!-- .element: class="fragment fade-left" -->


`orgs/config.js`

```javascript
import * as handlers from './handlers'
import * as validations from './validations'
```

```javascript
export const getByName = {
  tags: ['api'],
  validate: {
    params: {
      name: validations.name
    }
  },
  response: {
    schema: validations.org
  },
  handler: handlers.getOrgByName
}
```
<!-- .element: class="fragment fade-left" -->


`orgs/config.js`

```javascript
import * as handlers from './handlers'
import * as validations from './validations'
```

```javascript
export const post = {
  tags: ['api'],
  validate: {
    payload: validations.org,
    options: {
      stripUnknown: true
    }
  },
  response: {
    schema: validations.org
  },
  handler: handlers.postOrg
}
```
<!-- .element: class="fragment fade-left" -->


# validations


`orgs/validations.js`

```javascript
import joi from 'joi'
```

```javascript
export const name = joi.string()
  .max(10)
  .required()
  .example('Axway')
  .default('Axway')
```
<!-- .element: class="fragment fade-left" -->


`orgs/validations.js`

```javascript
import joi from 'joi'

export const name = joi.string() // ...
```

```javascript
export const org = joi.object({
  name,
  email: joi.string()
    .email()
    .required()
    .example('cody@email.com')
}).unknown()
```
<!-- .element: class="fragment fade-left" -->


`orgs/validations.js`

```javascript
import joi from 'joi'

export const name = joi.string() // ...
export const org = joi.object() // ...
```

```javascript
export const orgList = joi.array()
  .items(org)
  .example([{name: 'Axway', email: 'cody@email.com'}])
```
<!-- .element: class="fragment fade-left" -->


# handlers


`orgs/handlers.js`

```javascript
const db = {}
```

```javascript
export function getAllOrgs (request, reply) {
  const orgs = Object.values(db)
  reply(orgs)
}
```
<!-- .element: class="fragment fade-left" -->


`orgs/handlers.js`

```javascript
const db = {}
```

```javascript
export function getOrgByName (request, reply) {
  const org = db[request.params.name]
  reply(org)
}
```
<!-- .element: class="fragment fade-left" -->


`orgs/handlers.js`

```javascript
const db = {}
```

```javascript
export function postOrg (request, reply) {
  db[request.payload.name] = request.payload
  reply(request.payload).code(201)
}
```
<!-- .element: class="fragment fade-left" -->


# Demo \#3

```bash
git checkout --force demo03
npm run srv
```

http://localhost:3000/documentation
