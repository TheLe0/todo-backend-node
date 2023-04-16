import { Task } from "../domain";

export interface IApplicationStorage {
    createTask (name: string): Task;
    findTaskById (id: string): Task;
    getAllTasks (): Array<Task>;
    deleteTaskById (id: string): boolean;
    closeTaskById (id: string): Task;
}