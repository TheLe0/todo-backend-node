import { CreateTaskUseCase } from "../../src/useCases";
import { UpdateTaskUseCase } from "../../src/useCases/UpdateTask";
import { mockAppConfig } from "../mocks/fixtures";
import { v4 as uuidv4 } from 'uuid';

const createTaskUseCase = new CreateTaskUseCase(mockAppConfig());
const updateUseCase = new UpdateTaskUseCase(mockAppConfig());

test('close task by id not found test', async () => {

    const deleted = updateUseCase.closeById(uuidv4());

    expect(deleted).toBe(undefined);
});

test('delete task by id found test', async () => {

    const createdTask = createTaskUseCase.createTask("First Task!");

    const deleted = updateUseCase.closeById(createdTask.id);

    expect(deleted.id).toBe(createdTask.id);
    expect(deleted.name).toBe(createdTask.name);
    expect(deleted.isClosed).toBe(true);
});