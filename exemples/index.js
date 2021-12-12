import PubmedApi from '../dist';

// By default PubmedApi is set to
// retMode : json
// apiKey : undefined
const pubMedApi = new PubmedApi();
// const pubMedApi = new PubmedApi("xml");
// const pubMedApi = new PubmedApi("xml", "myApiKey");

// eInfo
async function getDbList() {
  const results = await pubMedApi.eInfo.getDbList();
}
async function getDbInfo() {
  const results = await pubMedApi.eInfo.getDbInfo('pubmed');
}

// eSearch
async function search() {
  const options = {
    // mandatory
    dbName: 'pubmed',
    query: 'green',
    // optional
    minDate: '2021/01/01',
    maxDate: '2021/02/02',
  };
  const results = await pubMedApi.eSearch.search(options);
}
