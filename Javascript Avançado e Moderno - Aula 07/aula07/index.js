import { format, compareAsc } from 'date-fns'

const formatedDate = format(new Date(), 'dd/MM/yyyy')
//=> '02/11/2014'
console.log(formatedDate)

const dates = [
    new Date(1997, 6, 2),
    new Date(1987, 1, 11),
    new Date(1989, 6, 10),
]
console.log(dates.sort(compareAsc))

// import formatterCurrency from './module.js'
import { formatterCurrency } from './module.js'

const result = formatterCurrency(20)
console.log(result)

import data from './data.json'
console.log(data)