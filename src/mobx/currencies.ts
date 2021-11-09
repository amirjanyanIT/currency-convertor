import axios from 'axios';
import { makeAutoObservable } from "mobx"
import { CurrenciesMobx, CurrencyElement } from "../models";
import { CurrencyTypes } from '../types';

class Currencies implements CurrenciesMobx {

    currencies: CurrencyElement[] = []
    constructor() {
        makeAutoObservable(this)
    }

    fetchCurrencies = (baseCurrency: CurrencyTypes) => new Promise<boolean>(resolve => {
        axios.get('fetch-all', {
            params: {
                from: baseCurrency
            }
        }).then((req) => {
            this.currencies = Object.keys(req.data.results).reduce<CurrencyElement[]>((acc, currency, index) => {
                acc[index] = {
                    "currency": currency,
                    "value":`${acc[index]} ${baseCurrency}`
                }

                return acc;
            }, Object.values(req.data.results))
            resolve(true);
        })
        
    })
}

export const currencies = new Currencies();