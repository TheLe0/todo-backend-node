import { Task } from "../domain";

export interface IApplicationStorage {
    createTask (name: string): Task;
}