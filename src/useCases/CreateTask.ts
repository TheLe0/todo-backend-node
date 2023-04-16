import { AppConfig } from "../config";
import { DatabaseFactory } from "../data";
import { Task } from "../domain";

export function createTask (content: string, config: AppConfig): Task {

    var database = DatabaseFactory.getDatabase(config)

    return database.createTask(content);
}