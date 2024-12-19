import React from 'react';
import style from './RecommendedQuestions.module.css';
import { useThreads } from '../../../hooks';
import { ReactComponent as AnswerIcon } from '../../../assets/answer.svg';
import { getIsSidebarOpen } from '../../../utils';

const RecommendedQuestions = () => {
  const { sendMessage } = useThreads();
  const isSidebarOpen = getIsSidebarOpen();
  const QUESTIONS = [
    `파수 첫 출근! 어떻게 하면 좋을까?`,
    '파수 홈페이지 링크 알려줘',
    '파수랑 스패로우가 분리되어 있어?',
    '생산성 극대화를 위한 모닝 루틴',
  ];

  return (
    <div
      className={`${style.recQuestionContainer} ${isSidebarOpen ? style.sidebarVisible : style.sidebarHidden}`}
    >
      <div className={style.recQuestionLogo}>
        <AnswerIcon />
      </div>
      <ul className={style.recQuestionList}>
        {QUESTIONS.map((question, i) => (
          <li
            key={i}
            className={style.recQuestionitem}
            onClick={() => {
              sendMessage(question);
            }}
          >
            <p>{question}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export { RecommendedQuestions };
