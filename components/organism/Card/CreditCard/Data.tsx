const img1 = '../../assets/carrefour.png';
const img2 = '../../assets/carrefour.png';

export const cardsList: ArrayLike<historyList> = [
  {
    cardNum: 'Carrefour',
    amount: '$125,381.15',
    date: '15-12-2021',
    id: '',
    image: img1,
  },
  {
    cardNum: 'Amazon',
    amount: '$3004.21',
    date: '02-12-2021',
    id: '',
    image: img1,
  },
  {
    cardNum: 'Jumia',
    amount: '$2146.63',
    date: '28-11-2021',
    id: '',
    image: img1,
  },
  {
    cardNum: 'Hala',
    amount: '$5140.00',
    date: '15-12-2021',
    id: '',
    image: img1,
  },
];
interface historyList {
  cardNum: string;
  date: string;
  amount: string;
  image: string;
  id: string;
}