const About = () => {
  return (
    <div className="flex justify-center items-center min-h-screen p-10 bg-gray-100">
      {/* Rectangular box with patterned border */}
      <div
        className="bg-white rounded-lg p-10 max-w-6xl w-full"
        style={{
          borderWidth: '20px',
          borderStyle: 'solid',
          borderImageSlice: 300,
          borderImageSource: "url('https://i.ibb.co.com/JwvJnwcQ/47611.jpg')",
          borderImageRepeat: 'round',
        }}
      >
        <div className="flex flex-col items-center">
          <img
            className="h-52 w-52 rounded-full border-4 border-blue-950 mb-8"
            src="https://i.ibb.co/hxm5QPFD/1.png"
            alt="Mohima"
          />

          <div className="text-center px-4">
            <h2 className="text-gray-800 text-lg leading-relaxed">
              Hey! I'm Mohima, currently compiling my brain with a BSc from National University in Dhaka. I spend my days writing code, fixing bugs, and sometimes convincing my computer to cooperate. When I’m not glued to my screen, I’m either exploring new places or buried in a good book —because, you know, the journey within ourselves is just as important as the journey into the world around us.
            </h2>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
