import React, { useState, useEffect } from "react";
import { Row } from "antd";
import User from "../User";

function ListOfUsers(props) {
  const { usersList } = props;
  const [sortedUsersList, setSortedUsersList] = useState([]);

  useEffect(() => {
    const sortedArray = Object.values(usersList).sort((a, b) => {
      const { answers: aAnswers, questions: aQuestions } = a;
      const { answers: bAnswers, questions: bQuestions } = b;
      const [aVal, bVal] = [
        Object.keys(aAnswers).length + aQuestions.length,
        Object.keys(bAnswers).length + bQuestions.length,
      ];
      return bVal - aVal;
    });
    setSortedUsersList(sortedArray);
  }, [usersList]);

  return (
    <div
      className="card-list-container"
      style={{ display: "flex", flexDirection: "column" }}
    >
      {sortedUsersList.map((user) => (
        <Row key={user.id}>
          <User
            userName={user.name}
            avatar={user.avatarURL}
            answeredQuestions={Object.keys(user.answers).length}
            createdQuestions={Object.keys(user.questions).length}
            total={
              Object.keys(user.answers).length +
              Object.keys(user.questions).length
            }
          />
        </Row>
      ))}
    </div>
  );
}

export default ListOfUsers;
