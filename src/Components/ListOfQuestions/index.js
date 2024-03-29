import React from "react";
import { Row } from "antd";
import Question from "../Question";

function ListOfQuestions(props) {
  const { questionList } = props;
  console.log(`questionList: ${JSON.stringify(questionList)}`);
  return (
    <div>
      {questionList.map((question) => (
        <Row key={question.id}>
          <Question
            authorId={question.author}
            option1={question.optionOne.text}
            option2={question.optionTwo.text}
            questionId={question.id}
          />
        </Row>
      ))}
    </div>
  );
}

export default ListOfQuestions;
