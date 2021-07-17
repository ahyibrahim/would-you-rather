import React from "react";
import "./loginView.css";
import logo from "./logo.svg";
import { connect } from "react-redux";
import { Select } from "antd";
import { setAuthedUser } from "../../Store/Actions/AuthedUserActions";

const { Option } = Select;

function loginView(props) {
  function handleChange(value) {
    console.log(`selected ${value}`);
    const { dispatch } = props;
    dispatch(setAuthedUser(value));
  }

  return (
    <div className="Login">
      <header className="Login-header">
        <h3>Welcom to Would You Rather</h3>
        <img src={logo} className="Login-logo" />
        <p>Select User to start using the app</p>
        <Select style={{ width: 300 }} onChange={handleChange}>
          {props.users.map((user) => (
            <Option key={user.id}>{user.id + " : " + user.name}</Option>
          ))}
        </Select>
      </header>
    </div>
  );
}

function mapStateToProps({ userReducer }) {
  return {
    users: Object.values(userReducer).map((user) => {
      return { name: user.name, id: user.id, avatarURL: user.avatarURL };
    }),
  };
}

export default connect(mapStateToProps)(loginView);
