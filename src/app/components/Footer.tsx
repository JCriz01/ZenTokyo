const Footer = () => {
  return (
    <div className=" flex flex-col w-full flex-grow-0 ">
      <div className=" flex ">
        <p>
          Made by <a href="https://github.com/JCriz01">JCriz01</a>
        </p>
      </div>
      <div className="flex flex-col lg:flex-row justify-center items-center ">
        <div className="flex flex-col ">
          <h3 className=" text-xl ">About</h3>
          <ul>
            <li>
              <a href="https://github.com/JCriz01">Developer</a>
            </li>
            <li>
              <a href="">Portfolio Website</a>
            </li>
          </ul>
        </div>
        <div className="flex flex-col ">
          <h3 className=" text-xl">Trending</h3>
          <ul>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Footer;
