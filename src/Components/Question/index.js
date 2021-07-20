import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import {
  Card,
  Button,
  Row,
  Col,
  Avatar,
  Typography,
  Divider,
  Space,
} from "antd";
import "./question.css";

function Question(props) {
  const { Text, Title } = Typography;
  const { authorName, authorAvatar, option1, option2, questionId } = props;
  return (
    <Row align="middle" justify="center">
      <Col span={18} className="card-container">
        <Card
          title={authorName + " asks:"}
          bordered={true}
          headStyle={{ backgroundColor: "#F0F2F5" }}
        >
          <div className="card-content-cintainer">
            <Row>
              <Col span={3} className="avatar-container">
                <Row>
                  <Avatar
                    size={{ xs: 24, sm: 32, md: 40, lg: 64, xl: 80, xxl: 100 }}
                    src={authorAvatar}
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
                <Row justify="center">
                  <Col span={16}>
                    <Text>{option1}</Text>
                  </Col>
                </Row>
                <Row justify="center">
                  <Col span={16}>
                    <Title level={5}>Or</Title>
                  </Col>
                </Row>
                <Row justify="center">
                  <Col span={16}>
                    <Text>{option2}</Text>
                  </Col>
                </Row>
              </Col>
            </Row>
            <Divider />
            <Row justify="center">
              <Col span={16}>
                <Link
                  to={{ pathname: `/question/:${questionId}`, id: questionId }}
                >
                  <Button shape="round" style={{ width: "100%" }}>
                    View Full
                  </Button>
                </Link>
              </Col>
            </Row>
            <Divider />
          </div>
        </Card>
      </Col>
    </Row>
  );
}

function mapStateToProps({ userReducer }, { authorId }) {
  return {
    authorName: userReducer[authorId].name,
    authorAvatar: userReducer[authorId].avatarURL,
  };
}

export default connect(mapStateToProps)(Question);
