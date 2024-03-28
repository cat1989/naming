const {
    snake2pascal,
} = require('../dist')

describe("snake2pascal", () => {
    test("Basic: user_name", () => {
        expect(snake2pascal("user_name")).toBe("UserName")
    })

    test("Basic: empty", () => {
        expect(snake2pascal("")).toBe("")
    })

    test("Basic: camel case", () => {
        expect(snake2pascal("userName")).toBe("UserName")
    })

    test("Basic: with special char", () => {
        expect(snake2pascal("user-name")).toBe("UserName")
    })
})
