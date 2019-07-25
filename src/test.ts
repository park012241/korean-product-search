import {getProductInfo} from './index';

(async (): Promise<void> => {
    // tslint:disable:no-console
    console.log(JSON.stringify(await getProductInfo(8801043014809)));
})();
