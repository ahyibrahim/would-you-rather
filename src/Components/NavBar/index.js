import React, { useCallback } from "react";
import { connect } from "react-redux";
import { Link, useHistory } from "react-router-dom";
import { Layout, Menu, Row, Col, Avatar, Typography, Space } from "antd";
import logo from "./logo.svg";
import "./NavBar.css";
import { handleLogout } from "../../Store/Actions/SharedActions";

const { Header } = Layout;
const { Text } = Typography;

function NavBar(props) {
  const history = useHistory();
  const { dispatch } = props;
  const logout = useCallback(() => {
    dispatch(
      handleLogout(() => {
        history.replace("/login");
      })
    );
  }, []);
  return (
    <Header className="header">
      <Row gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}>
        <Col span={2}>
          <img className="logo" src={logo} />
        </Col>
        <Col span={16}>
          <Menu theme="dark" mode="horizontal">
            <Link to="/">
              <Menu.Item key="home">Home</Menu.Item>
            </Link>
            <Menu.Item key="add">New Question</Menu.Item>
            <Menu.Item key="boards">Leader Boards</Menu.Item>
          </Menu>
        </Col>
        <Col span={6}>
          {props.authed ? (
            <Space direction="horizontal" size="middle">
              <Text italic className="username">
                Hello, {props.authedUserName}
              </Text>
              <Avatar
                src={props.authedUserAvatar}
                style={{ backgroundColor: "#003653" }}
              />
              <a onClick={logout}>Logout</a>
            </Space>
          ) : (
            <Typography style={{ color: "#FE6D6D" }}>
              Please {<Link to="/login">Login</Link>} to Access App Features
            </Typography>
          )}
        </Col>
      </Row>
    </Header>
  );
}

function mapStateToProps({ authedUserReducer, userReducer }) {
  if (authedUserReducer.isAuthed) {
    const authedUser = Object.values(userReducer).filter(
      (user) => user.id === authedUserReducer.authedUserId
    )[0];
    //console.log(`Authed User in nav: ${JSON.stringify(authedUser)}`);
    const authedUserName = authedUser.name;
    const authedUserAvatar = authedUser.avatarURL;
    return { authedUserName, authedUserAvatar, authed: true };
  } else {
    return { authed: false };
  }
}

export default connect(mapStateToProps)(NavBar);
