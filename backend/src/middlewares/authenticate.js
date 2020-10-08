//import Joi from 'joi';
const Joi = require('joi');

export class AuthenticateMiddleware {
  constructor({ sessionService }) {
    this.sessionService = sessionService;
  }

  authenticate(req, res, next) {
    try {
      const data = req.headers.authorization;
      const token = data.split(" ")[1];
      const user = this.sessionService.verifyToken(token);
      req.user = user;
      next();
    } catch (error) {
      res.status(401).json({ message: `Access Denied due to invalid token` });
    }
  }
}


/* fetch('/user/data', {
  method: 'GET',
  headers: {
    'Authorization': 'Bearer' + authToken
  }
})
.then(res => res.json())
.then(data => { console.log(data) })
.catch(err => { console.log(err) }) */