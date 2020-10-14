export default class ApiReq {
<<<<<<< HEAD
=======
  // session / reg / get /items /
  constructor() {}
>>>>>>> new

  async sendHttpRequest(method, url, data) {
    try {
      const response = await fetch(url, {
        method: method,
        body: JSON.stringify(data),
        headers: data ? { "Content-Type": "application/json" } : {},
      });
      return await response.json();
    } catch (error) {
      console.log(error);
      throw error;
    }
  }

  // postItem  , getitem/:id  , putitems

  async setHeaderToken(method, url, data = null, token) {

    if ( method === "GET" ) {
      const response = await fetch(url, {
        method: method,
        headers: new Headers({
          Authorization: `Bearer ${token}`,
          "Content-Type": "application/json",
        }),
      });
      return await response.json();
    } else {
      const response = await fetch(url, {
        method: method,
        body: JSON.stringify(data),
        headers: new Headers({
          Authorization: `Bearer ${token}`,
          "Content-Type": "application/json",
        }),
      });
      return await response.json();
    }
  }
}
