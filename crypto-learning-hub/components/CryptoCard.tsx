interface CryptoCardProps {
    crypto: {
      symbol: string;
      price: string;
    };
  }
  
  export default function CryptoCard({ crypto }: CryptoCardProps) {
    return (
      <div className="p-4 border rounded-lg shadow-md bg-gray-800 text-white">
        <h2 className="text-xl font-bold">{crypto.symbol}</h2>
        <p className="text-lg">${crypto.price}</p>
      </div>
    );
  }
  