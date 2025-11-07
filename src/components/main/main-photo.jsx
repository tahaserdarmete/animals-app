const MainPhoto = () => {
  return (
    <div className="relative w-full h-full max-h-screen overflow-hidden">
      <img src="/dog.jpg" alt="Dog" className="object-cover w-full h-full" />
      <span
        className="absolute top-10 left-0 text-5xl md:text-7xl font-bold
        text-[rgb(129,176,252)] drop-shadow-[4px_4px_2px_rgba(0,0,0,0.5)]"
      >
        Where's Fluffy?
      </span>
      <h1
        className="absolute font-bold top-[120px] left-10 md:left-60 text-2xl md:text-4xl"
        style={{fontFamily: "Arial, sans-serif"}}
      >
        FIND YOUR BEST BUDDY
      </h1>
    </div>
  );
};

export default MainPhoto;
