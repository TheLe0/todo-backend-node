import { Task, createNewTask } from "../domain";
import { IApplicationStorage } from "./types";

export default class InMemory implements IApplicationStorage {

    private tasks: Array<Task>;

    constructor() {
        this.createDatabaseStructure();
    }

    public createTask (name: string): Task {

        var task = createNewTask(name);
        this.tasks.push(task);

        return task;
    }

    public findTaskById (id: string): Task {

        let task: Task = undefined;

        for (let row of this.tasks) {
            if (row.id == id) {
                task = row;
                break;
            }
        }

        return task;
    }

    public deleteTaskById (id: string): boolean {

        let newTaskList = new Array<Task>();
        let taskDeleted = false;

        for (let row of this.tasks) {
            if (row.id == id) {
                taskDeleted = true;
            } else {
                newTaskList.push(row);
            }
        }

        this.tasks = newTaskList;
        return taskDeleted;
    }

    public closeTaskById (id: string): Task {

        let newTaskList = new Array<Task>();
        let task = undefined;

        for (let row of this.tasks) {
            if (row.id == id) {
                row.isClosed = true;
                task = row;
            }

            newTaskList.push(row);
        }

        this.tasks = newTaskList;
        return task;
    }

    public getAllTasks (): Array<Task> {
        return this.tasks;
    }

    private createDatabaseStructure () {
        this.tasks = new Array<Task>();
    }
}