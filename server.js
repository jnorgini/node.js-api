import { fastify } from 'fastify'
import { DatabaseMemory } from './database-memory.js'

const server = fastify()

const database = new DatabaseMemory()

server.post('/videos', (request, reply) => {
    const { title, description, duration } = request.body

    console.log(body)

    database.create({
        title,
        description,
        duration,
    })
    return reply.status(201).send()
})

server.get('/videos', () => {
    return 'route 2'
})

server.put('/videos/:id', () => {
    return 'route 3'
})

server.delete('/videos/:id', () => {
    return 'route 3'
})

server.listen({
    port: 3333,
})