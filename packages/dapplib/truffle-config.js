require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'inflict clinic blue trip fan renew noble smart include problem forward swim'; 
let testAccounts = [
"0x16c26710b28d81fac7784cae4b496df88d580e31ad17d0eb8b45920a85ae4690",
"0x2e9c70f28ad8488e959656a3fae2a943f8023ae2ed0eca086ac2368191411116",
"0x87fef8777842feeb0d20416b4dc42f344245e94c213974cd0ccb47f745502763",
"0xacde29f6772add23b52a6443c6bb3a8a588a913f7ac2f39dafbcab44006004e2",
"0x00d4253201b643111f25e40e7eee866ffcdc37d50f59bd557acf14de7b6c39e8",
"0x77e1329cf31acfa44804cec5a997596076f58b3372c8ea8477487de6379e7efc",
"0xf7f8d448974ee64d71564cc5b8daa9f9ee6e720e7ebf11f46451c086ecf0a3f7",
"0x67a87fd8ec5dd888ba59cc093962211785042fdd247fea2771c716afb6b77222",
"0x6683e69ee10220e39b58dca8dc98263877ad06975070113986c1182d2c567142",
"0x611f50f41dda46ed718d8e8b461ac379ce12e690872202389f8ed9ec3824f795"
]; 
let devUri = 'https://api.avax-test.network/ext/bc/C/rpc';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                6, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            gas: 3000000,
            gasPrice: 470000000000,
            network_id: '*',
            chainId: 43113,
            skipDryRun: true
        }
    },
    compilers: {
        solc: {
            version: '^0.8.0'
        }
    }
};


