import { AppConfig } from "../config";
import { Task } from "../domain";
import { BaseUseCase } from "./BaseUseCase";

export class FindTaskUseCase extends BaseUseCase {

    constructor(config: AppConfig) {
        super(config);
    }

    public findById (id: string): Task {
        return this.database.findTaskById(id);
    }
}