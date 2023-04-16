import { v4 as uuidv4 } from 'uuid';
import { mockAppConfig } from "../mocks/fixtures";
import { CreateTaskUseCase, DeleteTaskUseCase, FindTaskUseCase } from '../../src/useCases';

const findTaskUseCase = new FindTaskUseCase(mockAppConfig());
const createTaskUseCase = new CreateTaskUseCase(mockAppConfig());
const deleteTaskUseCase = new DeleteTaskUseCase(mockAppConfig());
let pendingTasksToDelete = new Array<string>();

beforeEach(() => {

    for (let id of pendingTasksToDelete) {
        deleteTaskUseCase.deleteById(id);
    }

    pendingTasksToDelete = new Array<string>();
});

test('find task by id not found test', async () => {

    const task = findTaskUseCase.findById(uuidv4());

    expect(task).toBe(undefined);
});

test('find task by id found test', async () => {

    const createdTask = createTaskUseCase.createTask("First Task!");

    const task = findTaskUseCase.findById(createdTask.id);

    pendingTasksToDelete.push(task.id);

    expect(task.id).toBe(createdTask.id);
    expect(task.name).toBe(createdTask.name);
    expect(task.isClosed).toBe(createdTask.isClosed);
});

test('Get all tasks empty result test', async () => {

    const tasks = findTaskUseCase.GetAll();

    expect(tasks.length).toBe(0);
});

test('Get all tasks not empty result test', async () => {

    const firstTask = createTaskUseCase.createTask("First Task!");
    const secondTask = createTaskUseCase.createTask("Second Task!");
    const thirdTask = createTaskUseCase.createTask("Third Task!");

    pendingTasksToDelete.push(firstTask.id);
    pendingTasksToDelete.push(secondTask.id);
    pendingTasksToDelete.push(thirdTask.id);

    const tasks = findTaskUseCase.GetAll();

    expect(tasks.length).toBe(3);
});