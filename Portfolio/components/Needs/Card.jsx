/* eslint-disable react/prop-types */
export const Card = ({ title, img, info, url }) => {
  return (
    <div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
      <a href={url}>
        <img className="rounded-t-lg" src={img} alt="" />
      </a>
      <div className="p-5">
        <a href={url}>
          <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
            {title}
          </h5>
        </a>
        <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
          {info}
        </p>
        <a
          target="_blank"
          href={url}
          className="btn items-center px-3 py-2 text-sm font-medium text-center"
        >
          View Project
        </a>
      </div>
    </div>
  );
};

export const SkillCard = ({ ImageUrl, Name }) => {
  return (
    <>
      <div className="w-16 h-16 flex items-center justify-center rounded-lg transition-transform duration-300 hover:scale-110 bg-[#81818170] hover:bg-[#e1cbef] shadow-md border-2 border-[#6a2f7d]">
        <img src={ImageUrl} alt={Name} className="w-10 h-10 object-contain" />
        
      </div>
    </>
  );
};

export const EducationCard = ({ ImageUrl, Name, Info }) => {
  return (
    <>
      <div className="flex mx-[auto] transition-transform duration-300 bg-[#81818170] shadow-md border-2 border-[#6a2f7d] rounded-lg shadow mb-4">
        <img className="rounded-xl h-[70px] p-1" src={ImageUrl} alt={Name} />
        <div className="px-5 pt-2">
          <h5 className="font-thin text-xs lg:text-2xl md:font-bold text-gray-900 dark:text-white ">
            {Name}
          </h5>
          <p className="text-xs	lg:font-normal text-gray-700 dark:text-gray-400">{Info}</p>
        </div>
      </div>
    </>
  );
};
