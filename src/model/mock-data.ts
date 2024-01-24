import { currency } from "./currency";

export const fromCurrencyList: currency[] = [
    { name : 'INR', rate: 80, fullName: 'Indian Rupees', symbol: '₹'  },
    { rate: 1, fullName: 'US Dollar', name: 'USD', symbol: '$'},
    { rate: 143.40, fullName: 'Japanese Yen', name: 'JPY', symbol: '¥'},

]

export const toCurrencyList: currency[] = [
    { name : 'INR', rate: 80, fullName: 'Indian Rupees', symbol: '₹'  },
    { name : 'USD', rate: 1, fullName: 'US Dollar', symbol: '$'},
    { name: 'JPY', rate : 143.40, fullName: 'Japanese Yen',  symbol: '¥'},

]