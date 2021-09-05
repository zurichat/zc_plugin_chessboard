const supertest = require("supertest")
const app = require("../../index")

const api = supertest(app)

test("random addition that passes", () => {
  expect(2 + 2).toEqual(4)
})

test("health check", async () => {
  const { body } = await api.get("/api/ping")
    .expect(200)
    .expect("Content-Type", /application\/json/)
    
  expect(body)
    .toMatchObject({
      message: "Hello from server!"
    })
})

describe("Info controller", () => {
  test("GET /api/info", async () => {
    const { body } = await api.get("/api/info")
      .expect(200)
      .expect("Content-Type", /application\/json/)

    expect(body).toHaveProperty("message")
    expect(body.data.type).toMatch(/plugin information/i)
    expect(body.data.scaffold_structure).toBe("Monolith")
    expect(body.data.team).toMatch(/team tesla$/i)
    expect(body.data.homepage_url).toBe("https://chess.zuri.chat")
    expect(body.data.plugin_info).toHaveProperty("name")
    expect(body.data.plugin_info.description)
      .toContain("Zuri.chat plugin")
  }, 500)

})
