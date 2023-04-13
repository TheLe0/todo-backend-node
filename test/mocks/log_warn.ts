import { makeLogger } from '../../src/log';

const logger = makeLogger();

logger.info({
    type: 'LOG_TYPE_1',
    message: "An info to log"
});

logger.debug({
    type: 'LOG_TYPE_1',
    message: "A debug to log"
});

logger.warn({
    type: 'LOG_TYPE_1',
    message: "A warn to log"
});

logger.error({
    type: 'LOG_TYPE_1',
    message: "An error to log"
});