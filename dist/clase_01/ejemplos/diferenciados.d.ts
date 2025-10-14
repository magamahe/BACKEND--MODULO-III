declare let anyValue: any;
declare let unknownValue: unknown;
declare function logMessage(message: string): void;
declare function throwError(errorMsg: string): never;
declare function infiniteLoop(): never;
declare let nullableValue: string | null;
declare let undefinedVaue: undefined;
declare let objectValue: object;
declare let symbol1: symbol;
declare let symbol2: symbol;
declare const objWithSymbol: {
    [symbol1]: string;
    [symbol2]: string;
};
declare function processData(value: any): void;
