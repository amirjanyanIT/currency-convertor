import { CurrencyTypes } from "../types";

export interface CurrencyElement { currency: string, value: string }
export interface CurrenciesMobx {
    currencies: CurrencyElement[]
    fetchCurrencies: (baseCurrency: CurrencyTypes) => Promise<boolean>
}