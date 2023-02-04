import { CarsRepositoryInMemory } from "@modules/cars/repositories/in-memory/CarsRepositoryInMemory";

import { CreateCarUseCase } from "./CreateCarUseCase";

let createCarUSeCase: CreateCarUseCase;
let carsRepositoryInMemory: CarsRepositoryInMemory;

describe("Create Car", () => {
    beforeEach(() => {
        carsRepositoryInMemory = new CarsRepositoryInMemory();
        createCarUSeCase = new CreateCarUseCase(carsRepositoryInMemory);
    })

    it("Should be aeble to create a new car", async () => {
        await createCarUSeCase.execute({
            name: "Name Car",
            description: "Description Car",
            daily_rate: 100,
            license_plate: "BJJ-0911",
            fine_amount: 60,
            brand: "Brand",
            category_id: "category",
        });
    });
});