# PubMed API wrapper

PubMed API wrapper JS.<br/>

Feel free to contribute.<br/>

## Install

Not yet published<br/>

## Available commands

    import PubmedApi from '../dist';

    /*
        By default PubmedApi is set to
            retMode : json
            apiKey : undefined
        You can override this settings in the constructor :
            const pubMedApi = new PubmedApi("xml");
            const pubMedApi = new PubmedApi("xml", "myApiKey");
    */

    const pubMedApi = new PubmedApi();

### eInfo

Explanations here : https://dataguide.nlm.nih.gov/eutilities/utilities.html#einfo<br/>

    async function getDbList() {
        const results = await pubMedApi.eInfo.getDbList();
    }
    async function getDbInfo() {
        const results = await pubMedApi.eInfo.getDbInfo('pubmed');
    }

### eSearch

Explanations here : https://dataguide.nlm.nih.gov/eutilities/utilities.html#esearch<br/>

    async function search() {
        const options = {
        // mandatory
            dbName: 'pubmed',
            term: 'green',
        // optional
            minDate: '2021/01/01',
            maxDate: '2021/02/02',
            retStart: '500',
            retMax: '1000',
            retType: '',
            dateType: 'edat',
            relDate: '2021/01/01',
        };
        const results = await pubMedApi.eSearch.search(options);
    }
