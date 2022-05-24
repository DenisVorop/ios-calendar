const jsonServer = require('json-server')
const server = jsonServer.create()
const router = jsonServer.router('./public/db.json')
const middlewares = jsonServer.defaults({
    static: './build',
})

const PORT = process.env.PORT || 4444

server.db = router.db

server.use(middlewares)
server.use(router)

server.listen(PORT, () => {
    console.log('Server is running')
})
