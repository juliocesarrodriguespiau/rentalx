import { compare } from "bcryptjs";
import { inject, injectable } from "tsyringe";
import { sign } from "jsonwebtoken";

import { AppError } from "../../../../errors/AppError";
import { IUsersRepository } from "../../repositories/IUsersRepository";

interface IRequest {
    email: string;
    password: string;
}

interface IResponse {
    user: {
        name: string,
        email: string,
    },
    token: string;
}

@injectable()
class AuthenticateUserUseCase {
    constructor(
        @inject("UsersRepository")
        private usersRepository: IUsersRepository
    ){}
    
    async execute({email, password}: IRequest): Promise<IResponse> {
    // usuário existe
    const user = await this.usersRepository.findByEmail(email);

    if(!user) {
        throw new AppError("Email or Password incorrect!");
    }
    // senha está correta
    const passwordMatch = await compare(password, user.password);

    if(!passwordMatch) {
        throw new AppError("Email or Password incorrect!");
    }
    // gerar webtoken // chave token md5 julioignite
    const token = sign({}, "1b266bb9c4ed56b3a37c9c0def0fb4e1", {
        subject: user.id,
        expiresIn: "1d",
    });

    const tokenReturn: IResponse = {
        token,
        user: {
            name: user.name,
            email: user.email,
        },
    };

    return tokenReturn;
   }
}  

export { AuthenticateUserUseCase };