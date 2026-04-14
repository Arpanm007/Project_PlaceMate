function Footer() {
  return (
    <footer className="bg-black border-t border-gray-800 mt-20">

      <div className="max-w-6xl mx-auto px-6 py-12 grid md:grid-cols-4 gap-8 text-sm">

        {/* BRAND */}
        <div>
          <h2 className="text-white text-lg font-semibold mb-3">
            PlaceMate
          </h2>
          <p className="text-gray-400">
            AI-powered placement preparation platform helping students crack jobs smarter.
          </p>
        </div>

        {/* PRODUCT */}
        <div>
          <h3 className="text-white font-semibold mb-3">Product</h3>
          <ul className="space-y-2 text-gray-400">
            <li className="hover:text-white cursor-pointer">Dashboard</li>
            <li className="hover:text-white cursor-pointer">Profile</li>
            <li className="hover:text-white cursor-pointer">Resume</li>
            <li className="hover:text-white cursor-pointer">Companies</li>
          </ul>
        </div>

        {/* RESOURCES */}
        <div>
          <h3 className="text-white font-semibold mb-3">Resources</h3>
          <ul className="space-y-2 text-gray-400">
            <li className="hover:text-white cursor-pointer">About</li>
            <li className="hover:text-white cursor-pointer">Features</li>
            <li className="hover:text-white cursor-pointer">FAQ</li>
            <li className="hover:text-white cursor-pointer">Privacy Policy</li>
          </ul>
        </div>

        {/* CONNECT */}
        <div>
          <h3 className="text-white font-semibold mb-3">Connect</h3>
          <ul className="space-y-2 text-gray-400">
            <li className="hover:text-white cursor-pointer">GitHub</li>
            <li className="hover:text-white cursor-pointer">LinkedIn</li>
            <li className="hover:text-white cursor-pointer">Contact</li>
          </ul>
        </div>

      </div>

      {/* BOTTOM BAR */}
      <div className="text-center text-gray-500 text-sm pb-6">
        © 2026 PlaceMate — Built by PrepBuddies
      </div>

    </footer>
  );
}

export default Footer;