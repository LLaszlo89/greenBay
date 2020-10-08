export default class ApiReq {
  constructor() {}
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

  async setHeaderToken(method, url, token) {
    try {
      const response = await fetch(url, {
        method: method,
        headers: new Headers({
          Authorization: `Bearer ${token}`,
          "Content-Type": "application/json",
        }),
      });
      return await response.json();
    } catch (error) {
      console.log(error);
      throw error;
    }
  }
}
