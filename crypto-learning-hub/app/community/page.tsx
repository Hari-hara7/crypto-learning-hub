import { FaComments, FaUserFriends } from "react-icons/fa";

export default function CommunityPage() {
  return (
    <div
      className="min-h-screen bg-gradient-to-br from-indigo-900 via-purple-800 to-pink-800 text-white p-6"
      style={{
        backgroundImage: `url('/path-to-community-background.png')`, // Optional background image
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
      }}
    >
      {/* Header Section */}
      <header className="text-center mb-12">
        <h1 className="text-4xl font-bold text-blue-300 drop-shadow-lg">
          Join the Community Forum
        </h1>
        <p className="mt-4 text-lg text-gray-300">
          Get involved in the discussion and ask questions about cryptocurrency, blockchain, and more!
        </p>
      </header>

      {/* Features Section */}
      <section className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {/* Discussion Threads Card */}
        <div className="bg-gray-800 p-6 rounded-lg shadow-md text-center">
          <FaComments className="text-yellow-400 text-6xl mx-auto mb-4" />
          <h2 className="text-2xl font-bold mb-2">Discussion Threads</h2>
          <p className="text-gray-300">
            Participate in engaging conversations on cryptocurrency and blockchain topics.
          </p>
        </div>

        {/* Collaboration Card */}
        <div className="bg-gray-800 p-6 rounded-lg shadow-md text-center">
          <FaUserFriends className="text-green-400 text-6xl mx-auto mb-4" />
          <h2 className="text-2xl font-bold mb-2">Collaborate with Peers</h2>
          <p className="text-gray-300">
            Connect with like-minded individuals and collaborate on projects.
          </p>
        </div>

        {/* Events & Meetups Card */}
        <div className="bg-gray-800 p-6 rounded-lg shadow-md text-center">
          <FaUserFriends className="text-orange-400 text-6xl mx-auto mb-4" />
          <h2 className="text-2xl font-bold mb-2">Events & Meetups</h2>
          <p className="text-gray-300">
            Attend exclusive webinars and meetups on blockchain and crypto trends.
          </p>
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="text-center mt-12">
        <h2 className="text-3xl font-semibold text-blue-300 mb-4">
          Become a Part of Our Vibrant Community!
        </h2>
        <p className="text-gray-300 mb-6">
          Join the conversation, ask questions, and learn from experts.
        </p>

        {/* Link to community platform */}
        <a href="https://cryptocourse.app/" target="_blank" rel="noopener noreferrer">
          <button className="bg-blue-500 hover:bg-blue-600 text-white py-2 px-6 rounded-lg shadow-lg transition-all duration-300">
            Join the Forum
          </button>
        </a>
      </section>
    </div>
  );
}
