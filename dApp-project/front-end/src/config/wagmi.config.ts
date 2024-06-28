// src/config/wagmi.config.ts
import { getDefaultConfig } from '@rainbow-me/rainbowkit';
import { http } from 'wagmi';
import { sepolia } from 'wagmi/chains';

const walletConnectProjectId: string = 'bc6c5cf4a4ffd871c77d4ebf7d542c96';
const providerKey: string = '8goo-NHY1wfRvQ7XFHV5c6lBUCszkTc2';

console.log('WalletConnect Project ID:', walletConnectProjectId); // 確認硬編碼的 ID
console.log('Alchemy ID:', providerKey); // 確認硬編碼的 ID

export const config = getDefaultConfig({
  appName: 'My-first-dapp',
  projectId: walletConnectProjectId,
  chains: [sepolia],
  providers: [
    http(providerKey)
  ],
  ssr: true,
});
