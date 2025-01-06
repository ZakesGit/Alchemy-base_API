const axios = require('axios');

const apiKey = 'odqj1Inc4Ob7xhGONE2GHkauhylEXMSA'; // Replace with your Alchemy API key
const url = `https://base-mainnet.g.alchemy.com/v2/${apiKey}`;

const payload = {
  jsonrpc: '2.0',
  id: 1,
  method: 'eth_blockNumber',
  params: []
};

axios.post(url, payload)
  .then(response => {
    console.log('Block Number:', response.data.result);
  })
  .catch(error => {
    console.error(error);
  });
