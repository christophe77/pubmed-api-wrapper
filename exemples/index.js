import * as pubMedApi from '../dist';

// eInfo
async function getDbInfos() {
  const results = await pubMedApi.eInfo.getDb('pubmed');
  console.log(results);
}

// eSearch
async function getQuery() {
  const results = await pubMedApi.eSearch.getSearch('pubmed', 'zanzibar');
  console.log(results);
}

