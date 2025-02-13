import { useEffect, useState } from "react";
import axios from "axios";
import { Card } from "./Needs/Card";
const Projects = () => {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const [projects, setProject] = useState([]);
  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);
  useEffect(() => {
    axios
      .get("http://localhost:8000/api/projects")
      .then((response) => {
        if (response.data.length > 4) {
          setProject(response.data);
        } else {
          setProject(response.data);
        }
      })
      .catch((error) => console.error(error));
  }, []);
  return (
    <>
      <section
        className={`flex  container pt-[150px] h-full min-h-screen py-20 px-6 lg:px-8 ${
          windowWidth < 900
            ? "element-center p-[30px] flex-col"
            : "p-[30px] pr-[700px]"
        }`}
      >
        <div className="container  p-6 w-[90%] lg:w-[80%]  mt-10">
          <div className="mx-[auto] text-white font-sans font-bold text-5xl p-10 ">
            <h1> My Projects</h1>
          </div>
          <div
            className={`grid grid-0 lg:grid-cols-4 gap-8 gradient-background rounded-lg shadow-lg p-10`}
          >
            {projects.map(({ Name, Url, Info, ImageUrl }) => {
              return (
                <>
                  <Card title={Name} url={Url} info={Info} img={ImageUrl} />
                </>
              );
            })}
          </div>
        </div>
      </section>
    </>
  );
};

export default Projects;
