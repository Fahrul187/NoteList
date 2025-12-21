import { prismaClient } from "../application/database.js"
import { ResponseError } from "../error/response.error.js"
import { loginUserValidation, registerUserValidation } from "../validation/user.validation.js"
import { validate } from "../validation/validation.js"
import bcrypt from "bcrypt";
import { v4 as uuid } from "uuid";

const register = async (request) => {
    const user = validate(registerUserValidation, request)

    const countUser = await prismaClient.users.count({
        where: {
            username: user.username
        }
    })

    if (countUser === 1) {
        throw new ResponseError(400, "username already exists");
    }

    user.password = await bcrypt.hash(user.password, 10)

    return prismaClient.users.create({
        data: user,
        select: {
            username: true,
            name: true
        }
    })
}


const login = async (request) => {
    const loginRequest = validate(loginUserValidation, request)

    const user = await prismaClient.users.findUnique({
        where: {
            username: loginRequest.username
        }
    })

    if (!user) {
        throw new ResponseError(401, "invalid username or password")
    }

    const isPasswordValid = await bcrypt.compare(loginRequest.password, user.password)

    if (!isPasswordValid) {
        throw new ResponseError(401, "invalid username or password")
    }

    const token = uuid().toString()

    return prismaClient.users.update({
        where: {
            username: user.username
        },
        data: {
            token: token
        },
        select: {
            token: true,
            username: true,
            name: true
        }
    })
}

export default {
    register,
    login
}