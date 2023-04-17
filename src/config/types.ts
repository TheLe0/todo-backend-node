export enum DatabaseType {
    IN_MEMORY = 1,
    COSMOS = 2
}

export interface AppConfig {
    databaseType: DatabaseType;
    cosmosDBConnection: CosmosDBConfig;
}

export interface CosmosDBConfig {
    endpoint: string;
    key: string;
    database: string;
    container: string;
}