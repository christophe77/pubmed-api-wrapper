import eSearch from './commands/eSearch';
import eInfo from './commands/eInfo';
import eSpell from './commands/eSpell';
import eSummary from './commands/eSummary';
import eCitMatch from './commands/eCitMatch';

import { ApiKey, IPubmedApi, RetMode } from './types/pubmedApi';

class PubmedApi implements IPubmedApi {
  retMode;
  apiKey;
  eInfo;
  eSearch;
  eSpell;
  eSummary;
  eCitMatch;

  constructor(retMode?: RetMode, apiKey?: ApiKey) {
    this.retMode = retMode ? retMode : 'json';
    this.apiKey = apiKey && apiKey !== '' ? `&api_key=${apiKey}` : '';
    this.eInfo = eInfo(this.retMode, this.apiKey);
    this.eSearch = eSearch(this.retMode, this.apiKey);
    this.eSummary = eSummary(this.retMode, this.apiKey);
    this.eSpell = eSpell(this.retMode, this.apiKey);
    this.eCitMatch = eCitMatch(this.retMode, this.apiKey);
  }
}
module.exports = PubmedApi;
