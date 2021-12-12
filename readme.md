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

    async function getDbList() {
        const results = await pubMedApi.eInfo.getDbList();
    }
    async function getDbInfo() {
        const results = await pubMedApi.eInfo.getDbInfo('pubmed');
    }

### eSearch

All parameters are explained here : https://dataguide.nlm.nih.gov/eutilities/utilities.html#esearch<br/>

    // eSearch
    async function search() {
        const options = {
        // mandatory
            dbName: 'pubmed',
            query: 'green',
        // optional
            minDate: '2021/01/01',
            maxDate: '2021/02/02',
            retStart: '500',
            retMax: '1000',
            retType: '',
            dateType: '',
            relDate: '2021/01/01',
        };
        const results = await pubMedApi.eSearch.search(options);
    }
