

require('@nomiclabs/hardhat-waffle');

module.exports = {
  solidity: '0.8.11',
  networks: {
    ropsten: {
      url: 'https://eth-ropsten.alchemyapi.io/v2/ry_AYWVgIss0CMca_vYRsEcJoCHq3-Eb',
      accounts: ['c8dafd0dc337ed810eb3e641904c9c4cfb814f0433a23e91dd08598be3c8734c'],
    },
  }
}