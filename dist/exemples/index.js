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

async function eSearchSearch() {
  try {
    const results = await pubMedApi.eSearch.search('pubmed', 'green');
    console.log(results);
  } catch (error) {
    console.log(error);
  }
}

async function eSearchSearchWithOptions() {
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

async function eSpellSearch() {
  try {
    const results = await pubMedApi.eSpell.search('pubmed', 'green');
    console.log(results);
  } catch (error) {
    console.log(error);
  }
}

// eSummary

async function eSummarySearch() {
  try {
    const results = await pubMedApi.eSummary.search(
      'pubmed',
      '11200,11201,11202',
    );
    console.log(results);
  } catch (error) {
    console.log(error);
  }
}

async function eSummarySearchWithOptions() {
  const options = {
    retStart: '100',
    retMax: '100',
    version: '2',
  };
  try {
    const results = await pubMedApi.eSearch.search('pubmed', 'green', options);
    console.log(results);
  } catch (error) {
    console.log(error);
  }
}

// eCitMatch
// bdata = journal_title|year|volume|first_page|author_name|your_key|

async function eCitMatch() {
  try {
    const results = await pubMedApi.eCitMatch.match(
      'pubmed',
      'proc+natl+acad+sci+u+s+a|1991|88|3248|mann+bj|Art1|%0Dscience|1987|235|182|palmenberg+ac|Art2|',
    );
    console.log(results);
  } catch (error) {
    console.log(error);
  }
}
