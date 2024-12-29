"use client"; // Mark this component as a client-side component

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { FaBitcoin, FaEthereum, FaCoins } from "react-icons/fa";
import CryptoCard from "@/components/CryptoCard";

// Define a type for the crypto data
interface CryptoPrice {
  symbol: string;
  price: number;
  change: number;
}

export default function HomePage() {
  const [cryptoPrices, setCryptoPrices] = useState<CryptoPrice[]>([]);

  useEffect(() => {
    // Fetching the live crypto prices from the backend API
    fetch("/api/gemini")
      .then((res) => res.json())
      .then((data) => setCryptoPrices(data))
      .catch((err) => console.error("Failed to fetch crypto prices:", err));
  }, []);

  return (
    <div
      className="min-h-screen bg-gradient-to-br from-purple-800 via-blue-800 to-gray-900 text-white"
      style={{
        backgroundImage: `url('/path-to-background-pattern.png')`, // Optional background pattern
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
      }}
    >
      <div className="p-6 max-w-7xl mx-auto">
        {/* Header Section */}
        <header className="text-center mb-12">
          <motion.h1
            className="text-5xl font-extrabold tracking-wide text-blue-300 drop-shadow-lg"
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            Educational Crypto Learning Hub
          </motion.h1>
          <p className="mt-4 text-lg text-gray-300">
            Learn about cryptocurrency, blockchain, and trading with real-time data!
          </p>
        </header>

        {/* Information Section */}
        <motion.section
          className="text-center mb-12"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <h2 className="text-3xl font-semibold text-blue-300 mb-4">
            Live Cryptocurrency Prices
          </h2>
          <p className="text-gray-400">
            Stay up to date with the latest prices from the Gemini exchange.
          </p>
        </motion.section>

        {/* Motion Icons */}
        <div className="flex justify-center space-x-6 mb-12">
          <motion.div
            whileHover={{ scale: 1.2 }}
            className="bg-gray-800 p-4 rounded-full shadow-lg"
          >
            <FaBitcoin className="text-yellow-400 text-4xl" />
          </motion.div>
          <motion.div
            whileHover={{ scale: 1.2 }}
            className="bg-gray-800 p-4 rounded-full shadow-lg"
          >
            <FaEthereum className="text-blue-400 text-4xl" />
          </motion.div>
          <motion.div
            whileHover={{ scale: 1.2 }}
            className="bg-gray-800 p-4 rounded-full shadow-lg"
          >
            <FaCoins className="text-green-400 text-4xl" />
          </motion.div>
        </div>

        {/* Crypto Cards Section */}
        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8"
          initial="hidden"
          animate="visible"
          variants={{
            hidden: { opacity: 0 },
            visible: {
              opacity: 1,
              transition: { staggerChildren: 0.2 },
            },
          }}
        >
          {cryptoPrices.length > 0 ? (
            cryptoPrices.map((crypto, index) => (
              <motion.div
                key={crypto.symbol || index}
                whileHover={{ scale: 1.05 }}
              >
                <CryptoCard crypto={crypto} />
              </motion.div>
            ))
          ) : (
            <div className="col-span-3 text-center text-gray-400">
              <div className="animate-pulse">
                <p>Loading prices...</p>
              </div>
            </div>
          )}
        </motion.div>
      </div>
    </div>
  );
}
