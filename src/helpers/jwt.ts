import {sign, verify} from "jsonwebtoken"
import dotenv from "dotenv";

dotenv.config();


export const generateToken = (userId: string) => {
    return sign(
      { userId, },
      process.env.JWT_SECRET as string,
    );
  };

export const verifyToken = (token: string) => {
    try {
        const decoded = verify(token, process.env.JWT_SECRET as string);
        return decoded;
    } catch (error) {
        return null;
    }
}