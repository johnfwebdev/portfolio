const session = require('express-session')
const redis = require('redis')
//const redisStore = require('connect-redis')(session)
//const client = redis.createClient()

module.exports = function sessions(req, res, next) {
  // session({
  //   // name: 'session-id',
  //   secret: 'john',
  //   resave: false,
  //   // store: new redisStore({ 
  //   //   host: 'localhost', 
  //   //   port: 6379, 
  //   //   client: client, 
  //   //   ttl: 260 
  //   // }),
  //   saveUninitialized: false,
  //   // cookie: {
  //   //   maxAge: 60
  //   // }
  // })

  
  console.log(req.body.userEmail)
  console.info('Session Logged')
  
  next()
}
