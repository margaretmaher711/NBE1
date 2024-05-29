
const img1 = require('../../../../assets/halaImg.png');
const img2 = require('../../../../assets/aymanImg.png');

export interface SendMoneyList {
  name: string;
  phoneNum: string;
  amount: string;
  image: string;
  id: string;
}

export const sendMoneyCards: Array<SendMoneyList> = [
  {
    name: 'Jasmine ',
    id: '',
    image: img1,
    phoneNum: '+20 123 456 7890',
    amount: '$802,828.61',
  },
  {
    name: 'Ahmad Sami',
    id: '',
    image: img2,
    phoneNum: '+20 123 456 7890',
    amount: '$802,828.61',
  },
  {
    name: 'Mike Spectre',
    id: '',
    image: img1,
    phoneNum: '+20 123 456 7890',
    amount: '$802,828.61',
  },
  {
    name: 'Jasmine ',
    id: '',
    image: img1,
    phoneNum: '+20 123 456 7890',
    amount: '$802,828.61',
  },
  {
    name: 'Jasmine ',
    id: '',
    image: img1,
    phoneNum: '+20 123 456 7890',
    amount: '$802,828.61',
  },
  {
    name: 'Jasmine ',
    id: '',
    image: img1,
    phoneNum: '+20 123 456 7890',
    amount: '$802,828.61',
  },
];
