import { Request, Response } from "express";
import { container } from "tsyringe";

import { ImportCategoryUseCase } from "./ImportCategoryUseCase";

class ImportCategoryController {
    async handle(request: Request, response: Response): Promise<Response> {
        const { file } = request;
        console.log(file);

        const importCateogoryUseCase = container.resolve(ImportCategoryUseCase);
        
        await importCateogoryUseCase.execute(file);

        return response.status(201).send();
    }
}

export { ImportCategoryController };