import { CarsRepositoryInMemory } from "@modules/cars/repositories/in-memory/CarsRepositoryInMemory";
import { AppError } from "@shared/errors/AppError";

import { CreateCarUseCase } from "./CreateCarUseCase";

let createCarUSeCase: CreateCarUseCase;
let carsRepositoryInMemory: CarsRepositoryInMemory;

describe("Create Car", () => {
    beforeEach(() => {
        carsRepositoryInMemory = new CarsRepositoryInMemory();
        createCarUSeCase = new CreateCarUseCase(carsRepositoryInMemory);
    })

    it("Should be aeble to create a new car", async () => {
        const car = await createCarUSeCase.execute({
            name: "Name Car",
            description: "Description Car",
            daily_rate: 100,
            license_plate: "BJJ-0911",
            fine_amount: 60,
            brand: "Brand",
            category_id: "category",
        });

        expect(car).toHaveProperty("id");
    });

    it("Should not be able to create a car with exists license plate", () => {
        expect(async () => {
            await createCarUSeCase.execute({
                name: "Car 1",
                description: "Description Car",
                daily_rate: 100,
                license_plate: "BJJ-0911",
                fine_amount: 60,
                brand: "Brand",
                category_id: "category",
            });

            await createCarUSeCase.execute({
                name: "Car 2",
                description: "Description Car",
                daily_rate: 100,
                license_plate: "BJJ-0911",
                fine_amount: 60,
                brand: "Brand",
                category_id: "category",
            });
        }).rejects.toBeInstanceOf(AppError);
    });

    it("Should not be able to create a car with available true by default", async () => {
        const car = await createCarUSeCase.execute({
            name: "Car 2",
            description: "Description Car",
            daily_rate: 100,
            license_plate: "BJJ-0911",
            fine_amount: 60,
            brand: "Brand",
            category_id: "category",
        });

        console.log(car);

        expect(car.available).toBe(true);
    });
});