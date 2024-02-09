const Footer = () => {
  return (
    <footer className=" text-white bg-neutral-950 p-4 lg:px-14 flex flex-col w-full flex-grow-0 ">
      <div className=" flex justify-center ">
        <p>
          Made by <a href="https://github.com/JCriz01">JCriz01</a>
        </p>
      </div>
      <div className="  flex flex-col justify-center items-center ">
        <div className="w-full max-w-[1800px] flex flex-col md:w-11/12 py-3 ">
          <h3 className=" text-rose-400 text-xl ">About</h3>
          <ul className=" flex flex-wrap flex-col md:flex-row ">
            <li className={"basis-[40%]"}>
              <a href="https://github.com/JCriz01">Developer</a>
            </li>
            <li className={""}>
              <a href="">Portfolio Website</a>
            </li>
          </ul>
        </div>
        <div className=" w-full max-w-[1800px]  md:w-11/12 py-3 ">
          <h3 className=" text-rose-400 text-xl">Trending</h3>
          <ul className=" flex flex-wrap flex-col md:flex-row">
            <li className=" basis-[40%] ">Jujutsu Kaisen</li>
            <li className={"basis-[40%]"}>Chainsaw Man</li>
            <li className={"basis-[40%]"}>Sky x Family</li>
            <li className={"basis-[40%]"}>Hells Paradise</li>
            <li className={"basis-[40%]"}>Re Zero</li>
            <li className={"basis-[40%]"}>Attack On Titan</li>
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
