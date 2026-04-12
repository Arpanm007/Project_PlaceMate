import Card from "../components/Card";
import Navbar from "../components/Navbar";

function CompanySelect() {

  // dummy AI output
  const companies = [
    {
      name: "Amazon",
      match: 85,
      skills: ["DSA", "Graphs", "DP"],
    },
    {
      name: "TCS",
      match: 72,
      skills: ["Aptitude", "Arrays"],
    },
    {
      name: "Infosys",
      match: 78,
      skills: ["Strings", "OOP"],
    },
  ];

  //Sort Logic
  const sortedCompanies = [...companies].sort(
  (a, b) => b.match - a.match
);

  return (
    <div className="min-h-screen bg-white text-black dark:bg-black dark:text-white transition-colors duration-500">

      <Navbar />

      <div className="p-8">
        <h1 className="text-3xl font-bold text-center mb-2 text-black dark:text-white">
          Top Companies for You
        </h1>

        <p className="text-center text-gray-600 dark:text-gray-400 mb-8">
          Based on your resume analysis
        </p>

        <div className="grid md:grid-cols-3 gap-6">
          {sortedCompanies.map((company, index) => (
            <Card
              key={index}
              name={company.name}
              match={company.match}
              skills={company.skills}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default CompanySelect;