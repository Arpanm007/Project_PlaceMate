function Card({ name, match, skills }) {
  return (
    <div className="bg-gray-200 dark:bg-gray-900 p-5 rounded-xl shadow-md flex flex-col gap-3 transition-colors duration-500 hover:scale-105">

      <h2 className="text-xl font-semibold text-black dark:text-white">
        {name}
      </h2>

      <p className="text-green-500 font-medium">
        Match: {match}%
      </p>

      {match >= 80 && (
        <span className="text-xs bg-green-600 px-2 py-1 rounded">
          Best Match
        </span>
      )}

      <p className="text-gray-600 dark:text-gray-400 text-sm">
        Skills: {skills.join(", ")}
      </p>

      <button className="bg-black text-white dark:bg-white dark:text-black py-2 rounded-lg font-semibold hover:opacity-80 transition duration-200">
        Select
      </button>
    </div>
  );
}

export default Card;