import { v4 as uuidv4 } from 'uuid';

export interface Task {
    id: string;
    name: string;
    isClosed: boolean;
}

export function createNewTask (content: string): Task {
    return {
        id: uuidv4(),
        name: content,
        isClosed: false
    }
}

export function closeTask (task: Task): Task {
    return {
        id: task.id,
        name: task.name,
        isClosed: true
    }
}