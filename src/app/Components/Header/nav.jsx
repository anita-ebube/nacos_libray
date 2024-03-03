import { useState } from "react";

const NavigationDesktop = (props) => {
  const { navLinksData } = props;
  const [showMenu, setShowMenu] = useState(false);
  const [showSubMenu, setShowSubMenu] = useState([]);

  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };

  const subMenuOnMouseEnterHandler = (subMenuId) => {
    setShowSubMenu((prev) => {
      let arr = [...prev];
      arr[subMenuId] = true;
      return arr;
    });
  };
  
  const subMenuOnMouseLeaveHandler = (subMenuId) => {
    setShowSubMenu((prev) => {
      let arr = [...prev];
      arr[subMenuId] = false;
      return arr;
    });
  };

  return (
    <nav className="text-black relative px-10">
      <div className="container mx-auto flex justify-between items-center py-4 text-3xl">
        <img src="/images/logo.png" alt="NotePlug" className="w-24 md:w-auto" />
        <button onClick={toggleMenu} className="md:hidden">
          <svg
            className="w-6 h-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d={showMenu ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16m-7 6h7"}
            />
          </svg>
        </button>

        <ul className={`absolute top-full left-0 md:relative md:flex gap-10 ${showMenu ? 'block' : 'hidden'} md:items-center bg-white text-center md:block md:bg-transparent md:text-black sm:text-left`}>
          {navLinksData.map((el, i) => {
            if (!el.children) {
              return (
                <li key={el.id} className="py-2 md:py-4 ">
                  <a href='#' className="hover:text-[#518310] transition duration-300 block ">
                    {el.link}
                  </a>
                </li>
              );
            }
            return (
              <li
                key={el.id}
                onMouseEnter={() => subMenuOnMouseEnterHandler(el.id)}
                onMouseLeave={() => subMenuOnMouseLeaveHandler(el.id)}
                className="relative"
              >
                <div>
                  <span className="hover:text-[#518310] cursor-pointer transition duration-300 block ">{el.link}</span>
                </div>
                {showSubMenu[el.id] && (
                  <ul className="absolute top-full left-0 p-2 rounded-md md:p-4 shadow-lg">
                    {el.children.map((ele) => {
                      return (
                        <li key={ele.id} className="py-2 md:py-4 bg-white ">
                          <a href='#' className="hover:text-[#518310] hover:border-b-2 border-[#518310] transition duration-300 block  " style={{ whiteSpace: 'nowrap' }}>
                            {ele.course}
                          </a>
                        </li>
                      );
                    })}
                  </ul>
                )}
              </li>
            );
          })}
        </ul>
      </div>
    </nav>
  );
};

export default NavigationDesktop;

