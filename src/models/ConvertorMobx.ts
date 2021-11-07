import { CurrencyTypes } from ".";

export interface ConvertorSettings {
    from: CurrencyTypes,
    to: CurrencyTypes, 
    amount: number
}

export interface ConvertorMobx {
    result: number;
    covert: (settings: ConvertorSettings) => Promise<boolean>;
}