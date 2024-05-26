import Link from "next/link";

// Result.js
const Result = ({
  score,
  correctAnswers,
  incorrectAnswers,
  unattemptedQuestions,
  totalTime,
  averageTimePerQuestion,
  percentage,
}) => {
  return (
    <div className="text-center text-2xl font-bold">
      <h1 className="text-white text-3xl">Quiz Completed!</h1>
      <div className="flex gap-2 flex-col mt-4">
        <p className="block w-full text-slate-800 rounded-md border border-gray-200 bg-white py-2.5 font-satoshi pl-5 pr-12 shadow-lg font-bold">
          Total Score:<span className="text-gray-500"> {score}</span>{" "}
        </p>
        <p className="block w-full text-slate-800 rounded-md border border-gray-200 bg-white py-2.5 font-satoshi pl-5 pr-12 shadow-lg font-bold">
          Correct Answers:{" "}
          <span className="text-gray-500">{correctAnswers}</span>
        </p>
        <p className="block w-full text-slate-800  rounded-md border border-gray-200 bg-white py-2.5 font-satoshi pl-5 pr-12 shadow-lg font-bold">
          Incorrect Answers:{" "}
          <span className="text-gray-500">{incorrectAnswers}</span>
        </p>
        <p className="block w-full text-slate-800  rounded-md border border-gray-200 bg-white py-2.5 font-satoshi pl-5 pr-12 shadow-lg font-bold">
          Unattempted Questions:{" "}
          <span className="text-gray-500">{unattemptedQuestions}</span>
        </p>
        <p className="block w-full text-slate-800  rounded-md border border-gray-200 bg-white py-2.5 font-satoshi pl-5 pr-12 shadow-lg font-bold">
          Total Time Spent:<span className="text-gray-500"> {totalTime}</span>
        </p>
        <p className="block w-full text-slate-800  rounded-md border border-gray-200 bg-white py-2.5 font-satoshi pl-5 pr-12 shadow-lg font-bold">
          Average Time Per Question:{" "}
          <span className="text-gray-500">
            {averageTimePerQuestion.toFixed(2)} seconds
          </span>
        </p>
        <p className="block w-full text-slate-800  rounded-md border border-gray-200 bg-white py-2.5 font-satoshi pl-5 pr-12 shadow-lg font-bold">
          Marks in Percentage:{" "}
          <span className="text-gray-500">{percentage.toFixed(2)}%</span>
        </p>

        <div className="flex justify-center">
          <button className="mt-3 w-1/3 p-2.5 border-0 rounded cursor-pointer text-lg bg-blue-600 text-white">
            <Link href="/quiz/leaderboard">LeaderBoard</Link>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Result;
