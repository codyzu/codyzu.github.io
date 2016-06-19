![pouchdb logo](images/pouchdb.png)

# [pouchdb.com](http://pouchdb.com)


# What is it?

* open source javascript db <!-- .element: class="fragment fade-up" -->
* <!-- .element: class="fragment fade-up" --> browser **and** node.js
* works with couchdb protocol <!-- .element: class="fragment fade-up" -->
* db for npm <!-- .element: class="fragment fade-up" -->


# Offline first

> because being offline shouldn't be an error condition

_- Bradley Holt, IBM Cloudant_

Note:

* if we are nearly always connected do we need offline capability?
* maybe it's more important?
  * because users have the expectation that the app works all of the time


# backends

* couchdb
* cloud
* leveldb/leveldown (in-memory, sqlite, sql)


# documents
* json
* \_id (indexed field)
* \_rev (optimistic concurrency)


```json
{
  "_id": "Organization/Axway/Contact/codyzu",
  "_rev": "1-bea5fa18e06522d12026f4aee6b15ee4",
  "title": "Software Engineer",
  "site": "Annecy"
}
```

Note:
* indexes: collation ordering


# indexes: use them!

* <!-- .element: class="fragment fade-up" data-fragment-index="1" --> `Date.toJSON()` to sort sequentially
* <!-- .element: class="fragment fade-up"  data-fragment-index="2"--> `Organization/Axway/Contact/codyzu`
* <!-- .element: class="fragment fade-up"  data-fragment-index="3"--> combine with `startKey`, `endKey`, `descending`
* secondary indexes are possible, typically the primary will be enough <!-- .element: class="fragment fade-up" data-fragment-index="4" -->
* <!-- .element: class="fragment fade-up" data-fragment-index="5" --> [12-pro-tips-for-better-code-with-pouchdb](https://pouchdb.com/2014/06/17/12-pro-tips-for-better-code-with-pouchdb.html)
* <!-- .element: class="fragment fade-up" data-fragment-index="5" --> [secondary-indexes-have-landed-in-pouchdb](https://pouchdb.com/2014/05/01/secondary-indexes-have-landed-in-pouchdb.html)
* <!-- .element: class="fragment fade-up" data-fragment-index="5" --> [pouchdb-find plugin](https://github.com/nolanlawson/pouchdb-find) (mongo style queries)

Note:
* collation ordering
* can search by prefix
