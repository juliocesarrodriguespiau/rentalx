import { Category } from "../../entities/Category";
import { ICategoriesRepository, ICreateCategoryDTO } from "../ICategoriesRepository";


class CategoriesRepositoryInMemory implements ICategoriesRepository {
    categories: Category[] = [];

    async findByName(name: string): Promise<Category> {
        const category = this.categories.find((category) => category.name === name);
        return category;
    }

    async list(): Promise<Category[]> {
        const all = this.categories;
        return all;
    }

    async create({ name, description }: ICreateCategoryDTO): Promise<void> {
        const category = new Category();

        Object.assign(category, {
            name,
            description,
        });

        this.categories.push(category);
    }   
}

<<<<<<< HEAD
export { CategoriesRepositoryInMemory };
=======
export { CategoriesRepositoryInMemory };
>>>>>>> c6d71285ab1c87c96097764163b275d0a95e447a
