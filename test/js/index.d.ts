/// <reference path="../inject.d.ts" />
declare class Main {
    getAccount_R: HTMLDivElement;
    address: string;
    name: string;
    constructor();
    start(): Promise<void>;
    /**
     * 获得网络配置
     */
    getNetworks(): Promise<{}>;
    /**
     * 获得账户信息
     */
    getAccount(): Promise<{}>;
    /**
     * 获得余额信息
     */
    getBlock(params: number): Promise<{}>;
    /**
     * 获得余额信息
     */
    getTransaction(params: string): Promise<{}>;
    /**
     * 获得余额信息
     */
    getApplicationLog(params: string): Promise<{}>;
    /**
     * 获得余额信息
     */
    getBalance(params: string): Promise<{}>;
    /**
     * 试运行合约（单操作）
     */
    invokeRead(params: string): Promise<{}>;
    /**
     * 试运行合约（多操作）
     */
    invokeReadGroup(params: string): Promise<{}>;
    /**
     * send 发送转账交易
     */
    send(params: string): Promise<{}>;
    /**
     * invoke 发送合约调用交易（单操作）
     */
    invoke(params: string): Promise<{}>;
    /**
     * invoke 发送合约调用交易（多操作）
     */
    invokeGroup(params: string): Promise<{}>;
    /**
     * getAddressFromScriptHash
     */
    getAddressFromScriptHash(params: string): Promise<{}>;
    getStorage(params: string): Promise<{}>;
    /**
     * getAddressFromScriptHash
     */
    validateAddress(params: string): Promise<{}>;
    /**
     * getAddressFromScriptHash
     */
    reverseHexstr(params: string): Promise<{}>;
    /**
     * getAddressFromScriptHash
     */
    getStringFromHexstr(params: string): Promise<{}>;
    /**
     * getAddressFromScriptHash
     */
    getBigIntegerFromHexstr(params: string): Promise<{}>;
    /**
     * getAddressFromScriptHash
     */
    getDecimalsFromAssetAmount(params: any): Promise<{}>;
    /**
     * getAddressFromScriptHash
     */
    getBigIntegerFromAssetAmount(params: any): Promise<{}>;
    /**
     * getAddressFromScriptHash
     */
    getAddressFromDomain(params: DomainArgs): Promise<{}>;
    /**
     * getAddressFromScriptHash
     */
    getDomainFromAddress(params: any): Promise<{}>;
    /**
     * getAddressFromScriptHash
     */
    getNamehashFromDomain(params: string): Promise<{}>;
}
//# sourceMappingURL=index.d.ts.map