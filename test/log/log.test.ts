import { makeLogger } from '../../src/log';

const logger = makeLogger();

test('info loggin test', async () => {
    const spy = jest.spyOn(logger, 'info').mockImplementation((mesg) => mesg);

    await import("../mocks/log_info");

    const log = {
        type: 'LOG_TYPE_1',
        message: "An info to log"
    }

    expect(spy).toHaveBeenCalled();
    expect(spy).toBeCalledWith(log);
});

test('debug loggin test', async () => {
    const spy = jest.spyOn(logger, 'debug').mockImplementation((mesg) => mesg);

    await import("../mocks/log_debug");

    const log = {
        type: 'LOG_TYPE_1',
        message: "A debug to log"
    }

    expect(spy).toHaveBeenCalled();
    expect(spy).toBeCalledWith(log);
});

test('warn loggin test', async () => {
    const spy = jest.spyOn(logger, 'warn').mockImplementation((mesg) => mesg);

    await import("../mocks/log_warn");

    const log = {
        type: 'LOG_TYPE_1',
        message: "A warn to log"
    }

    expect(spy).toHaveBeenCalled();
    expect(spy).toBeCalledWith(log);
});

test('error loggin test', async () => {
    const spy = jest.spyOn(logger, 'error').mockImplementation((mesg) => mesg);

    await import("../mocks/log_error");

    const log = {
        type: 'LOG_TYPE_1',
        message: "An error to log"
    }

    expect(spy).toHaveBeenCalled();
    expect(spy).toBeCalledWith(log);
});