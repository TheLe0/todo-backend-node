import { Task, createNewTask } from "../domain";

export function createTask (content: string): Task {
    return createNewTask(content);
}