import React from "react";
import QABlock from "./QABlock";
import { dataQuestionsAnswers } from "../dataBase";
function QuestionsAnswers() {
  return (
    <div className="wrapper-questions-answers">
      <p className='main-text'>Запитання – відповіді</p>
      <QABlock data={dataQuestionsAnswers} />
    </div>
  );
}

export default QuestionsAnswers;
