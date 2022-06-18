import { ICategoriesRepository } from "../../repositories/ICategoriesRepository";


interface IRequest {
    name: string;
    description: string;
}

class CreateCategoryUseCase {
    static execute(arg0: { name: any; description: any; }) {
        throw new Error("Method not implemented.");
    }

    constructor( private categoriesRepository: ICategoriesRepository ) {}

    execute({ name, description }: IRequest): void {
        const categoryAlreadyExists = this.categoriesRepository.findByName(name);

        if ( categoryAlreadyExists )
            throw new Error("Category Already exists!");
    
        this.categoriesRepository.create({ name, description });
    }
}

export { CreateCategoryUseCase };