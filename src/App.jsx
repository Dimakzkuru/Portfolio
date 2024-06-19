import Navbar from "./components/Navbar";
const App = () => {
  return (
    <div className="overflow-x-hidden dark:text-white">
      <div className="fixed top-0 -z-10 h-full w-full">
        <div className="relative h-screen w-screen dark:bg-slate-950 bg-white  transition duration-5000 ease-in-out">
          <div className="absolute bottom-0 left-0 right-0 top-0 bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f2e_1px,transparent_1px)] bg-[size:14px_24px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]"></div>
        </div>
      </div>
      <div className="container mx-auto px-8">
        <Navbar />
      </div>
    </div>
  );
};

export default App;
