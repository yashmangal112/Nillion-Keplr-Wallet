import React, { useState } from 'react';
import { ChainInfo } from '@keplr-wallet/types';

interface KeplrButtonProps {
  buttonText: string;
  chainInfo: ChainInfo;
}

const KeplrButton: React.FC<KeplrButtonProps> = ({ buttonText, chainInfo }) => {
  const [message, setMessage] = useState<string | null>(null);

  const addChainToKeplr = async () => {
    if (!window.keplr) {
      setMessage('Keplr wallet is not installed.');
      return;
    }

    try {
      await window.keplr.experimentalSuggestChain(chainInfo);
      setMessage('Chain added successfully!');
    } catch (error) {
      setMessage('Failed to add chain: ' + (error as Error).message);
    }
  };

  return (
    <div>
      <button onClick={addChainToKeplr}>{buttonText}</button>
      {message && <p>{message}</p>}
    </div>
  );
};

export default KeplrButton;