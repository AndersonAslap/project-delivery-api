import { NextFunction, Request, Response } from "express";
import { verify } from "jsonwebtoken";
import { AppError } from "../../../error/AppError";

interface IPayload {
    sub: string;
}

async function ensureAuthenticateClient(request: Request, response: Response, next: NextFunction) {
    const tokenHeader = request.headers.authorization;

    if (!tokenHeader) {
        throw new AppError("Token missing", 401);
    }

    const [, token] = tokenHeader.split(" ");

    try {
        const { sub } = verify(token, "4526a504ddc1d091c598fcd0efce20f8") as IPayload;

        request.id_client = sub;

        return next();

    } catch (err) {
        throw new AppError("Inválid token!", 401);
    }
}

export { ensureAuthenticateClient };