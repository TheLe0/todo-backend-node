import { CreateTaskUseCase } from "../../src/useCases";
import { validate as uuidValidate } from 'uuid';
import { mockAppConfig } from "../mocks/fixtures";

test('task create test', async () => {

    const useCase = new CreateTaskUseCase(mockAppConfig());
    const task = useCase.createTask("First Task!");

    expect(task.name).toBe("First Task!");
    expect(task.isClosed).toBe(false);
    expect(uuidValidate(task.id)).toBeTruthy();
});
