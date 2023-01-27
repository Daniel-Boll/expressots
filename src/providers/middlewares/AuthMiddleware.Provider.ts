import { HttpStatusErrorCode } from "@providers/error/ErrorTypes";
import { Env } from "env";
import { Request, Response, NextFunction } from "express";

const AuthMiddleware = (req: Request, res: Response, next: NextFunction) => {

    const secret = Env.Security.JWT_SECRET;
    const authHeader = req.get("Authorization");

    if (authHeader === secret) {
        next();
    } else {
        return res.status(HttpStatusErrorCode.Unauthorized).json({ error: HttpStatusErrorCode.Unauthorized, message: "You don't sufficient privileges" });
    }
}

export default AuthMiddleware;

