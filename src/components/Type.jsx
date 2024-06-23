import Typewriter from "typewriter-effect";
const Type = () => {
  return (
    <div className="text-bold text-red-800 text-2xl mb-10">
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
