import { v4 as uuidv4 } from 'uuid';
import { mockAppConfig } from "../mocks/fixtures";
import { CreateTaskUseCase, FindTaskUseCase } from '../../src/useCases';

test('find task by id not found test', async () => {

    const useCase = new FindTaskUseCase(mockAppConfig());
    const task = useCase.findById(uuidv4());

    expect(task).toBe(undefined);
});

test('find task by id found test', async () => {

    const createTaskUseCase = new CreateTaskUseCase(mockAppConfig());
    const createdTask = createTaskUseCase.createTask("First Task!");

    const useCase = new FindTaskUseCase(mockAppConfig());
    const task = useCase.findById(createdTask.id);

    expect(task.id).toBe(createdTask.id);
    expect(task.name).toBe(createdTask.name);
    expect(task.isClosed).toBe(createdTask.isClosed);
});