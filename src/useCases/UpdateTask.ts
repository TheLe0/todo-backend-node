import { AppConfig } from "../config";
import { Task } from "../domain";
import { BaseUseCase } from "./BaseUseCase";

export class UpdateTaskUseCase extends BaseUseCase {

    constructor(config: AppConfig) {
        super(config);
    }

    public closeById (id: string): Task {
        return this.database.closeTaskById(id);
    }
}