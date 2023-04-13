import { createNewTask, closeTask } from '../../src/domain';
import { validate as uuidValidate } from 'uuid';

test('task create test', async () => {

    const task = createNewTask("First Task!");

    expect(task.name).toBe("First Task!");
    expect(task.isClosed).toBe(false);
    expect(uuidValidate(task.id)).toBeTruthy();
});

test('task close test', async () => {

    let task = createNewTask("First Task!");

    task = closeTask(task);

    expect(task.name).toBe("First Task!");
    expect(task.isClosed).toBe(true);
    expect(uuidValidate(task.id)).toBeTruthy();
});