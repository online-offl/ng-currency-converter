import { Component, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { currency } from 'src/model/currency';
import { CurrencyService } from './cussrency-services';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'currency-converter';
  amountEntered = 0;
  fromList: currency[] = [];
  toList: currency[] = [];
  fromCurrencyChoosen: currency = {} as currency;
  toCurrencyChoosen: currency = {} as currency;
  convertedRate:string | number = 0;

  fromCurrencyChoosenToUI = {};
  toCurrencyChoosenToUI = {};

  constructor(private _modal: NgbModal, private _currencyService: CurrencyService) {
    console.log(` initializing app compononet`);
  }

  ngOnInit(): void {
      console.log(` initializing app compononet ngOninit`);
      this.loadFromListCurrency();
      this.loadToListCurrency();
  }

  public onAmountEntered(event: any) {
    this.amountEntered = event?.target?.value || 0;
  }

  public onFromCurrencyChange(event: any) {
    console.log(`From currency change event emitted with ${event?.target?.value}`);
    this.fromCurrencyChoosen = this.fromList.filter((_curr:currency) => _curr.name == event.target.value).pop() as currency;
    console.log(`choosen ${this.fromCurrencyChoosen}`);
    this.fromCurrencyChoosenToUI = JSON.stringify(this.fromCurrencyChoosen);
  }

  
  public onToCurrencyChange(event: any) {
    console.log(`To currency change event emitted with ${event?.target?.value}`);
    this.toCurrencyChoosen = this.toList.filter((_curr:currency) => _curr.name == event.target.value).pop() as currency;
    console.log(`choosen ${this.toCurrencyChoosen}`);
    this.toCurrencyChoosenToUI = JSON.stringify(this.toCurrencyChoosen);
  }

  public loadFromListCurrency() {
    console.log(` In loadFromListCuurency `);
    try {
      this._currencyService.getCurrencyFromList()
      .pipe((response) => response)
      .subscribe((list: currency[]) => {
        console.log("The response from server is", list);
        this.fromList.push(...list);
      })
    } catch (error: Error | any) {
      console.log(`Error ovvured while pulling from list with ${error?.message || error}`);
    }
  }

  
  public loadToListCurrency() {
    console.log(` In loadToListCuurency `);
    try {
      this._currencyService.getCurrencyToList()
      .pipe((response) => response)
      .subscribe((list: currency[]) => {
        console.log("The response to list from server is", list);
        this.toList.push(...list);
      })
    } catch (error: Error | any) {
      console.log(`Error occured while pulling to list with ${error?.message || error}`);
    }
  }

  // not used
  public open(modal: any): void {
    this._modal.open(modal);
  }

  public startConvertion(event:Event ) {
    console.log(`---- Starting conversion ------, ${this.amountEntered}`);
    const baseRes = this.toCurrencyChoosen.rate / this.fromCurrencyChoosen.rate;
    const result = this.amountEntered * baseRes;
    this.convertedRate = result.toFixed(2);
  }
  
}
