import { useEffect, useState } from "react";
import { isConnected } from "@stellar/freighter-api";
import getPublicKey from "@stellar/freighter-api";

export default function WalletConnect() {
    const [walletAddress, setWalletAddress] = useState<string | null>(null);

    useEffect(() => {
        async function checkWallet() {
            console.log("Checking wallet connection...");
            try {
                const connected = await isConnected();
                console.log("isConnected:", connected);
                if (connected) {
                    const { address } = await getPublicKey.getAddress();
                    console.log("Wallet address:", address);
                    setWalletAddress(address);
                }
            } catch (err) {
                console.error("Wallet not connected", err);
            }
        }
        checkWallet();
    }, []);

    const connectWallet = async () => {
        console.log("Connect wallet button clicked");
        try {
            const { address } = await getPublicKey.getAddress();
            console.log("Wallet address:", address);
            setWalletAddress(address);
        } catch (e) {
            console.error("Freighter error:", e);
            alert("Freighter is not installed or rejected connection");
        }
    };

    return (
        <button
            onClick={connectWallet}
            className="bg-indigo-600 text-white px-4 py-2 rounded-lg hover:bg-indigo-700 transition"
        >
            {walletAddress
                ? walletAddress.slice(0, 6) + "..." + walletAddress.slice(-4)
                : "Connect Wallet"}
        </button>
    );
}