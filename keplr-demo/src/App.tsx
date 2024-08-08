import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { KeplrButton } from '@yash112/keplr-button';
import { ChainInfo } from '@keplr-wallet/types';

const nilChainTestnet: ChainInfo = {
  chainId: 'nillion-chain-testnet-1',
  chainName: 'Nillion Testnet',
  rpc: 'https://testnet-nillion-rpc.lavenderfive.com',
  rest: 'https://testnet-nillion-api.lavenderfive.com',
  bip44: { coinType: 118 },
  bech32Config: {
    bech32PrefixAccAddr: 'nillion',
    bech32PrefixAccPub: 'nillionpub',
    bech32PrefixValAddr: 'nillionvaloper',
    bech32PrefixValPub: 'nillionvaloperpub',
    bech32PrefixConsAddr: 'nillionvalcons',
    bech32PrefixConsPub: 'nillionvalconspub',
  },
  currencies: [{ coinDenom: 'NIL', coinMinimalDenom: 'unil', coinDecimals: 6 }],
  feeCurrencies: [{ coinDenom: 'NIL', coinMinimalDenom: 'unil', coinDecimals: 6 }],
  stakeCurrency: { coinDenom: 'NIL', coinMinimalDenom: 'unil', coinDecimals: 6 },
  coinType: 118,
};

const App: React.FC = () => {
  const [balance, setBalance] = useState<string | null>(null);

  useEffect(() => {
    const fetchBalance = async () => {
      if (!window.keplr || !window.getOfflineSigner || !window.getOfflineSigner) {
        setBalance('Keplr wallet is not installed.');
        return;
      }

      try {
        // Enable the chain in Keplr
        await window.keplr.enable('nillion-chain-testnet-1');

        // Fetch accounts to get address
        const offlineSigner = window.getOfflineSigner!('nillion-chain-testnet-1');
        const accounts = await offlineSigner.getAccounts();
        const address = accounts[0].address;

        // Fetch balance from REST API
        const response = await axios.get(
          `https://testnet-nillion-api.lavenderfive.com/cosmos/bank/v1beta1/balances/${address}`
        );

        // Log response data for debugging
        console.log('Balance response data:', response.data);

        const balanceData = response.data.balances.find(
          (balance: { denom: string }) => balance.denom === 'unil'
        );

        if (balanceData) {
          setBalance(balanceData.amount + ' ' + 'NIL');
        } else {
          setBalance('0 NIL');
        }
      } catch (error) {
        console.error('Error fetching balance:', error);
        setBalance('Unable to fetch balance: ' + (error as Error).message);
      }
    };

    fetchBalance();
  }, []);

  return (
    <div>
      <h1>Keplr Wallet Demo</h1>
      <KeplrButton buttonText="Add NilChain to Keplr" chainInfo={nilChainTestnet} />
      {balance && <p>Your NIL Balance: {balance}</p>}
    </div>
  );
};

export default App;
