/* eslint-disable no-unused-vars */
import { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";

export const Header = () => {
  const clickRef = useRef();
  const href = useRef();
  const logoRef = useRef();
  const listRef = useRef();
  const [list, setList] = useState(["Home", "Projects", "About", "Contact"]);

  const [clicked, setClicked] = useState({});

  const handleClick = (e) => {
    setClicked(false);
    setClicked((prevClick) => ({ ...prevClick, [e.target.id]: true }));
  };

  useEffect(() => {
    window.addEventListener(
      "scroll",
      () => {
        if (window.scrollY > 100) {
          href.current.style.padding = "20px 40px";
          href.current.style.backdropFilter = "blur(10px)";
          href.current.style.boxShadow = "0px 4px 10px rgba(0, 20, 20, 41)";
          logoRef.current.style.padding = "0 30px";
          if (window.innerWidth <= 500) {
            listRef.current.style.padding = "0px 0px 20px 0px";
            href.current.style.height = "100px";
            logoRef.current.style.padding = "0px 330px 0px 0px";
            logoRef.current.style.fontSize = "15px";
          } else {
            logoRef.current.style.fontSize = "30px";
            logoRef.current.style.padding = "0px 100px";
          }
        } else {
          href.current.style.background = "transparent";
          href.current.style.backdropFilter = "none";
          href.current.style.boxShadow = "none";
          href.current.style.padding = "50px 40px";

          logoRef.current.style.padding = "0px 100px";
          logoRef.current.style.fontSize = "30px";
        }
      },
      []
    );
  });

  return (
    <>
      <header
        ref={href}
        className=" pt-[50px] pl-[40px] pr-[40px] fixed w-full z-50 transition-all duration-200"
      >
        <div className="container element-center mx-auto flex justify-between items-center gap-[20px] sm:gap-0 flex-col sm:flex-row">
          <div>
            <Link to="/" onClick={() => setClicked(false)}>
              <h1
                ref={logoRef}
                className="font-bold pl-[100px] text-white font-sans text-3xl  transition-all duration-300 hover:text-[#6a2f7d]"
              >
                Amen.
              </h1>
            </Link>
          </div>
          <ul className="flex items-center gap-[30px]">
            {list.map((link) => {
              return (
                <li key={link}>
                  <Link
                    to={link == "Home" ? "/" : link.toLowerCase()}
                    className="text-white font-sans"
                  >
                    <div
                      onClick={handleClick}
                      ref={clickRef}
                      id={link}
                      className={`flex font-mono justify-center items-center rounded-lg shadow-inner-darkblue shadow-blue-500/50 hover:shadow-lg  opacity-60 hover:opacity-100 bg-[#141429] w-[100px] h-[40px] hover:text-[#6a2f7d] ${
                        clicked[link]
                          ? "opacity-100 border-2 border-[#6a2f7d] transition-all duration-150 animate-pulse initial-{100} duration-500 delay-200 iterations-1"
                          : "opacity-60"
                      }`}
                    >
                      {link}
                    </div>
                  </Link>
                </li>
              );
            })}
          </ul>
        </div>
      </header>
    </>
  );
};
