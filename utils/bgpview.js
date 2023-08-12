const rax = require('retry-axios');
const axios = require('axios');

const interceptorId = rax.attach();

module.exports = async (asns) => {
  const prefixes = [];
  
  for (const asn of asns) {
    await new Promise((resolve) => {
      setTimeout(resolve, 3000); // Delay for 3 seconds
    });

    const { data } = await axios.get(`https://api.bgpview.io/asn/${asn}/prefixes`);
    prefixes.push(...data.data.ipv4_prefixes.map(({ prefix }) => prefix));
  }

  return prefixes;
};
