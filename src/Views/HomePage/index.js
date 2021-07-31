import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import { Layout, Breadcrumb, Tabs, Row, Col } from "antd";
import "./HomePage.css";
import ListOfQuestions from "../../Components/ListOfQuestions";

const { Content, Footer } = Layout;
const { TabPane } = Tabs;

function HomePage(props) {
  const { answeredQuestions, remainingQuestions } = props;
  const [sortedAnsweredQuestions, setSortedAnsweredQuestions] = useState([]);

  useEffect(() => {
    setSortedAnsweredQuestions(
      answeredQuestions.sort((a, b) => a.timestamp - b.timestamp)
    );
  }, [answeredQuestions]);

  return (
    <Layout>
      <Content style={{ padding: "0 50px" }}>
        <Breadcrumb style={{ margin: "16px 0" }}>
          <Breadcrumb.Item>Home</Breadcrumb.Item>
          <Breadcrumb.Item>Questions</Breadcrumb.Item>
        </Breadcrumb>
        <Row justify="center" className="site-layout-content">
          <Col span={15} className="tabs-container">
            <Tabs centered>
              <TabPane tab="Unanswered Questions" key="1">
                <Row justify="space-around">
                  <Col>
                    <div className="card-list-container">
                      <ListOfQuestions questionList={remainingQuestions} />
                    </div>
                  </Col>
                </Row>
              </TabPane>
              <TabPane tab="Answered Questions" key="2">
                <Row justify="center">
                  <Col>
                    <div className="card-list-container">
                      <ListOfQuestions questionList={sortedAnsweredQuestions} />
                    </div>
                  </Col>
                </Row>
              </TabPane>
            </Tabs>
          </Col>
        </Row>
      </Content>
      <Footer style={{ textAlign: "center" }}>
        Ant Design ©2018 Created by Ant UED
      </Footer>
    </Layout>
  );
}

function mapStateToProps({ authedUserReducer, userReducer, questionReducer }) {
  if (authedUserReducer.isAuthed) {
    const authedUser = Object.values(userReducer).filter(
      (user) => user.id === authedUserReducer.authedUserId
    )[0];

    const userQuestionIds = Object.keys(authedUser.answers);
    let answeredQuestions = [];
    let remainingQuestions = Object.values(questionReducer);

    for (const userQuestionId of userQuestionIds) {
      answeredQuestions.push(questionReducer[userQuestionId]);
      remainingQuestions = remainingQuestions.filter(
        (question) => question.id !== userQuestionId
      );
    }

    answeredQuestions = answeredQuestions.sort(
      (a, b) => a.timestamp - b.timestamp
    );
    return { answeredQuestions, remainingQuestions };
  }
}

export default connect(mapStateToProps)(HomePage);
