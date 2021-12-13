# PubMed API wrapper

PubMed API wrapper JS.<br/>

Feel free to contribute.<br/>

## Install

    yarn add pubmed-api

or <br />

    npm install --save pubmed-api

then import the package in your app : <br />

    import PubmedApi from 'pubmed-api';

or <br />

    const PubmedApi = require('pubmed-api');

By default PubmedApi is set to :<br />
retMode = json<br />
apiKey = undefined<br />

    const pubMedApi = new PubmedApi();

You can override this settings in the constructor :<br />

    const pubMedApi = new PubmedApi("xml");
    const pubMedApi = new PubmedApi("xml", "myApiKey");

## Available commands

### eInfo

Explanations here : https://dataguide.nlm.nih.gov/eutilities/utilities.html#einfo<br/>

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

### eSearch

Explanations here : https://dataguide.nlm.nih.gov/eutilities/utilities.html#esearch<br/>

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
            useHistory: true,
        };
        try {
            const results = await pubMedApi.eSearch.search('pubmed', 'green', options);
            console.log(results);
        } catch (error) {
            console.log(error);
        }
    }

### eSpell

Explanations here : https://dataguide.nlm.nih.gov/eutilities/utilities.html#espell<br/>

    async function getSpell() {
        try {
            const results = await pubMedApi.eSpell.search('pubmed', 'green');
            console.log(results);
        } catch (error) {
            console.log(error);
        }
    }

### eSummary

Explanations here : https://dataguide.nlm.nih.gov/eutilities/utilities.html#esummary<br/>

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

### eCitMatch

Explanations here : https://dataguide.nlm.nih.gov/eutilities/utilities.html#ecitmatch<br/>

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
