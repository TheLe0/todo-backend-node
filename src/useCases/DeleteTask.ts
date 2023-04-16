import { AppConfig } from "../config";
import { BaseUseCase } from "./BaseUseCase";

export class DeleteTaskUseCase extends BaseUseCase {

    constructor(config: AppConfig) {
        super(config);
    }

    public deleteById (id: string): boolean {
        return this.database.deleteTaskById(id);
    }
}