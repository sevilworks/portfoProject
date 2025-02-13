export const Footer = () => {
  return (
    <footer className="element-center">
      <div className="flex-col mt-[50px] mx-[auto] w-[100%] lg:w-[99%] md:w-[99%] bg-[#141123] border-[#4a2158] border-[2px] h-[400px] rounded-[30px] ">
        <div className="w-[auto] pt-10 flex justify-center space-x-9 gradient-background rounded-t-[30px] pb-4">
          <div className="w-12 h-12 transition-all duration-300 hover:bg-purple-300 hover:scale-110 rounded-full p-2">
            <a href="https://www.facebook.com/sevilamari/" target="_blank">
              <img src="../../src/assets/icons/facebook.png" />
            </a>
          </div>
          <div className="w-12 h-12 transition-all duration-300 hover:bg-purple-300 hover:scale-110 rounded-full p-2">
            <a href="https://www.instagram.com/amen_aamari/">
              <img
                src="../../src/assets/icons/instagram.png"
                target="_blank"
                alt=""
              />
            </a>
          </div>
          <div className="w-12 h-12 transition-all duration-300 hover:bg-purple-300 hover:scale-110 rounded-full p-2">
            <a
              href="https://www.linkedin.com/in/amen-amari-b9b848247/"
              target="_blank"
            >
              <img src="../../src/assets/icons/linkedin.png" alt="" />
            </a>
          </div>
          <div className="w-12 h-12 transition-all duration-300 hover:bg-purple-300 hover:scale-110 rounded-full p-2">
            <a href="https://github.com/sevilworks/" target="_blank">
              <img src="../../src/assets/icons/github.png" alt="" />
            </a>
          </div>
        </div>
        <div className="flex-row justify-center space-y-7 p-10 whitespace-nowrap">
          <div className="flex items-center space-x-5 border-b-[2px] border-b-[#635c65] max-w-[25%] lg:max-w-[15%]">
            <img
              className="w-10 h-10 bg-[#635c65] rounded-full p-2"
              src="../../src/assets/icons/email.png"
            />
            <span className="text-white ">esta3969@gmail.com</span>
          </div>

          <div className="flex items-center space-x-5 border-b-[2px] border-b-[#635c65] max-w-[25%] lg:max-w-[15%]">
            <img
              className="w-10 h-10 bg-[#635c65] rounded-full p-2"
              src="../../src/assets/icons/phone-call.png"
            />
            <span className="text-white">+216 22 663 409</span>
          </div>

          <div className="flex items-center space-x-5 border-b-[2px] border-b-[#635c65] max-w-[25%] lg:max-w-[15%]">
            <img
              className="w-10 h-10 bg-[#635c65] rounded-full p-2"
              src="../../src/assets/icons/location.png"
            />
            <span className="text-white"> 4051 khzema, Sousse</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
