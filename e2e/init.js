const detox = require("detox")
const config = require("../package.json").detox
const adapter = require("detox/runners/jest/adapter")

jest.setTimeout(120000)
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
jasmine.getEnv().addReporter(adapter)

beforeAll(async () => {
  await detox.init(config)
})

beforeEach(async () => {
  await adapter.beforeEach()
})

afterAll(async () => {
  await adapter.afterAll()
  await detox.cleanup()
})
