const request = require("supertest");

const server = require("./server");

describe("server.js", function() {
  describe("GET /", function() {
    it("should return 200 OK", function() {
      return request(server)
        .get("/")
        .expect(200);
    });
    it("should return JSON", function() {
      return request(server)
        .get("/")
        .then(res => {
          expect(res.type).toMatch(/json/i);
        });
    });
    // it('should respond with { api: "up" }', function() {
    //     return request(server).get('/').then(res => {
    //         expect
    //     })
    // });
  });
});

describe("server.js", function() {});
describe("server.js", function() {});
describe("server.js", function() {});
describe("server.js", function() {});
