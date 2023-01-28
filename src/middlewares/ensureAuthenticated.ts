import { Request, Response, NextFunction } from "express";
import { verify } from "jsonwebtoken";
import { UsersRepository } from "../modules/accounts/repositories/implementations/UsersRepository";

interface IPayload {
    sub: string;
}

export async function ensureAuthenticates( 
    request: Request, 
    response: Response, 
    next: NextFunction 
) {
    const authHeader = request.headers.authorization;

    if (!authHeader) {
        throw new Error("Token missing!");
    }

    const [, token] = authHeader.split(" ");

    try {
        const { sub: user_id } = verify(
            token, 
            "1b266bb9c4ed56b3a37c9c0def0fb4e1"
        ) as IPayload;

        const usersRepository = new UsersRepository();

        const user = await usersRepository.findById(user_id);

        if (!user) {
            throw new Error("User does not exists!");
        }

        next();
    } catch {
        throw new Error("Invalid Token!");
    } 
}