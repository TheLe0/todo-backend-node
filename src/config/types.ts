export enum DatabaseType {
    IN_MEMORY = 1
}

export interface AppConfig {
    databaseType: DatabaseType;
}