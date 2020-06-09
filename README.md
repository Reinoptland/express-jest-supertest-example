# Express / jest / supertest

Here is a simple example of performing end to end test for an express api

- [Supertest](https://www.npmjs.com/package/supertest)
- [Jest](https://jestjs.io/docs/en/getting-started)

## Approach

- Instantiate the express app in [server.js](./server.js)
- export it
- Import it in test files like [users.spec.js](./routers/users.spec.js)
- Mount the app using super test like so:

```javascript
const app = require("../server");

const supertest = require("supertest");
const request = supertest(app);
```

- Make requests to it in test, **note** these kinds of tests are async, so you should call `done()` when the request is finished

```javascript
describe("GET /users", () => {
  test("should return an array of user objects", async (done) => {
    const res = await request.get("/users");
    expect(res.status).toBe(200);
    expect(res.body.length).toEqual(5);
    done();
  });
});
```

## Caveats

- This setup does not use a database (yet)
- Id we want to also test the database integration we can take 2 approaches

1. Fire up a test database a populate it with test data (time consuming, but realistic setting)
2. Mock the database by mocking the sequelize models for example (less time consuming, but also less realistic)
