import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import { Redirect, useParams } from "react-router-dom";
import { Card, Row, Col, Avatar, Typography, Divider } from "antd";
import "./question.css";
import QuestionContent from "../../Components/QuestionContent";

function Question_View(props) {
  const { Title } = Typography;

  //Local State
  const [currentQuestion, setCurrentQuestion] = useState({});
  const [currentQuestionAuthor, setCurrentQuestionAuthor] = useState({});

  //Global State
  const { allUsers, allQuestions, authUser } = props;
  const { id } = useParams();
  const modId = id.replace(":", "");

  useEffect(() => {
    console.log(`$$$ Got ID ${id}`);
    if (allQuestions[modId]) {
      const cQ = allQuestions[modId];
      const cA = allUsers[cQ.author];
      setCurrentQuestion(cQ);
      setCurrentQuestionAuthor(cA);
      console.log(`$$$ Auth User: ${JSON.stringify(authUser)}`);
      console.log(
        `&&& If Statement: ${JSON.stringify(
          allUsers[authUser.authedUserId].answers[currentQuestion.id]
        )}`
      );
    }
  }, []);

  if (allQuestions[id.replace(":", "")]) {
    return (
      <>
        {Object.keys(currentQuestion).length ? (
          <Row align="middle" justify="center">
            <Col span={18} className="card-container">
              <Card
                title={currentQuestionAuthor.name + " asks:"}
                bordered={true}
                headStyle={{ backgroundColor: "#F0F2F5" }}
              >
                <div className="card-content-cintainer">
                  <Row>
                    <Col span={3} className="avatar-container">
                      <Row>
                        <Avatar
                          size={{
                            xs: 24,
                            sm: 32,
                            md: 40,
                            lg: 64,
                            xl: 80,
                            xxl: 100,
                          }}
                          src={currentQuestionAuthor.avatarURL}
                          style={{ backgroundColor: "#003653" }}
                        />
                      </Row>
                    </Col>
                    <Divider type="vertical" />
                    <Col span={18}>
                      <Row>
                        <Col>
                          <Title level={4}>Would You Rather</Title>
                        </Col>
                      </Row>
                      <QuestionContent
                        optionOne={currentQuestion.optionOne.text}
                        optionTwo={currentQuestion.optionTwo.text}
                        questionId={modId}
                      />
                    </Col>
                  </Row>
                </div>
              </Card>
            </Col>
          </Row>
        ) : (
          <div />
        )}
      </>
    );
  }

  return (
    <div>
      <h3>
        <Redirect to="/404" />
      </h3>
    </div>
  );
}

function mapStateToProps({ questionReducer, userReducer, authedUserReducer }) {
  return {
    allUsers: userReducer,
    allQuestions: questionReducer,
    authUser: authedUserReducer,
  };
}

export default connect(mapStateToProps)(Question_View);
