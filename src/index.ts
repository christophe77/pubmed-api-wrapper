import eSearch from './commands/eSearch';
import eInfo from './commands/eInfo';
import eSpell from './commands/eSpell';

import { ApiKey, IPubmedApi, RetMode } from './types/PubmedApi';

export class PubmedApi implements IPubmedApi {
  retMode;
  apiKey;
  eInfo;
  eSearch;
  eSpell;

  constructor(retMode?: RetMode, apiKey?: ApiKey) {
    this.retMode = retMode ? retMode : 'json';
    this.apiKey = apiKey && apiKey !== '' ? `&api_key=${apiKey}` : '';
    this.eInfo = eInfo(this.retMode, this.apiKey);
    this.eSearch = eSearch(this.retMode, this.apiKey);
    this.eSpell = eSpell(this.retMode, this.apiKey);
  }
}
