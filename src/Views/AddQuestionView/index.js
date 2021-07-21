import React from "react";
import { connect } from "react-redux";
import { handleAddQuestion } from "../../Store/Actions/SharedActions";
import { Row, Col, Form, Card, Input, Button, Typography, Divider } from "antd";

const { Text, Title } = Typography;

function AddQuestionView(props) {
  const { dispatch, authedUser } = props;

  const onFinish = (values) => {
    if (values) {
      console.log("Success:", JSON.stringify(values));
      dispatch(
        handleAddQuestion(authedUser, values.optionOne, values.optionTwo)
      );
    } else {
      console.log("Fail");
    }
  };

  return (
    <Row allign="middle" justify="center">
      <Col span={18}>
        <Card
          title="Create New Question"
          bordered={true}
          headStyle={{
            display: "flex",
            backgroundColor: "#F0F2F5",
            justifyContent: "center",
          }}
        >
          <Text>Complete The Question</Text>
          <Title level={3}>Would you rather to...</Title>
          <Form onFinish={onFinish}>
            <Form.Item
              name="optionOne"
              rules={[{ required: true, message: "Please enter option one" }]}
            >
              <Input placeholder="Enter Option One Text Here" />
            </Form.Item>
            <Divider>OR</Divider>
            <Form.Item
              name="optionTwo"
              rules={[{ required: true, message: "Please enter option Two" }]}
            >
              <Input placeholder="Enter Option One Text Here" />
            </Form.Item>
            <Form.Item>
              <Row justify="center" style={{ paddingTop: "10px" }}>
                <Button
                  style={{ width: "30vw" }}
                  type="primary"
                  htmlType="submit"
                >
                  Submit
                </Button>
              </Row>
            </Form.Item>
          </Form>
        </Card>
      </Col>
    </Row>
  );
}

function mapStateToProps({ authedUserReducer }) {
  return {
    authedUser: authedUserReducer.authedUserId,
  };
}

export default connect(mapStateToProps)(AddQuestionView);
