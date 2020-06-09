const app = require("../server");

const supertest = require("supertest");
const request = supertest(app);

describe("User routes", () => {
  describe("GET /users", () => {
    test("should return an array of user objects", async (done) => {
      const res = await request.get("/users");
      console.log(res.body);
      expect(res.status).toBe(200);
      expect(res.body.length).toEqual(5);
      done();
    });
  });
});
