import { eEntrezDb } from '../constants';

const eEntrez = {
  getDbList: () => {
    return JSON.stringify(eEntrezDb);
  },
};

export default eEntrez;
