const PubmedApi = require('../');
/*
    By default PubmedApi is set to
        retMode : json
        apiKey : undefined
    You can override this settings in the constructor :
        const pubMedApi = new PubmedApi("xml");
        const pubMedApi = new PubmedApi("xml", "myApiKey");
*/

const pubMedApi = new PubmedApi.PubmedApi();

// eInfo
async function getDbList() {
  try {
    const results = await pubMedApi.eInfo.getDbList();
    console.log(results);
  } catch (error) {
    console.log(error);
  }
}

async function getDbInfo() {
  try {
    const results = await pubMedApi.eInfo.getDbInfo('pubmed');
    console.log(results);
  } catch (error) {
    console.log(error);
  }
}

// eSearch

async function getSearch() {
  try {
    const results = await pubMedApi.eSearch.search('pubmed', 'green');
    console.log(results);
  } catch (error) {
    console.log(error);
  }
}

async function getSearchWithOptions() {
  const options = {
    minDate: '2021/01/01',
    maxDate: '2021/02/02',
    retStart: '500',
    retMax: '1000',
    retType: '',
    dateType: 'edat',
    relDate: '',
  };
  try {
    const results = await pubMedApi.eSearch.search('pubmed', 'green', options);
    console.log(results);
  } catch (error) {
    console.log(error);
  }
}

// eSpell

async function getSpell() {
  try {
    const results = await pubMedApi.eSpell.search('pubmed', 'green');
    console.log(results);
  } catch (error) {
    console.log(error);
  }
}
getSpell()
