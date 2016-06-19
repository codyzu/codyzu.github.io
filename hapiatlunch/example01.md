# Code Example \#1

### Hello world

_see [prerequisites](#/prerequisites)_


## Setup + Install

```bash
git clone https://github.com/codyzu/hapi-demo.git
cd hapi-demo
git checkout dojo
npm install
```


# Hello world


```javascript
import hapi from 'hapi'
```
<!-- .element: class="fragment fade-up" data-fragment-index="1" -->

```javascript
const server = new hapi.Server()
server.connection({port: 3000})
```
<!-- .element: class="fragment fade-up" data-fragment-index="2" -->

```javascript
server.route({
  method: 'GET',
  path: '/',
  handler: (request, reply) => {
    reply('Hello world!')
  }
})
```
<!-- .element: class="fragment fade-up" data-fragment-index="3" -->

```javascript
server.start((err) => {
  if (err) {
    throw err
  }

  console.log(`Server running at: ${server.info.uri}`)
})
```
<!-- .element: class="fragment fade-up" data-fragment-index="4" -->


# Demo \#1

### Hello World

```bash
git checkout demo01
npm start
```

http://localhost:3000

![nodejs logo](images/nodejs.png)


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
