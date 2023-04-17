import { AppConfig } from "../../src/config";

export function mockAppConfig (): AppConfig {
    return {
        databaseType: 1,
        cosmosDBConnection: undefined
    }
}