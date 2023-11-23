import React, { useEffect, useState } from "react";
import ProgressBar from "@ramonak/react-progress-bar";
import { questions } from "./questions";
import { FaArrowLeftLong, FaArrowRightLong } from "react-icons/fa6";

function App() {
  const [current, setCurrent] = useState(0);
  const [currentQuestion, setCurrentQuestion] = useState(questions[current]);
  const [currentAnswer, setCurrentAnswer] = useState(null);
  const [answers, setAnswers] = useState([]);

  useEffect(() => {
    setCurrentQuestion(questions[current]);
  }, [current]);

  const handleSetAnswer = (answer, question) => {
    const foundAnswer = answers.find((ans) => ans.key === question.number);
    if (Boolean(foundAnswer)) {
      setAnswers((prev) =>
        prev.map((ans) => {
          if (ans.key === question.number) {
            return { ...ans, value: answer.value };
          }
          return ans;
        })
      );
    } else {
      setAnswers((prev) => [
        ...prev,
        { key: question.number ?? answer.key, value: answer.value },
      ]);
    }
  };

  const handleNext = () => {
    if (!currentAnswer) return alert("Select an answer");

    handleSetAnswer(currentAnswer, currentQuestion);

    setCurrentAnswer("");
    setCurrent((prev) => prev + 1);
  };

  const handlePrev = () => {
    setCurrent((prev) => prev - 1);
  };

  const handleSubmit = () => {
    if (answers.length < 15) return alert("FIll in all the answers");
  };

  const handleLastQuestion = (option) => {
    const lastQn = questions.pop();
    lastQn.options.map((opn) => {
      const isCLicked = option.text === opn.text;
      if (isCLicked) {
        handleSetAnswer(
          {
            key: option.text,
            value: 1,
          },
          currentQuestion
        );
      } else {
        handleSetAnswer(
          {
            key: opn.text,
            value: 0,
          },
          currentQuestion
        );
      }
    });
  };

  return (
    <div className="page">
      <div className="container">
        <ProgressBar
          completed={Math.floor((current / questions.length) * 100)}
          bgColor="#3498db"
        />
        <p>
          Question {current + 1} of {questions.length}
        </p>
        <p className="question">{currentQuestion?.question}</p>
        <ul className="options">
          {currentQuestion.options?.map((option, index) => {
            const isActive = currentAnswer?.key === option.key;
            return (
              <button
                key={index.toString()}
                style={{ backgroundColor: isActive ? "green" : "#3498db" }}
                onClick={() => {
                  if (current === 14) {
                    setCurrentAnswer(option);
                    handleLastQuestion(option);
                  } else {
                    setCurrentAnswer(option);
                  }
                }}
              >
                {option.key}
              </button>
            );
          })}
        </ul>
        {currentQuestion?.inputType ? (
          <input
            className="input"
            placeholder="Age"
            type={currentQuestion.inputType}
            max={24}
            min={18}
            onChange={(e) =>
              setCurrentAnswer({ key: "Age", value: e.target.value.trim() })
            }
          />
        ) : null}
        <div className="buttons">
          {current === 0 ? null : (
            <button
              disabled={current === 0}
              className="small"
              onClick={handlePrev}
            >
              <FaArrowLeftLong />
            </button>
          )}
          {current < questions.length - 1 ? (
            <button className="small" onClick={handleNext}>
              <FaArrowRightLong />
            </button>
          ) : null}
          {current === 14 ? (
            <button className="submit" onClick={handleSubmit}>
              Submit
            </button>
          ) : null}
        </div>
      </div>
    </div>
  );
}

export default App;
