function UserTable() {

  const users = [
    { name: "Arpan", email: "arpan@mail.com", weak: "DP", score: 6 },
    { name: "Rahul", email: "rahul@mail.com", weak: "Arrays", score: 8 },
    { name: "Sneha", email: "sneha@mail.com", weak: "Graphs", score: 5 },
    // add more users to test scroll
    { name: "Test", email: "test@mail.com", weak: "OS", score: 7 },
    { name: "Test", email: "test@mail.com", weak: "OS", score: 7 },
    { name: "Test", email: "test@mail.com", weak: "OS", score: 7 },
    { name: "Test", email: "test@mail.com", weak: "OS", score: 7 },
    { name: "Test", email: "test@mail.com", weak: "OS", score: 7 }
  ];

  return (
    <div className="bg-gray-200 dark:bg-gray-900 transition-colors duration-500 p-6 rounded-xl">

      {/* Title */}
      <h2 className="text-xl font-semibold mb-4 text-gray-800 dark:text-gray-200">
        Students
      </h2>

      {/* Scroll Wrapper */}
      <div className="max-h-64 overflow-y-auto rounded-lg">

        <table className="w-full text-left text-sm">

          {/* Table Head */}
          <thead className="sticky top-0 bg-gray-300 dark:bg-gray-800 text-gray-700 dark:text-gray-400 border-b border-gray-300 dark:border-gray-700">
            <tr>
              <th className="py-2 px-2">Name</th>
              <th className="px-2">Email</th>
              <th className="px-2">Weak Topic</th>
              <th className="px-2">Score</th>
            </tr>
          </thead>

          {/* Table Body */}
          <tbody>
            {users.map((user, index) => (
              <tr
                key={index}
                className="border-b border-gray-300 dark:border-gray-800 hover:bg-gray-300 dark:hover:bg-gray-800 transition duration-200"
              >
                <td className="py-2 px-2 text-black dark:text-white">
                  {user.name}
                </td>

                <td className="px-2 text-gray-700 dark:text-gray-300">
                  {user.email}
                </td>

                <td className="px-2 text-red-500 dark:text-red-400 font-medium">
                  {user.weak}
                </td>

                <td className="px-2 text-green-600 dark:text-green-400 font-medium">
                  {user.score}
                </td>
              </tr>
            ))}
          </tbody>

        </table>

      </div>
    </div>
  );
}

export default UserTable;