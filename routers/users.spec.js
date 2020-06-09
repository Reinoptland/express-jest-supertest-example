const app = require("../server");

const supertest = require("supertest");
const request = supertest(app);

describe("User routes", () => {
  describe("GET /users", () => {
    test("should return an array of user objects", async (done) => {
      const res = await request.get("/users");
      expect(res.status).toBe(200);
      expect(res.body.length).toEqual(5);
      done();
    });
  });

  describe("GET /users/:id", () => {
    test("should respond with a specific user", async (done) => {
      const res = await request.get("/users/1");
      expect(res.status).toEqual(200);
      expect(res.body).toEqual({
        id: 1,
        firstName: "Irene",
        lastName: "de Nicolo",
      });

      done();
    });

    test("should respond with 404 if the user is not found", async (done) => {
      const res = await request.get("/users/99");
      expect(res.status).toEqual(200);
      expect(res.body.message).toEqual("User no found");
      done();
    });
  });
});
