import images from '../assets/images';

// Bill Payments mock data
export const countryList = [
  {
    id: 1,
    label: 'New Zealand',
    icon: 'nzIcon',
  },
  {
    id: 2,
    label: 'Africa',
    icon: 'africaIcon',
  },
  {
    id: 3,
    label: 'USA',
    icon: 'usIcon',
  },
];

export const categoryList = [
  {
    id: 1,
    label: 'Electricity',
  },
  {
    id: 2,
    label: 'Bill Payment',
  },
];

export const billerList = [
  {
    id: 1,
    label: 'Biller 1',
  },
  {
    id: 2,
    label: 'Biller 2',
  },
];

export const networkList = [
  {id: 1, label: 'Vodaphone'},
  {id: 2, label: 'Spark'},
  {id: 3, label: '2Degrees'},
];

export const dataPlanList = [
  {id: 1, label: '10GB - 30 Days'},
  {id: 2, label: '20GB - 30 Days'},
  {id: 3, label: '40GB - 30 Days'},
];

// Pay with cards mock data
export const currencyList = [
  {
    id: 1,
    label: 'United States dollar',
    icon: 'usIcon',
  },
  {
    id: 2,
    label: 'New Zealand dollar',
    icon: 'nzIcon',
  },
  {
    id: 3,
    label: 'South African Rand',
    icon: 'africaIcon',
  },
];

export const bankList = [
  {id: 1, label: 'Heartland Bank'},
  {id: 2, label: 'Westpac Bank'},
];

export const cards = [
  {
    bg_url: images.purpleCard, // update when moved
    balance: 620.89,
    four_digits: 7986,
    id: 28390038723,
    date: '20-12-26',
    bank: 'Heartland',
    color: 0,
  },
  {
    bg_url: images.blueCard,
    balance: 1620.89,
    four_digits: 8120,
    id: 28390038723,
    date: '20-12-26',
    bank: 'Westpac',
    color: 1,
  },
];
