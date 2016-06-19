import pack from '../package.json'
import * as config from './config'

export function register (server, options, next) {
  server.route({
    method: 'GET',
    path: '/orgs',
    config: config.getAll
  })

  server.route({
    method: 'GET',
    path: '/orgs/{name}',
    config: config.getByName
  })

  server.route({
    method: 'POST',
    path: '/orgs',
    config: config.post
  })

  next()
}

register.attributes = {
  name: 'orgs',
  version: pack.version
}
