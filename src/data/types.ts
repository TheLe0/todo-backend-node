import { Task } from "../domain";

export interface IApplicationStorage {
    createTask (name: string): Task;
    findTaskById (id: string): Task;
    GetAllTasks (): Array<Task>;
}