// Axios is a popular NPM package used for preforming API requests
import axios from 'axios';

const dictionaryUrl = 'https://1rnoszgn46.execute-api.us-east-1.amazonaws.com';

// Using axios, we create a search method that is specific to our use case and export it at the bottom
const dictionaryApi = (query) =>
  axios.get(dictionaryUrl);
  
// Export an object with a "search" method that searches the Giphy API for the passed query

export const dictionariesUrl = `${dictionaryUrl}/dictionaries`;
export const randomWordUrl = `${dictionaryUrl}/random-word`;

export default dictionaryApi;
