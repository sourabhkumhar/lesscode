declare const isURL: (url: string, useRegex: boolean) => boolean;
declare const getImageType: (imageData: string) => Promise<string | null>;
declare const isBase64: (item: string) => boolean;
declare const binarySearch: (sortedArr: number[], target: number) => number;
declare const isDate: (value: any | null) => boolean;
declare const formatCurrency: (amount: number, currency: string, options?: {
    removeDefaultUI?: boolean;
    showFreeOnZero?: boolean;
    locales?: string;
    minimumFractionDigits?: number;
}) => string;
declare const formatNumber: (num: number) => string;
declare const formatDate: (dateString: string | undefined) => {
    year: string | number | null;
    month: string | number | null;
    day: string | number | null;
    hours: string | number | null;
    minutes: string | number | null;
    seconds: string | number | null;
};
declare const validateInputs: (field: {
    name: string;
    value: string;
    placeholder?: string;
    label?: string;
    required?: boolean;
}) => {
    hasError: boolean;
    message: string;
};
declare const getStringBool: (str: string | boolean) => boolean;
declare const convertCurrency: (from: string, to: string, value: number, rates: {
    [key: string]: {
        value: number;
    };
}) => number | undefined;
declare const emptyArray: (num: number) => any[];
declare const extractGST: (finalAmount: number, gstRate: number) => number;
declare const getDeviceType: () => "mobile" | "tablet" | "pc";
declare const getError: (error: any) => {
    hasError: boolean;
    message: string;
};
declare const errObj: (errorCondition?: boolean, message?: string) => {
    hasError: boolean;
    message: string;
};
declare const handleState: (setState: any, value: any, name?: string, root?: string) => boolean;
declare const getCommonArray: (uploaded: string[], selected: string[]) => string[];
declare const response: (res: any, code: number, message?: string, other?: {
    [key: string]: any;
}) => any;
declare const allowedMethods: (req: any, res: any, methods?: string[]) => boolean;
declare const encrypt: (value: string, SECRET_KEY?: string) => string | null;
declare const decrypt: (hash: string, SECRET_KEY?: string) => string | null;
declare const encryptSHA256: (value: string) => string | null;
declare const jwtSign: (value: string | object, JWT_SECRET?: string) => string;
declare const jwtVerify: (value: string, JWT_SECRET?: string) => string | object | null;
export { getDeviceType, getError, errObj, handleState, isURL, getImageType, isBase64, binarySearch, isDate, formatCurrency, formatNumber, formatDate, validateInputs, getStringBool, convertCurrency, emptyArray, getCommonArray, extractGST, response, allowedMethods, encrypt, decrypt, encryptSHA256, jwtSign, jwtVerify, };
