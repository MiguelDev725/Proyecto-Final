import jwt from 'jsonwebtoken'
import dotenv from 'dotenv'
import { promise } from 'zod';

dotenv.config();

const TOKEN_SECRET = process.env.TOKEN_SECRET;

export function createdAccessToken (payload){
    return new Promise((resolve, reject) => {
        jwt.sign(
            payload,
            TOKEN_SECRET,
            {
                expiresIn: "1d",
            },(err, token) => {
                if (err) reject(err);
                resolve(token);
            }
        );
    });
    
}
