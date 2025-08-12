const Skills = () => {
  const skills = [
    { name: "html", src: "https://i.ibb.co/0y0qkfYh/html-5.png" },
    { name: "css", src: "https://i.ibb.co/7xXXPL4Y/css-3.png" },
    { name: "Tailwind", src: "https://i.ibb.co/PZx9rncv/tailwind1.png" },
    { name: "javascript", src: "https://i.ibb.co/gZZHgGxZ/11448a7a96ee808a3cdbaf0df9570976.webp" },
    { name: "reactJS", src: "https://i.ibb.co/SXM9DzDV/atom.png" },
    { name: "nodeJS", src: "https://i.ibb.co/23xHg7PQ/node-js-logo-png-seeklogo-273749.png" },
    { name: "expressJS", src: "https://i.ibb.co/pB92NL06/icons8-express-js-48.png" },
    { name: "mongoDB", src: "https://i.ibb.co/RGDRw1G4/icons8-mongo-db-48.png" },
    { name: "firebase", src: "https://i.ibb.co/mFVxG0Gx/firebase-icon-logo-png-seeklogo-615938.png" },
    { name: "github", src: "https://i.ibb.co/FL0V5CZd/github.png" }
  ];

  const SkillItem = ({ skill }) => (
    <div className="flex flex-col items-center group bg-white rounded-xl shadow-lg border border-gray-300 p-4 cursor-pointer transition-transform duration-300 hover:scale-105">
      <div className="relative w-24 h-24 flex items-center justify-center">
        {/* Outer animated border */}
        <div className="absolute inset-0 rounded-xl border-4 border-gradient-spin z-0"></div>

        {/* Spinning conic gradient ring */}
        <div className="absolute inset-1 rounded-lg border-spin"></div>

        {/* The skill logo */}
        <img
          className="relative z-10 h-16 w-16 rounded-lg p-2 bg-white"
          src={skill.src}
          alt={skill.name}
          draggable={false}
        />
      </div>
      <h1 className="mt-4 text-gray-800 font-semibold capitalize">{skill.name}</h1>
    </div>
  );

  return (
    <div>
      <h1 className="text-center text-3xl pt-20 p-8 font-semibold">Technologies I Work With</h1>
      <div className="max-w-5xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-8 px-4">
        {skills.map((skill, index) => (
          <SkillItem key={index} skill={skill} />
        ))}
      </div>

      <style>{`
        /* Spinning conic gradient ring with softer colors */
        .border-spin {
          border-radius: 0.5rem; /* matches rounded-lg */
          padding: 4px;
          background: conic-gradient(#fcefe8, #a8d0db, #c7d3d4, #fcefe8);
          -webkit-mask:
            radial-gradient(farthest-side, transparent calc(100% - 10px), black calc(100% - 8px));
          mask:
            radial-gradient(farthest-side, transparent calc(100% - 10px), black calc(100% - 8px));
          animation: spin 12s linear infinite;
        }

        /* Outer border with softer pastel gradient */
        .border-gradient-spin {
          background: linear-gradient(45deg, #f9cdc4, #c3d8d8, #d9e2e2, #f9cdc4);
          background-size: 400% 400%;
          animation: gradientShift 24s ease infinite;
        }

        @keyframes spin {
          0% { transform: rotate(0deg); }
          100% { transform: rotate(360deg); }
        }

        @keyframes gradientShift {
          0% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
          100% { background-position: 0% 50%; }
        }
      `}</style>
    </div>
  );
};

export default Skills;
