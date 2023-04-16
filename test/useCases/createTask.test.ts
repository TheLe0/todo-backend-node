import { CreateTaskUseCase, DeleteTaskUseCase } from "../../src/useCases";
import { validate as uuidValidate } from 'uuid';
import { mockAppConfig } from "../mocks/fixtures";

const createTaskUseCase = new CreateTaskUseCase(mockAppConfig());
const deleteTaskUseCase = new DeleteTaskUseCase(mockAppConfig());
let pendingTasksToDelete = new Array<string>();

beforeEach(() => {

    for (let id of pendingTasksToDelete) {
        deleteTaskUseCase.deleteById(id);
    }

    pendingTasksToDelete = new Array<string>();
});

test('task create test', async () => {

    const task = createTaskUseCase.createTask("First Task!");

    expect(task.name).toBe("First Task!");
    expect(task.isClosed).toBe(false);
    expect(uuidValidate(task.id)).toBeTruthy();

    pendingTasksToDelete.push(task.id);
});
