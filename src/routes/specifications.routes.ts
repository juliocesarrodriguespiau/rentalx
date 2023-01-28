import { Router } from "express";
import { ensureAuthenticates } from "../middlewares/ensureAuthenticated";

import { CreateSpecificationController } from "../modules/cars/useCases/createSpecification/CreateSpecificationController";

const specificationsRoutes = Router();

const createSpecificationController = new CreateSpecificationController();

specificationsRoutes.use(ensureAuthenticates);
specificationsRoutes.post("/", createSpecificationController.handle);

export { specificationsRoutes };