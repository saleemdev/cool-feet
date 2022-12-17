import Airtable from "airtable";


// Airtable.configure({
//     endpointUrl: 'https://api.airtable.com',
//     apiKey: 'key3mNhW8UqGDHKiO'
// });

// var base = Airtable.base('app91H4MNN24PZf62');

var base = new Airtable({ apiKey: 'keykzJqHkgrxjMCm1' }).base('app91H4MNN24PZf62');

export default base;