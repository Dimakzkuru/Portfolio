import Typewriter from "typewriter-effect";
const Type = () => {
  return (
    <Typewriter
      options={{
        strings: ["Frontend Web Developer"],
        autoStart: true,
        loop: true,
        deleteSpeed: 50,
      }}
    />
  );
};

export default Type;
