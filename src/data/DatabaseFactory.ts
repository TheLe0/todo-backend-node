import { AppConfig, DatabaseType } from "../config";
import InMemorySingleton from "./InMemorySingleton";
import { IApplicationStorage } from "./types";

export abstract class DatabaseFactory {

    public static getDatabase (config: AppConfig): IApplicationStorage {
        switch (config.databaseType) {
            case DatabaseType.IN_MEMORY: return InMemorySingleton.getInstance();
            default: return undefined;
        }
    }
}