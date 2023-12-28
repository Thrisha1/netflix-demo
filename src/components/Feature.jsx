import React from "react";

const Feature = ({heading,para,videourl,no}) => {
  return (
    <>
      <div className={`text-white w-full flex ${no%2==0 ? "flex-row-reverse" : "" }  justify-center items-center p-20 bg-black`}>
        {/* left */}
        <div className="w-1/2 flex flex-col items-center justify-center gap-5">
          <h1 className="text-4xl font-bold">{heading}</h1>
          <p className="text-xl">
            {para}
          </p>
        </div>
        {/* right */}
        <div className="w-1/2">
          <div class="relative mx-auto border-gray-800 dark:border-gray-800 bg-gray-800 border-[16px] rounded-t-xl h-[172px] max-w-[301px] md:h-[294px] md:max-w-[512px]">
            <div class="rounded-xl overflow-hidden h-[140px] md:h-[262px]">
              <video autoPlay loop muted>
                <source
                  src={videourl}
                  type="video/mp4"
                />
              </video>
            </div>
          </div>
          <div class="relative mx-auto bg-gray-900 dark:bg-gray-700 rounded-b-xl h-[24px] max-w-[301px] md:h-[42px] md:max-w-[512px]"></div>
          <div class="relative mx-auto bg-gray-800 rounded-b-xl h-[55px] max-w-[83px] md:h-[95px] md:max-w-[142px]"></div>
        </div>
      </div>
      <div className="w-full bg-white h-2"></div>
    </>
  );
};

export default Feature;
