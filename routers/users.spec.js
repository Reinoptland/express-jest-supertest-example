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
      expect(res.status).toEqual(404);
      expect(res.body.message).toEqual("User not found");
      done();
    });
  });

  describe("POST /users", () => {
    test("should create a new user if firstName and lastName sent in the body", async (done) => {
      // TDD -> writing the test first -> then we implement the test
      // Test Driven Development
      // AAA

      // Arrange
      // maybe get a token, NA in this app
      const body = { firstName: "John", lastName: "Doe" };

      // Act
      const res = await request.post("/users").send(body);

      // Assert
      expect(res.status).toBe(200);
      expect(res.body).toEqual({
        message: "User created",
        data: {
          id: 6,
          firstName: "John",
          lastName: "Doe",
        },
      });

      done();
    });

    test("should return a 400 bad request if firstName or lastName are not sent in the body", async (done) => {
      // Arrange
      const body = {};
      // Act
      const res = await request.post("/users").send(body);
      // Assert
      expect(res.status).toBe(400);
      expect(res.body.message).toBe("No firstName or lastName in the request");
      done();
    });
  });
});
