import { AppConfig } from "../config";
import { DatabaseFactory, IApplicationStorage } from "../data";

export abstract class BaseUseCase {
    protected database: IApplicationStorage;
    protected appConfig: AppConfig;

    constructor(config: AppConfig) {
        this.appConfig = config;
        this.database = DatabaseFactory.getDatabase(this.appConfig);
    }
}