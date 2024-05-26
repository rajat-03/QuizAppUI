"use client";
import { useState, useEffect } from "react";
import questions from "@/constant/questions";
import Result from "./Result"; // Adjust the import path based on your directory structure
import { useScore } from "@/context/ScoreContext";

const Quiz = () => {
  const { score, setScore } = useScore();
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [showScore, setShowScore] = useState(false);
  const [selectedOption, setSelectedOption] = useState(null);
  const [isCorrect, setIsCorrect] = useState(null);
  const [timeLeft, setTimeLeft] = useState(30);
  const [totalTimeTaken, setTotalTimeTaken] = useState(0);
  const [questionStartTime, setQuestionStartTime] = useState(Date.now());
  const [timerRunning, setTimerRunning] = useState(true);

  const [correctAnswers, setCorrectAnswers] = useState(0);
  const [incorrectAnswers, setIncorrectAnswers] = useState(0);
  const [unattemptedQuestions, setUnattemptedQuestions] = useState(0);

  useEffect(() => {
    if (timeLeft > 0 && timerRunning && !showScore) {
      const timer = setInterval(() => {
        setTimeLeft((prev) => prev - 1);
        setTotalTimeTaken((prev) => prev + 1);
      }, 1000);
      return () => clearInterval(timer);
    } else if (timeLeft === 0) {
      handleNextButtonClick();
    }
  }, [timeLeft, timerRunning, showScore]);

  const handleAnswerOptionClick = (option) => {
    setSelectedOption(option);
    setTimerRunning(false);
    const questionTimeTaken = (Date.now() - questionStartTime) / 1000;
    setTotalTimeTaken((prevTotal) => prevTotal + questionTimeTaken);
    setQuestionStartTime(Date.now());

    if (option === questions[currentQuestion].answer) {
      setIsCorrect(true);
      setScore(score + 4);
      setCorrectAnswers(correctAnswers + 1);
    } else {
      setIsCorrect(false);
      setIncorrectAnswers(incorrectAnswers + 1);
    }
  };

  const handleNextButtonClick = () => {
    const nextQuestion = currentQuestion + 1;
    const questionTimeTaken = (Date.now() - questionStartTime) / 1000;
    setTotalTimeTaken((prevTotal) => prevTotal + questionTimeTaken);
    setQuestionStartTime(Date.now());

    if (nextQuestion < questions.length) {
      setCurrentQuestion(nextQuestion);
      setSelectedOption(null); // Reset the selected option for the next question
      setIsCorrect(null); // Reset the correctness state for the next question
      setTimeLeft(30); // Reset the timer for the next question
      setTimerRunning(true); // Restart the timer for the next question
    } else {
      setShowScore(true);
      const unattempted = questions.length - correctAnswers - incorrectAnswers;
      setUnattemptedQuestions(unattempted);
    }
  };

  const totalQuestions = questions.length;
  const totalTime = `${Math.floor(totalTimeTaken / 60)} minutes ${Math.floor(
    totalTimeTaken % 60
  )} seconds`;
  const averageTimePerQuestion = totalTimeTaken / totalQuestions;
  const percentage = (score / (40)) * 100;

  return (
    <div className="pt-20 min-h-screen text-gray-200">
      <div className="max-w-screen-sm bg-gray-500 mx-auto mt-6 p-7 rounded-lg">
        {showScore ? (
          <Result
            score={score}
            correctAnswers={correctAnswers}
            incorrectAnswers={incorrectAnswers}
            unattemptedQuestions={unattemptedQuestions}
            totalTime={totalTime}
            averageTimePerQuestion={averageTimePerQuestion}
            percentage={percentage}
          />
        ) : (
          <>
            <div className="flex justify-between mb-5">
              <div className="mb-2 text-lg font-medium">
                <span>Question {currentQuestion + 1}</span>/{totalQuestions}
              </div>
              <div className="mb-2 text-lg font-medium">
                Time left: {timeLeft} seconds
              </div>
            </div>
            <div className="mb-5 text-2xl font-semibold">
              {questions[currentQuestion].question}
            </div>

            <div className="max-w-[360px] mx-auto p-4">
              <div className="flex flex-col gap-5">
                {questions[currentQuestion].options.map((option, index) => (
                  <button
                    key={index}
                    onClick={() => handleAnswerOptionClick(option)}
                    className={`block w-full p-2.5 border-0 rounded cursor-pointer text-lg ${
                      selectedOption === option
                        ? isCorrect
                          ? "bg-green-500 text-white"
                          : "bg-red-500 text-white"
                        : selectedOption &&
                          option === questions[currentQuestion].answer
                        ? "bg-green-500 text-white"
                        : "bg-blue-600 text-white hover:bg-blue-700"
                    }`}
                    disabled={selectedOption !== null} // Disable buttons after selection
                  >
                    {option}
                  </button>
                ))}
              </div>

              {selectedOption && (
                
                <div className="flex justify-end">
                <button
                  onClick={handleNextButtonClick}
                  className={`mt-4 p-2.5 text-lg font-semibold rounded ${
                    selectedOption
                      ? "bg-green-600 text-white hover:bg-green-700"
                      : "bg-gray-400 text-gray-700 cursor-not-allowed"
                  }`}
                >
                  {currentQuestion < totalQuestions - 1
                    ? "Next Question ➤"
                    : "Submit Quiz"}
                </button>
                </div>
              )}
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default Quiz;
