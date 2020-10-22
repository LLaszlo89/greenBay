import App from "../src/app";
import request from "supertest";

import router from '../src/routes/api.routes'

const api = request(new App([router], 3000).app);

describe("Testing POST/Session endpoint", () => {
  it("Should pass with 200 ", (done) => {
    api
      .post("/api/session")
      .set("Accept", "application/json")
      .send({ username: "Lehel", password: "asdfasdf" })
      .expect("Content-Type", /json/)
      .expect(200, done);
  });

  it("Should fail with 401 , Password is missing ", (done) => {
    api
      .post("/api/session")
      .set("Accept", "application/json")
      .send({ username: "Lehel", password: "" })
      .expect("Content-Type", /json/)
      .expect(401,{
        message: "Password is missing"
    }, done);
  });

  it("Should fail with 401 ,Username is missing ", (done) => {
    api
      .post("/api/session")
      .set("Accept", "application/json")
      .send({ username: "", password: "asdfasdf" })
      .expect("Content-Type", /json/)
      .expect(401,{
        message: "Username is missing"
    }, done);
  });
  it("Should fail with 401 ,Password is incorrect ", (done) => {
    api
      .post("/api/session")
      .set("Accept", "application/json")
      .send({ username: "Lehel", password: "xdxd" })
      .expect("Content-Type", /json/)
      .expect(401,{
        message: "Password is incorrect"
    }, done);
  });
  it("Should fail with 404! ,User not exists ", (done) => {
    api
      .post("/api/session")
      .set("Accept", "application/json")
      .send({ username: "xdxd", password: "asdfasdf" })
      .expect("Content-Type", /json/)
      .expect(404,{
        message: "User not exists"
    }, done);
  });


});
