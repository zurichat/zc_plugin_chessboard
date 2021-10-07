const chai = require("chai");
const supertest = require("supertest");

const server = require("../../index");

const expect = chai.expect;
const api = supertest(server);

describe("checks", () => {
  it("sanity checks", () => {
    expect(10 * 10).to.equal(100);
  });
  
  it("api health check", async () => {
    // query to by-pass user auth
    const response = await api.get("/api/v1/ping/?user=''&org=''")
      .expect(200)
      .expect("Content-Type", /application\/json/);
    
    expect(response.body).to.have.property("message");
    expect(response.body.message).to.be.a("string");
    expect(response.body.message).to.match(/hello from server/i);
    
  }, 500);
});
