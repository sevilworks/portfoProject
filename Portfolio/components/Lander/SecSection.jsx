import { Link } from "react-router-dom";
import { Card } from "../Needs/Card";
import { useEffect, useState } from "react";
import axios from "axios";
const SecSection = () => {
  //const ProjectList = [{ title: String }, { url: String }, { info: String }];
  const [projects, setProject] = useState([]);
  useEffect(() => {
    axios
      .get("http://localhost:8000/api/projects")
      .then((response) => {
        if (response.data.length > 4) {
          setProject(response.data.slice(0, 4));
        } else {
          setProject(response.data);
        }
      })
      .catch((error) => console.error(error));
  }, []);
  const gridColsClass = `grid-cols-${Math.min(projects.length, 4)}`;
  return (
    <section>
      <div className="container  p-6 w-[90%] lg:w-[80%]  mt-10">
        <div className="mx-[auto] text-white font-sans font-bold text-5xl p-10 ">
          <h1> Some of my Projects</h1>
        </div>
        <div
          className={`grid grid-0 lg:${gridColsClass} gap-6 gradient-background rounded-lg shadow-lg p-10`}
        >
          {projects.map(({ Name, Url, Info, ImageUrl }) => {
            return (
              <>
                <Card title={Name} url={Url} info={Info} img={ImageUrl} />
              </>
            );
          })}
        </div>
        <Link
          to="/projects"
          className="btn w-[260px] h-[55px] mt-[40px] mx-[100px] lg:mx-[20px] flex justify-center items-center"
        >
          See all Projects
        </Link>
      </div>
    </section>
  );
};

export default SecSection;
