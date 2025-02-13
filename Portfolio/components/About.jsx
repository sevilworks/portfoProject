import { useEffect, useState } from "react";
import axios from "axios";
import { EducationCard, SkillCard } from "./Needs/Card";
const About = () => {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const [skill, setSkill] = useState([]);
  const [education, setEducation] = useState([]);
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
    const apiUrl = import.meta.env.VITE_BASE_URI;

    Promise.all([
      axios.get(apiUrl + "/api/skills"),
      axios.get(apiUrl + "/api/educations"),
    ])
      .then(([skillsResponse, educationResponse]) => {
        setSkill(skillsResponse.data);
        setEducation(educationResponse.data);
      })
      .catch((error) => console.error("Error fetching data:", error));
  }, []);
  return (
    <>
      <section className={`pt-[150px] py-6 lg:py-20 px-6 lg:px-8 `}>
        <div className="container  p-6 w-[100%] lg:w-[80%] mt-10">
          <div className="mx-[auto] text-white font-sans font-bold text-5xl p-10 ">
            <h1> About Me</h1>
          </div>
          <div
            className={`flex gap-8 container lg:px-8 justify-center ${
              windowWidth < 800
                ? "element-center p-[30px] flex-col w-[100%]"
                : "p-[30px]"
            }`}
          >
            <div className="gradient-background rounded-lg shadow-lg  lg:w-[auto]  w-[380px] lg:max-w-[auto]">
              <div className="text-white font-sans font-bold p-4  border-b  border-[#6a2f7d]">
                Skills:
              </div>
              <div className="grid grid-cols-3 items-center gap-y-5 lg:grid-cols-3  lg:grid-cols-4 gap-x-12  px-6 py-6">
                {skill.map(({ Name, ImageUrl }) => {
                  return (
                    <>
                      <SkillCard Name={Name} ImageUrl={ImageUrl} />
                    </>
                  );
                })}
              </div>
            </div>
            <div className="gradient-background rounded-lg shadow-lg   lg:w-[auto]  w-[380px] lg:max-w-[auto]">
              <div className="text-white font-sans font-bold p-4 border-b  border-[#6a2f7d]">
                Education:
              </div>
              <div className="grid grid-rows items-center py-6 px-6">
                {education.map(({ Name, Info, ImageUrl }) => {
                  return (
                    <>
                      <EducationCard
                        key={Name}
                        Name={Name}
                        Info={Info}
                        ImageUrl={ImageUrl}
                      />
                    </>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default About;
