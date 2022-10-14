jest.setTimeout(25000);
const request = require("supertest");
const app = require("../app");

describe("When accessing the get route ", () => {
  test("200 is received if username is valid", async () => {
    await request(app)
      .get("/api/v1/Medic1111")
      .expect(200)
      .expect("Content-Type", /json/)
      .then((serverRes) => {
        expect(serverRes.body).toBeDefined();
        expect(serverRes.body).toEqual(expect.any(Object));
        expect(serverRes.body).toEqual(
          expect.objectContaining({ message: expect.any(String) })
        );
        expect(serverRes.body).toEqual(
          expect.objectContaining({ message: "Success" })
        );
        expect(serverRes.body).toEqual(
          expect.objectContaining({ results: expect.any(Number) })
        );
        expect(serverRes.body).toEqual(
          expect.objectContaining({ repos: expect.any(Array) })
        );
        expect(serverRes.body).toEqual(
          expect.objectContaining({ owner: expect.any(Object) })
        );
      })
      .catch((err) => console.log(err));
  });

  test("404 if user is not found", async () => {
    await request(app)
      .get("/api/v1/notfoundwasfoundagain")
      .expect(404)
      .then((serverRes) => {
        expect(serverRes.body).toBeDefined();
        expect(serverRes.body).toEqual(expect.any(Object));
        expect(serverRes.body).toEqual(
          expect.objectContaining({ message: expect.any(String) })
        );
      })
      .catch((err) => console.log(err));
  });
});
