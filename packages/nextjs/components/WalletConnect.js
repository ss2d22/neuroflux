import React, { useState } from 'react';
import styles from '../styles';

const WalletConnect = () => {
    const [userAddress, setUserAddress] = useState('');


    const connectWallet = async () => {
        if (window.ethereum) {
            try {
                const accounts = await window.ethereum.request({ method: 'eth_requestAccounts' });
                setUserAddress(accounts[0].substring(0, 6) + '...' + accounts[0].substring(accounts[0].length - 4));
            } catch (error) {
                console.error("Error connecting to wallet:", error);
            }
        } else {
            alert('MetaMask or another Ethereum-compatible wallet is required.');
        }

    };


    return (
        <div>
            {userAddress ? (
                <div><button className={styles.walletButton} onClick={connectWallet} disabled={true}>{userAddress}</button>
                </div>
            ) : (
                <><button className={styles.walletButton} onClick={connectWallet}>Connect Wallet</button></>
            )}
        </div>
    
    );
};

export default WalletConnect;
