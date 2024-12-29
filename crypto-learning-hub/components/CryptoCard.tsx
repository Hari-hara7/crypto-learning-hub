import { FaBitcoin, FaArrowUp, FaArrowDown } from "react-icons/fa";
import { GiTwoCoins } from "react-icons/gi";

interface CryptoCardProps {
  crypto: {
    symbol?: string; // Made optional
    name: string;
    price: string;
    change: number; // Percentage change in price
  };
}

export default function CryptoCard({ crypto }: CryptoCardProps) {
  const isPositiveChange = crypto.change >= 0;

  const getCryptoIcon = (symbol?: string) => {
    if (!symbol) return <GiTwoCoins size={30} className="text-blue-400" />;

    switch (symbol.toUpperCase()) {
      case "BTC":
        return <FaBitcoin size={30} className="text-yellow-400" />;
      case "ETH":
        return <GiTwoCoins size={30} className="text-gray-300" />;
      default:
        return <GiTwoCoins size={30} className="text-blue-400" />;
    }
  };

  return (
    <div className="p-6 border rounded-xl shadow-lg bg-gradient-to-br from-gray-800 via-gray-900 to-black text-white hover:shadow-2xl transition-transform transform hover:scale-105 duration-300">
      {/* Header Section */}
      <div className="flex items-center justify-between">
        <div className="flex items-center space-x-3">
          {getCryptoIcon(crypto.symbol)}
          <div>
            <h2 className="text-2xl font-bold">{crypto.symbol || "N/A"}</h2>
            <p className="text-gray-400 text-sm">{crypto.name}</p>
          </div>
        </div>
        <p
          className={`text-sm font-bold ${
            isPositiveChange ? "text-green-500" : "text-red-500"
          } flex items-center`}
        >
          {isPositiveChange ? <FaArrowUp className="mr-1" /> : <FaArrowDown className="mr-1" />}
          {crypto.change}%
        </p>
      </div>

      {/* Price Section */}
      <div className="mt-4">
        <p className="text-3xl font-semibold">${crypto.price}</p>
      </div>
    </div>
  );
}
