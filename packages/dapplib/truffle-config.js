require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'good armed ozone sugar notice crime remind mixture harvest deputy flat that'; 
let testAccounts = [
"0xe6fd6f2fa63564cdac38e198f384132897a6c0f67a77dc66959dcc660a9aee35",
"0xa39eb0f8f03769e77338a38c82f72b65e7e21e03dd21d864eb1defa3298fcd6f",
"0xdbe41b1823d26e81ea67de22b18cc4f8786785a10a4fbfb05594db0e9ab6acf7",
"0x3520c678155cff80f5bef57b8c17de148a98e5861e548b2fce754a7859b4ae25",
"0x2a1d283d2acbe90955b44c1b6c177fe2063e360b5e74b36829e0f9f967b44f4e",
"0xe90deb54ee983d3cf1b6a9d3fe1e46bd4dc48182c3b77b5a1e0a540b0bf618e8",
"0x5934795ce36eb36f0179cea1ef4e98b5cdb4fef8947b5793765d23c6be3122ee",
"0x494770ab234b0c44161efe1fa2841138cd69ab2f3c494b28b7f52239d6437875",
"0x825b825916f45ba6264e744b7f5fe67acd4ef93c4b3c209dde4b96e00ca6cf9a",
"0xe6180472fc59f2fd797e4e1ec9e8debf5d99ce90e921ba7b69fe3849639b8e59"
]; 
let devUri = 'https://rpc-mumbai.matic.today';

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
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            gas: 2000000,
            network_id: 80001,
            confirmations: 1,
            timeoutBlocks: 100,
            skipDryRun: true
        }
    },
    compilers: {
        solc: {
            version: '^0.5.11'
        }
    }
};

