export class SessionController {
  constructor({ sessionService }) {
    this.sessionService = sessionService;
  }
  async post(req, res) {
    const user = req.body;
    try {
      const data = await this.sessionService.login(user);
     res.json(data)
    } catch (err) {
      return res.status(err.status).json(err.message);
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