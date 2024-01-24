import { Observable, of } from "rxjs";
import { currency } from "src/model/currency";
import { fromCurrencyList, toCurrencyList } from "src/model/mock-data";


export class CurrencyService {
    constructor() {
        console.log(`init currency service`);
    }

    public getCurrencyFromList(): Observable<currency[]> {
        const fromList: currency[] = [ ];
        fromList.push(...fromCurrencyList);
        console.log(`sending response from list ${fromList}`);
        return of(fromList);
    }

    public getCurrencyToList(): Observable<currency[]> {
        const fromList: currency[] = [ ];
        fromList.push(...toCurrencyList);
        console.log(`sending response To list ${fromList}`);
        return of(fromList);
    }
}