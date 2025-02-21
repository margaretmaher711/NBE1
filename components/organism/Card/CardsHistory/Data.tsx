const img1 = require('../../../../assets/carrefour.png');
const img2 = require('../../../../assets/anazon.png');
const img3 = require('../../../../assets/jumia.png');
const img4 = require('../../../../assets/halaImg.png');
export const historyCards: ArrayLike<historyList> = [
  {
    name: 'Carrefour',
    amount: '$2,555',
    date: '15-12-2021',
    id: '',
    image: img1,
  },
  {
    name: 'Amazon',
    amount: '$3004.21',
    date: '02-12-2021',
    id: '',
    image: img2,
  },
  {
    name: 'Jumia',
    amount: '$2146.63',
    date: '28-11-2021',
    id: '',
    image: img3,
  },
  {name: 'Hala', amount: '$5140.00', date: '15-12-2021', id: '', image: img1},
  {name: 'Hala', amount: '$5140.00', date: '15-12-2021', id: '', image: img1},
  {name: 'Hala', amount: '$5140.00', date: '15-12-2021', id: '', image: img1},
];
interface historyList {
  name: string;
  date: string;
  amount: string;
  image: string;
  id: string;
}