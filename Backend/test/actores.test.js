const request = require("supertest");
const faker = require("faker");
const dateformat = require("dateformat");
const app = require("../index");

describe("Prueba para los servicios de actores", function () {
  it("Verificar creacion de usuarios", async () => {
    const res = await (await request(app).get("/login"))
    //.send({
    //   "email": faker.internet.email(),
    //   "password": faker.internet.password(),
    //   "checked": faker.random.arrayElement([1, 2, 3]),
    // })
    expect(res.statusCode).toEqual(200)
    expect(res.body)
  });
});
