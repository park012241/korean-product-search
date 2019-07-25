import {getInfo} from './request';
import {ProductInfo} from './types';

const getProductInfo = async (code: number | string, timeout?: number): Promise<ProductInfo> => {
    const {data, status} = await getInfo(code.toString(), {
        timeout,
    });
    if (status !== 200) {
        throw new Error('Fail to get product data');
    }
    return new ProductInfo(data);
};

export {getProductInfo};
