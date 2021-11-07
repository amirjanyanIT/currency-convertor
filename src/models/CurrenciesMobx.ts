import { CurrencyTypes } from ".";

export interface CurrencyElement { currency: string, value: number  }
export interface CurrenciesMobx {
    currencies: CurrencyElement[]
    fetchCurrencies: (baseCurrency: CurrencyTypes) => Promise<boolean>
}