'use strict'

module.exports = function (fastify, opts, next) {

  const users = [
    { id: 1, name: 'Roberto ' },
    { id: 2, name: 'Andrea ' },
    { id: 3, name: 'Lorenzo ' },
  ]

  fastify.get('/users', function (request, reply) {
    reply.send(users)
  })

  next()
}
