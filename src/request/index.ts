import axios, {AxiosRequestConfig, AxiosResponse} from 'axios';

const getInfo = (code: string, config: AxiosRequestConfig): Promise<AxiosResponse<string>> => {
    return axios.get<string>(`http://gs1.koreannet.or.kr/pr/${code}`, Object.assign(config, {
        headers: {
            'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64; rv:68.0) Gecko/20100101 Firefox/68.0',
        },
    }));
};

export {getInfo};
