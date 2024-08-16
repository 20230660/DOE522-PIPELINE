const request = require("supertest");
const { app, server } = require("../../app"); 

describe("GET /question3", () => {
  it("should return the correct response", (done) => {
    request(app)
      .get("/question3")
      .expect(200)
      .expect("Hello!")
      .end((err, res) => {
        if (err) return done(err);
        done();
      });
  });

  afterAll((done) => {
    server.close(done);
  });
});
