import { prismaClient } from '../application/database.js'

export const authMiddleware = async (req, res, next) => {
    const token = req.get('Authorization')

    if (!token) {
        req.status(401).json({
            errors: 'Unauthorized'
        }).end()
    } else {
        const user = await prismaClient.users.findFirst({
            where: {
                token: token
            }
        })
        
        if (!user) {
            res.status(401).json({
                errors: 'Unauthorized'
            }).end()
        } else {
            req.user = user
            next()
        }
    }

}