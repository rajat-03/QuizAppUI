
import Link from "next/link";
import React from "react";

const HomePage = () => {
  
    return (
        <div className="max-w-screen-lg  mx-auto mt-24 p-7 pt-4 rounded-lg">
          <div class="flex flex-col md:flex-row justify-center items-center w-full mt-[-1rem] sm:mt-0 py-4  px-[12px] sm:px-4 lg:pt-[4rem]">
            <img
              src="/heroImage.png"
              alt="kid"
              class="h-[20vh] select-none sm:h-[30vh] lg:h-[40vh] mb-6 sm:mb-0"
              priority="true"
            />
            <div class="text-center sm:text-center  px-3 pb-5 sm:pt-5">
              <h1 class="text-4xl sm:text-5xl hidden text-banner-style  font-[700] sm:block lg:text-6xl text-white ">
                Take A Quiz
              </h1>
              <p class="text-slate-300 text-justify mt-3  font-[700] sm:mt-6 text-base sm:text-lg lg:w-96">
                Welcome to Quizify, your ultimate destination for fun and knowledge!
                Dive into our exhilarating quizzes that cover a wide array of
                topics. Test your wits, challenge your friends, and embark on an
                adventure of learning. Our trivia is designed to both entertain and
                educate, making every question an opportunity for discovery. Quizify
                - Where every answer opens a new door to endless possibilities!
              </p>
       
                <div class="flex justify-center  mt-6">
                <Link href="/start">
                  <button className="bg-blue-500 hover:bg-blue-700  text-white font-bold py-4 px-6 rounded">
                    Start Quiz
                  </button>
                  </Link>
                </div>
              
            </div>
          </div>
        </div>
      );
    };

export default HomePage;
