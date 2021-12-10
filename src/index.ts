import eEntrez from './commands/eEntrez';
import eFetch from './commands/eFetch';
import eSearch from './commands/eSearch';
import eInfo from './commands/eInfo';

async function getQuery() {
  const results = await eSearch.getSearch('pubmed', 'zanzibar');
  console.log(results);
}
getQuery();

export default {
    eEntrez,
    eFetch,
    eInfo,
  };

