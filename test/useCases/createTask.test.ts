import { createTask } from "../../src/useCases";
import { validate as uuidValidate } from 'uuid';
import { mockAppConfig } from "../mocks/fixtures";

test('task create test', async () => {

    const task = createTask("First Task!", mockAppConfig());

    expect(task.name).toBe("First Task!");
    expect(task.isClosed).toBe(false);
    expect(uuidValidate(task.id)).toBeTruthy();
});
