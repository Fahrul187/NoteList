import supertest from "supertest"
import { removeTestUser } from "./test-util.js"
import app from "../src/main.js"


describe('POST /api/users', () => {

    beforeEach(async () => {
        await removeTestUser()
    }, 20000)

    afterEach(async () => {
        await removeTestUser()
    }, 20000)

    it('should can register new user', async () => {
        const result = await supertest(app)
        .post('/api/users')
        .send({
            username: "test",
            password: "rahasia",
            name: "test"
        })

        expect(result.status).toBe(200)
        expect(result.body.data.username).toBe("test")
        expect(result.body.data.name).toBe("test")
        expect(result.body.data.password).toBeUndefined()
    })

})