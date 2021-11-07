import axios from 'axios';
import { makeAutoObservable } from "mobx"
import { ConvertorMobx, ConvertorSettings } from "../models";

class Convertor implements ConvertorMobx {
    constructor() {
        makeAutoObservable(this)
    }

    result = 0;
    covert: (setting: ConvertorSettings) => Promise<boolean> = (settings) => new Promise<boolean>((resolve) => {
        axios.get('/convert', {
            params: settings
        }).then(({ data: { result } }) => {
            this.result = result[settings.to];
        })
        resolve(true);
    })
}

export const convertor = new Convertor();