"use client"; // Mark this component as a client-side component

import { useEffect, useState } from "react";
import CryptoCard from "@/components/CryptoCard";

export default function HomePage() {
  const [cryptoPrices, setCryptoPrices] = useState<any[]>([]);

  useEffect(() => {
    // Fetching the live crypto prices from the backend API
    fetch("/api/gemini")
      .then((res) => res.json())
      .then((data) => setCryptoPrices(data))
      .catch((err) => console.error("Failed to fetch crypto prices:", err));
  }, []);

  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold text-center mb-6">Educational Crypto Learning Hub</h1>
      <p className="text-lg text-center mb-6">
        Learn about cryptocurrency, blockchain, and trading with real-time data!
      </p>

      <div className="mb-6 text-center">
        <p className="text-xl">Live Cryptocurrency Prices</p>
        <p>Stay up to date with the latest prices from the Gemini exchange.</p>
      </div>

      {/* Grid displaying the crypto prices */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {cryptoPrices.length > 0 ? (
          cryptoPrices.map((crypto, index) => (
            <CryptoCard
              key={crypto.symbol || index} // Use crypto.symbol or index as a fallback
              crypto={crypto}
            />
          ))
        ) : (
          <div className="col-span-3 text-center text-gray-400">Loading prices...</div>
        )}
      </div>
    </div>
  );
}
