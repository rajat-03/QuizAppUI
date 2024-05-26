// LeaderboardPage.js
"use client";
import leaderboardData from "@/constant/leaderboard";
import { useScore } from "@/context/ScoreContext";

import { useState } from "react";

const LeaderboardPage = () => {
  const [visibleData, setVisibleData] = useState(10);
  const { score } = useScore();

  const handleLoadMoreClick = () => {
    setVisibleData((prevVisibleData) => prevVisibleData + 10);
  };

  return (
    <div className="min-h-screen max-w-screen-md  mx-auto mt-24 p-7 pt-4 rounded-lg">
      <h1 className="text-3xl font-bold text-slate-200 mb-4">Leaderboard</h1>

      <div className="flex flex-col justify-center  items-center mt-[6rem] sm:mt-[6rem] mb-[1rem]">
        <div className="w-full py-[5px]">
          <div className="flex w-full justify-center items-end text-white">
            <div className=" bg-[#2E4950] w-[28%] h-fit py-[.7rem] sm:py-[.5rem] rounded-tl-xl rounded-bl-xl">
              <div className="relative  flex justify-center items-center flex-col animate__animated animate__backInLeft animate__delay-1s">
                <img
                  src="/second.png"
                  alt="second"
                  class="max-w-[80%] min-w-[80%] sm:max-w-[55%] sm:min-w-[55%] z-50 absolute top-[3px] sm:top-[6px] xl:top-[15px] xxl:top-[0px] left-[51%] transform -translate-x-1/2"
                />
                <img
                  src="/pos2.png"
                  alt="second"
                  class="h-[69px] w-[69px] sm:w-[100px] sm:h-[100px] rounded-[50%] absolute top-[-40px] sm:top-[-56px] border-[3px] border-blue400 "
                />
                <div className="mt-[3rem] sm:mt-[5rem] flex flex-col items-center gap-2">
                  <h1 className="text-sm font-satoshi sm:text-lg text-center  font-black">
                    Emma
                  </h1>
                  <h1 className=" font-black font-satoshi text-xl text-blue400 ">
                    40
                  </h1>
                </div>
              </div>
            </div>
            <div className=" bg-[#2E4950]  w-[28%] h-fit py-[3rem] pt-[2rem] rounded-t-xl">
              <div className="relative flex justify-end items-center flex-col animate__animated animate__backInDown animate__delay-2s">
                <img
                  src="/one.png"
                  alt="first"
                  class="w-[80%] sm:w-[65%] z-50 absolute  top-[-11px] xxxl:top-[-9px] xxl:top-[-29px] left-[51%] transform -translate-x-1/2"
                />
                <img
                  src="/crown.png"
                  alt="crown"
                  class="w-[60%] sm:w-[35%] z-50 absolute top-[-121px] md:top-[-109px] lg:top-[-122px] xxxl:top-[-125px] xxl:top-[-132px] left-[50%] transform -translate-x-1/2"
                />
                <img
                  src="/pos1.png"
                  alt="first"
                  className="h-[69px] w-[69px]  sm:w-[100px] sm:h-[100px] absolute rounded-[50%] top-[-84px] sm:top-[-77px] border-[3px] border-yellow300"
                />
                <div className="mt-[1rem] sm:mt-[4rem] flex flex-col items-center gap-2">
                  <h1 className=" text-sm font-satoshi sm:text-lg  text-center  font-black">
                    John
                  </h1>
                  <h1 className=" font-black font-satoshi text-xl text-yellow400 ">
                    40
                  </h1>
                </div>
              </div>
            </div>
            <div className="bg-[#2E4950] w-[28%] h-fit rounded-tr-xl rounded-br-xl">
              <div className="relative  flex justify-center items-center flex-col animate__animated animate__backInRight ">
                <img
                  src="/three.png"
                  alt="three"
                  className="w-[80%] sm:w-[55%] z-10 absolute top-[3px] sm:top-[12%] left-[51%] xl:top-[10px] xxl:top-[10px] transform -translate-x-1/2"
                />
                <img
                  src="/user.png"
                  alt="third"
                  className="h-[69px] w-[69px] sm:w-[100px] sm:h-[100px] absolute top-[-40px] sm:top-[-44px] border-2 border-green400 rounded-[50%] "
                />
                <div className="mt-[3rem] sm:mt-[5rem] flex flex-col items-center gap-2">
                  <h1 className=" text-sm font-satoshi text-center sm:text-lg font-black">
                    Michael
                  </h1>
                  <h1 className=" text-green400 font-satoshi text-xl  font-black">
                    40
                  </h1>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-gray-200 p-4 rounded-lg shadow-md">
        <table className=" w-full">
          <tbody className="flex flex-col gap-2">
            {/* Custom entry */}
            <tr className="text-slate-800 flex justify-around rounded-md border border-gray-200 bg-blue-500 py-2.5 font-satoshi shadow-lg font-bold cursor-pointer hover:scale-105 hover:bg-blue-600">
              <td className="px-4 py-2 ">118</td>
              <td className="px-4 py-2">You</td>
              <td className="px-4 py-2">{score}</td>
            </tr>
            {/* Rest of the leaderboard data */}
            {leaderboardData.slice(0, visibleData - 1).map((student, index) => (
              <tr
                key={index}
                className="text-slate-800 bg-slate-300 flex justify-around rounded-md border border-gray-200 py-2.5 font-satoshi shadow-lg font-bold cursor-pointer hover:scale-105 hover:bg-slate-400 "
              >
                <td className="px-4 py-2">{index + 1}</td>
                <td className="px-4 py-2">{student.name}</td>
                <td className="px-4 py-2">{student.score}</td>
              </tr>
            ))}
          </tbody>
        </table>
        {visibleData < leaderboardData.length && (
          <div className="flex justify-center">
            <button
              className="mt-4 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
              onClick={handleLoadMoreClick}
            >
              Load More
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default LeaderboardPage;
