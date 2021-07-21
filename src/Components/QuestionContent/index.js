import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import { SafetyOutlined } from "@ant-design/icons";
import { handleQuestionAnswered } from "../../Store/Actions/SharedActions";
import {
  Button,
  Row,
  Col,
  Divider,
  Radio,
  Form,
  Typography,
  Progress,
} from "antd";

const { Text, Title } = Typography;

function QuestionContent(props) {
  const { optionTwo, optionOne, questionId } = props;
  //Local State
  const [isAnswered, setIsAnswered] = useState(false);
  //Global State
  const { allUsers, authedUser, currentQuestion, dispatch } = props;

  useEffect(() => {
    if (allUsers[authedUser].answers[currentQuestion.id]) setIsAnswered(true);
  }, []);

  const onFinish = (values) => {
    if (values.answer) {
      console.log("Success:", values.answer);
      dispatch(
        handleQuestionAnswered(
          authedUser,
          currentQuestion.id,
          values.answer === 1 ? "optionOne" : "optionTwo"
        )
      );
      setIsAnswered(true);
    } else {
      console.log("Fail");
      alert("Please Select Answer");
    }
  };

  const getPercentage = () => {
    const total =
      currentQuestion.optionOne.votes.length +
      currentQuestion.optionTwo.votes.length;
    const optionOneVotes = currentQuestion.optionOne.votes.length;
    const optionTwoVotes = currentQuestion.optionTwo.votes.length;
    if (optionOneVotes === 0) return 0;
    if (optionTwoVotes === 0) return 100;
    return (optionOneVotes / total) * 100;
  };

  return !isAnswered ? (
    <Form onFinish={onFinish}>
      <Form.Item name="answer">
        <Radio.Group>
          <Row justify="center">
            <Col span={16}>
              <Radio value={1}>{optionOne}</Radio>
            </Col>
            <Col span={13}>
              <Title level={5}>Or</Title>
            </Col>
            <Col span={16}>
              <Radio value={2}>{optionTwo}</Radio>
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
              Submit Answer
            </Button>
          </Form.Item>
        </Col>
      </Row>
      <Divider />
    </Form>
  ) : (
    <Row justify="center">
      <Col span={16}>
        <Text>{optionOne}</Text>
        {allUsers[authedUser].answers[questionId] === "optionOne" ? (
          <SafetyOutlined
            style={{ fontSize: "20px", color: "#a9a919", paddingLeft: "10px" }}
          />
        ) : (
          <></>
        )}
        <Row>
          <Col span={22}>
            <Progress status="active" percent={getPercentage()} size="small" />
          </Col>
        </Row>
      </Col>
      <Col span={13}>
        <Title level={5}>Or</Title>
      </Col>
      <Col span={16}>
        <Text>{optionTwo}</Text>
        {allUsers[authedUser].answers[questionId] === "optionTwo" ? (
          <SafetyOutlined
            style={{ fontSize: "20px", color: "#a9a919", paddingLeft: "10px" }}
          />
        ) : (
          <></>
        )}
        <Row>
          <Col span={22}>
            <Progress
              status="active"
              percent={100 - getPercentage()}
              size="small"
            />
          </Col>
        </Row>
      </Col>
    </Row>
  );
}

function mapStateToProps(
  { userReducer, questionReducer, authedUserReducer },
  { questionId }
) {
  console.log(
    `*** Authed User from MSTP: ${JSON.stringify(authedUserReducer)}`
  );
  return {
    allUsers: userReducer,
    allQuestions: questionReducer,
    authedUser: authedUserReducer.authedUserId,
    currentQuestion: questionReducer[questionId],
  };
}

export default connect(mapStateToProps)(QuestionContent);
