import React from "react";
import { connect } from "react-redux";
import { Layout, Breadcrumb, Row, Col } from "antd";
import ListOfUsers from "../../Components/ListOfUsers";
import "./leaderboard.css";

const { Content, Footer } = Layout;

function LeaderboardView(props) {
  const { users } = props;

  return (
    <Layout>
      <Content style={{ padding: "0 50px" }}>
        <Breadcrumb style={{ margin: "16px 0" }}>
          <Breadcrumb.Item>Leaderboard</Breadcrumb.Item>
        </Breadcrumb>
        <Row justify="center" className="site-layout-content">
          <Col span={15} className="tabs-container">
            <Row justify="center">
              <Col span={24}>
                <ListOfUsers usersList={users} />
              </Col>
            </Row>
          </Col>
        </Row>
      </Content>
      <Footer style={{ textAlign: "center" }}>
        Ant Design ©2018 Created by Ant UED
      </Footer>
    </Layout>
  );
}

function mapStateToProps({ userReducer }) {
  return {
    users: userReducer,
  };
}

export default connect(mapStateToProps)(LeaderboardView);
