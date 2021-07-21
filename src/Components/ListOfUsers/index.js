import React from "react";
import { Row } from "antd";
import User from "../User";

function ListOfUsers(props) {
  const { usersList } = props;
  console.log(`LU_LU_LU: List of Users: ${JSON.stringify(usersList)}`);
  return (
    <div
      className="card-list-container"
      style={{ display: "flex", flexDirection: "column" }}
    >
      {Object.values(usersList).map((user) => (
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
