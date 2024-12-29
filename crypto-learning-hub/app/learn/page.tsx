import { FaBookOpen, FaPlayCircle } from 'react-icons/fa';

export default function LearnPage() {
  return (
    <div
      className="min-h-screen bg-gradient-to-r from-blue-900 via-purple-700 to-pink-600 text-white p-6"
      style={{
        backgroundImage: `url('/path-to-learn-background.jpg')`, // Optional background image
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
      }}
    >
      {/* Header Section */}
      <header className="text-center mb-12">
        <h1 className="text-4xl font-bold text-blue-200 drop-shadow-lg">
          Learn Cryptocurrency & Blockchain
        </h1>
        <p className="mt-4 text-lg text-gray-200">
          Explore interactive tutorials on trading, blockchain technology, and more!
        </p>
      </header>

      {/* Tutorials & Resources Section */}
      <section className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {/* Tutorial 1 */}
        <div className="bg-gray-800 p-6 rounded-lg shadow-lg text-center">
          <FaBookOpen className="text-yellow-400 text-6xl mx-auto mb-4" />
          <h2 className="text-2xl font-bold mb-2">Beginner&apos;s Guide</h2>
          <p className="text-gray-300 mb-4">
            Get started with cryptocurrency trading and blockchain basics. Perfect for beginners!
          </p>
          <a href="/tutorials/beginner" className="bg-blue-500 hover:bg-blue-600 text-white py-2 px-6 rounded-lg transition-all duration-300">
            Start Learning
          </a>
        </div>

        {/* Tutorial 2 */}
        <div className="bg-gray-800 p-6 rounded-lg shadow-lg text-center">
          <FaPlayCircle className="text-green-400 text-6xl mx-auto mb-4" />
          <h2 className="text-2xl font-bold mb-2">Interactive Demo</h2>
          <p className="text-gray-300 mb-4">
            Try out trading simulations and see real-time blockchain transactions in action.
          </p>
          <a href="/tutorials/demo" className="bg-green-500 hover:bg-green-600 text-white py-2 px-6 rounded-lg transition-all duration-300">
            Try Now
          </a>
        </div>

        {/* Tutorial 3 */}
        <div className="bg-gray-800 p-6 rounded-lg shadow-lg text-center">
          <FaBookOpen className="text-orange-400 text-6xl mx-auto mb-4" />
          <h2 className="text-2xl font-bold mb-2">Advanced Strategies</h2>
          <p className="text-gray-300 mb-4">
            Learn advanced techniques for trading and investing in cryptocurrency and blockchain.
          </p>
          <a href="/tutorials/advanced" className="bg-orange-500 hover:bg-orange-600 text-white py-2 px-6 rounded-lg transition-all duration-300">
            Learn More
          </a>
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="text-center mt-12">
        <h2 className="text-3xl font-semibold text-blue-300 mb-4">
          Start your Learning Journey Today!
        </h2>
        <p className="text-gray-300 mb-6">
          Explore our wide range of tutorials and interactive demos to boost your crypto knowledge.
        </p>
        <a href="/tutorials" className="bg-blue-500 hover:bg-blue-600 text-white py-3 px-8 rounded-lg shadow-lg transition-all duration-300">
          Explore All Tutorials
        </a>
      </section>
    </div>
  );
}
