import { Link } from "react-router-dom";
import navIcon from "../../assets/Icon/aribatmintion.png";
import { RiMenu3Fill } from "react-icons/ri";
import { useState } from "react";
import { RxCross2 } from "react-icons/rx";

const Navber = () => {
  const [navopen, setNavopen] = useState<boolean>(false);
  type TNavmenu = {
    pathName: string;
    name: string;
  }[];
  const navMenu: TNavmenu = [
    { pathName: "/", name: "Home" },
    { pathName: "/allproduucts", name: "All Products" },
    { pathName: "/manageproduct", name: "Manage Product" },
    { pathName: "/cart", name: "Cart" },
    { pathName: "/about", name: "About Us" },
  ];

  return (
    <div className="max-w-screen-2xl px-0 md:px-5 lg:px-12 fixed z-30 w-full mx-auto">
      <div className="flex items-center justify-between p-3">
        <div>
          <img className="w-20" src={navIcon} alt="navIcon" />
        </div>
        {!navopen && (
          <button className="md:hidden" onClick={() => setNavopen(true)}>
            <RiMenu3Fill className="text-2xl font-semibold" />
          </button>
        )}
        <div className="md:flex hidden items-center gap-10">
          {navMenu.map((item) => (
            <Link
              className="font-semibold flex items-baseline gap-3 text-xl hover:text-red-500 hover:underline"
              to={`${item.pathName}`}
            >
              {item.name}
              <div className="w-2 h-2 rounded-full bg-red-500"></div>
            </Link>
          ))}
        </div>
        {navopen && (
          <div className="fixed transition duration-1000 right-0 top-0 h-screen">
            <div className="flex space-y-4  relative flex-col h-full bg-slate-500 p-5">
              <button
                className="absolute top-2 left-2"
                onClick={() => setNavopen(false)}
              >
                <RxCross2 />
              </button>
              {navMenu.map((item) => (
                <Link className="" to={`${item.pathName}`}>
                  {item.name}
                </Link>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Navber;
