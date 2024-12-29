import { FaCertificate, FaTrophy, FaMedal } from "react-icons/fa";
import Link from "next/link"; // Import Link from next for navigation

export default function CertificationsPage() {
  return (
    <div
      className="min-h-screen bg-gradient-to-br from-blue-900 via-purple-800 to-gray-900 text-white p-6"
      style={{
        backgroundImage: `url('/path-to-background-pattern.png')`, // Optional background image
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
      }}
    >
      {/* Header Section */}
      <header className="text-center mb-12">
        <h1 className="text-4xl font-bold tracking-wide text-blue-300 drop-shadow-lg">
          Certification & Achievements
        </h1>
        <p className="mt-4 text-lg text-gray-300">
          Earn certifications and gamified achievements as you progress through your learning journey!
        </p>
      </header>

      {/* Achievements Section */}
      <section className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {/* Certification Card */}
        <div className="bg-gray-800 p-6 rounded-lg shadow-md text-center">
          <FaCertificate className="text-yellow-400 text-6xl mx-auto mb-4" />
          <h2 className="text-2xl font-bold mb-2">Certified Learner</h2>
          <p className="text-gray-300">
            Complete courses and earn certificates to showcase your skills.
          </p>
        </div>

        {/* Trophy Card */}
        <div className="bg-gray-800 p-6 rounded-lg shadow-md text-center">
          <FaTrophy className="text-orange-400 text-6xl mx-auto mb-4" />
          <h2 className="text-2xl font-bold mb-2">Top Performer</h2>
          <p className="text-gray-300">
            Achieve top rankings in challenges and competitions.
          </p>
        </div>

        {/* Medal Card */}
        <div className="bg-gray-800 p-6 rounded-lg shadow-md text-center">
          <FaMedal className="text-green-400 text-6xl mx-auto mb-4" />
          <h2 className="text-2xl font-bold mb-2">Skill Master</h2>
          <p className="text-gray-300">
            Unlock badges by mastering various skills and topics.
          </p>
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="text-center mt-12">
        <h2 className="text-3xl font-semibold text-blue-300 mb-4">
          Start Your Journey Today!
        </h2>
        <p className="text-gray-300 mb-6">
          Dive into our courses and earn recognition for your hard work.
        </p>

        {/* Link to the course page */}
        <Link href="https://cryptocourse.app/" passHref>
          <button className="bg-blue-500 hover:bg-blue-600 text-white py-2 px-6 rounded-lg shadow-lg">
            Explore Courses
          </button>
        </Link>
      </section>
    </div>
  );
}
