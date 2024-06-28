import Typewriter from "typewriter-effect";
const Type = () => {
  return (
    <div className="font-bold text-red text-xl mb-5">
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
