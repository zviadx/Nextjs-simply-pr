
const jsonServer = require('json-server')
const fs = require('fs')
const path = require('path')
const cors = require("cors");
const server = jsonServer.create()
const router = jsonServer.router(path.resolve( __dirname, 'db.json'))
const middlewares = jsonServer.defaults({})
// const dbData = JSON.parse(fs.readFileSync(path.resolve(__dirname, 'db.json'), 'UTF-8'))

function corsMiddleware(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Methods", "GET, PUT, PATCH, POST, DELETE");
  res.header("Access-Control-Allow-Headers", "Content-Type, Authorization");
  next();
}

const PORT = 3001

const corsOptions = {
  origin: ['http://localhost:3000', 'http://localhost:5173'],
  credentials: true
}

server.use(cors(corsOptions))
server.use(corsMiddleware)
server.use(middlewares)
server.use(jsonServer.bodyParser)


server.use(async (req, res, next) => {
  await new Promise((resolve) => {
    setTimeout(resolve, 10);
  });
  next();
});

server.use(router)

server.listen(PORT, () => {
  console.log(`json-server is running in PORT ${PORT}`)
})
