import React from "react";
import NavBar from "../../Components/NavBar";
import { connect } from "react-redux";
import { Layout, Breadcrumb } from "antd";
import "./HomePage.css";

const { Content, Footer } = Layout;

function HomePage() {
  return (
    <Layout>
      <NavBar />

      <Content style={{ padding: "0 50px" }}>
        <Breadcrumb style={{ margin: "16px 0" }}>
          <Breadcrumb.Item>Home</Breadcrumb.Item>
          <Breadcrumb.Item>Questions</Breadcrumb.Item>
        </Breadcrumb>
        <div className="site-layout-content">Content</div>
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
    console.log(`Authed User in Home: ${JSON.stringify(authedUser)}`);
    const userQuestionIds = Object.keys(authedUser.answers);
    const answeredQuestions = [];

    for (const userQuestion of userQuestionIds) {
      answeredQuestions.push(questionReducer[userQuestion]);
    }
    const questions = Object.values(questionReducer).filter(
      (question) =>
        answeredQuestions.filter(
          (answeredQuestion) => question.id !== answeredQuestion.id
        ).length > 0
    );
    console.log(
      `Number of Questions: ${Object.keys(questionReducer).length}${
        questions.length
      }Questions Remainging: ${JSON.stringify(questions)} , \n\n${
        answeredQuestions.length
      }AnsweredQuestuins: ${JSON.stringify(answeredQuestions)}`
    );
    return {};
  }
}

export default connect(mapStateToProps)(HomePage);
