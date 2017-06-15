import init from './init';
import * as business1 from './business1';
import * as business2 from './business2';

init();

const modules = {
    ...business1,
    ...business2
};

export {
    modules
};
