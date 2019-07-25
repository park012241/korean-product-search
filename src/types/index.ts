class ProductInfo {
    public readonly KANProductCategoryCode: string;
    public readonly code: string;
    public readonly info: string;
    public readonly photoLink?: string;
    public readonly productName: string;
    public readonly seller: string;
    public readonly vendor: string;
    public readonly weight: string;
    public readonly weightFullString: string;

    private readonly rawString: string;

    constructor(data: string) {
        this.rawString = data.replace(/[\r\n\t]/g, '');

        try {
            this.photoLink = `http://gs1.koreannet.or.kr${
                (/\/pr\/photoView\.do\?fileNm=[0-9_]+\.jpg&filePath=[0-9]+\/[0-9]+/.exec(this.rawString) as RegExpExecArray)[0]}`;
        } catch (e) {
            this.photoLink = undefined;
        }
        this.productName = (/<div class="pv_title"><h3>(.+)<\/h3>/u.exec(this.rawString) as RegExpExecArray)[1];
        this.KANProductCategoryCode = (/<td>([0-9]+)<\/td>/.exec(this.rawString) as RegExpExecArray)[1];
        this.code = (/<th>바코드\(GTIN\)<\/th><td>([0-9]+)<\/td>/.exec(this.rawString) as RegExpExecArray)[1];
        this.vendor = (/<th>제조사\/생산자<\/th><td>([^<>]+)<\/td>/u.exec(this.rawString) as RegExpExecArray)[1];
        this.seller = (/<th>판매자<\/th><td>([^<>]+)<\/td>/u.exec(this.rawString) as RegExpExecArray)[1];
        this.info = (/<div class="content_text" style="white-space: pre;">([^<>]+)<\/div>/u.exec(this.rawString) as RegExpExecArray)[1];
        this.weight = (/<th>내용물중량<\/th><td>([^<>]+)<\/td>/u.exec(this.rawString) as RegExpExecArray)[1];
        this.weightFullString = (/<th>총중량<\/th><td>([^<>]+)<\/td>/u.exec(this.rawString) as RegExpExecArray)[1];
    }
}

export {ProductInfo};
