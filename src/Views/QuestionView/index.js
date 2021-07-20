import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import { Redirect, useParams } from "react-router-dom";
import {
  Card,
  Button,
  Row,
  Col,
  Avatar,
  Typography,
  Divider,
  Space,
  Radio,
  Form,
  Alert,
} from "antd";
import "./question.css";
import logo from "../../logo.svg";

function Question_View(props) {
  const { Text, Title } = Typography;

  const [currentQuestion, setCurrentQuestion] = useState({});
  const [currentQuestionAuthor, setCurrentQuestionAuthor] = useState({});
  const { id } = useParams();
  const { allUsers, allQuestions, authUser } = props;

  useEffect(() => {
    console.log(`$$$ Got ID ${id}`);
    const modId = id.replace(":", "");
    console.log(`$$$ Got ID ${modId}`);
    if (allQuestions[modId]) {
      const cQ = allQuestions[modId];
      console.log(`$$$ Got cQ = ${JSON.stringify(cQ)}`);
      const aId = cQ.author;
      console.log(`$$$ got aId = ${aId}`);
      const cA = allUsers[aId];
      console.log(`$$$ Got cAu = ${JSON.stringify(cA)}`);
      setCurrentQuestion(cQ);
      setCurrentQuestionAuthor(cA);
    }
  }, []);

  const onFinish = (values) => {
    if (values.answer) {
      console.log("Success:", values.answer);
    } else {
      console.log("Fail");
      alert("Please Select Answer");
    }
  };

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
                      <Form onFinish={onFinish}>
                        <Form.Item name="answer">
                          <Radio.Group>
                            <Row justify="center">
                              <Col span={16}>
                                <Radio value={1}>
                                  {currentQuestion.optionOne.text}
                                </Radio>
                              </Col>
                              <Col span={13}>
                                <Title level={5}>Or</Title>
                              </Col>
                              <Col span={16}>
                                <Radio value={2}>
                                  {currentQuestion.optionTwo.text}
                                </Radio>
                              </Col>
                            </Row>
                          </Radio.Group>
                        </Form.Item>
                        <Divider />
                        <Row justify="center">
                          <Col span={16}>
                            <Form.Item>
                              <Button
                                type="primary"
                                shape="round"
                                style={{ width: "100%" }}
                                htmlType="submit"
                              >
                                View Full
                              </Button>
                            </Form.Item>
                          </Col>
                        </Row>
                        <Divider />
                      </Form>
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

function mapStateToProps({ questionReducer, userReducer, authUserReducer }) {
  return {
    allUsers: userReducer,
    allQuestions: questionReducer,
    authUser: authUserReducer,
  };
}

export default connect(mapStateToProps)(Question_View);
