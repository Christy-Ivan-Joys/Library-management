
import jwt from 'jsonwebtoken'
import dotenv from 'dotenv'
dotenv.config()

export const generateToken = (res,userId,identity) => {

    const payload = { userId,role:identity }
    const token = jwt.sign(payload, process.env.JWT_SECRET,{
        expiresIn: '7d',
    })

    res.cookie(`${identity}AccessToken`, token, {
        httpOnly: false,
        secure: false,
        maxAge: 3600000,
        sameSite: 'strict',
        path: '/'    
    })
    return token
}

export const generateRefreshToken = (res,userId,identity) => {
    const payload = { userId,role:identity }
    const token = jwt.sign(payload, process.env.JWT_REFRESH_KEY,{
        expiresIn: '30d',
    })

    res.cookie(`${identity}RefreshToken`, token, {
        httpOnly: false,
        secure: false,
        maxAge: 30 * 24 * 60 * 60 * 1000,
        path: '/'
    })

    return token

}
