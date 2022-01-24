import { format as formatDate } from 'date-fns'

const formatedDate = (data) => formatDate(data, 'dd/MM/yyyy')
export default formatedDate