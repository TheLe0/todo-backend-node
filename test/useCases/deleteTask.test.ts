import { CreateTaskUseCase, DeleteTaskUseCase } from "../../src/useCases";
import { mockAppConfig } from "../mocks/fixtures";
import { v4 as uuidv4 } from 'uuid';

const createTaskUseCase = new CreateTaskUseCase(mockAppConfig());
const deleteUseCase = new DeleteTaskUseCase(mockAppConfig());

test('delete task by id not found test', async () => {

    const deleted = deleteUseCase.deleteById(uuidv4());

    expect(deleted).toBe(false);
});

test('delete task by id found test', async () => {

    const createdTask = createTaskUseCase.createTask("First Task!");

    const deleted = deleteUseCase.deleteById(createdTask.id);

    expect(deleted).toBe(true);
});