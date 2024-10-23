import Typewriter from "typewriter-effect";
const Type = () => {
  return (
    <div className="font-bold text-green-600 mb-5 text-center lg:text-left lg:text-xl text-md z-10">
      <Typewriter
        options={{
          strings: ["Frontend Web Developer"],
          autoStart: true,
          loop: true,
          deleteSpeed: 50,
        }}
      />
    </div>
  );
};

export default Type;
