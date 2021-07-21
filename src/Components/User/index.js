import React from "react";
import { Card, Row, Col, Avatar, Typography, Divider, Space } from "antd";
import logo from "../../logo.svg";
import "./user.css";

function User(props) {
  const { Text, Title } = Typography;

  const { userName, avatar, answeredQuestions, createdQuestions, total } =
    props;
  return (
    <Row align="middle" justify="space-around">
      <Col span={18} className="card-container" style={{ margin: "5%" }}>
        <Card
          //   title={authorName + " asks:"}
          bordered={true}
          //   headStyle={{ backgroundColor: "#F0F2F5" }}
        >
          <div className="card-content-cintainer">
            <Row>
              <Col span={4} className="avatar-container" style={{}}>
                <Row style={{ alignSelf: "center" }}>
                  <Avatar
                    size={{ xs: 24, sm: 32, md: 40, lg: 64, xl: 80, xxl: 100 }}
                    src={avatar}
                    style={{ backgroundColor: "#003653" }}
                  />
                </Row>
              </Col>
              <Divider type="vertical" style={{ height: "15vh" }} />
              <Col span={16} className="middle-container">
                <Row>
                  <Col>
                    <Title level={4}>{userName}</Title>
                  </Col>
                  <Divider />
                </Row>
                <Row justify="start">
                  <Col span={16}>
                    <Text>Answered Questions: {answeredQuestions}</Text>
                  </Col>
                </Row>
                <Row justify="start">
                  <Col span={16}>
                    <Text>Created Questions: {createdQuestions}</Text>
                  </Col>
                </Row>
              </Col>
              <Divider type="vertical" style={{ height: "15vh" }} />
              <Col span={3}>
                <Card
                  bordered={true}
                  style={{
                    display: "flex",
                    height: "100%",
                    justifyContent: "center",
                    flexDirection: "column",
                  }}
                  title="Score"
                >
                  <Title level={3}>{total}</Title>
                </Card>
              </Col>
            </Row>
          </div>
        </Card>
      </Col>
    </Row>
  );
}

export default User;
