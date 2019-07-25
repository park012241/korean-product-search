import {getProductInfo} from './index';
import {exit} from 'process';

(async (): Promise<void> => {
    try {
        // tslint:disable:no-console
        console.log(JSON.stringify(await getProductInfo(8801043014809)));
    } catch (e) {
        console.error(e);
        exit(1);
    }
})();
