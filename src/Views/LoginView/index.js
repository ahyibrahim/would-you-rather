import React from "react";
import "./loginView.css";
import logo from "./logo.svg";
import {connect} from "react-redux";
import {Select} from "antd";
import {setAuthedUser} from "../../Store/Actions/AuthedUserActions";

const {Option} = Select;

function LoginView(props) {
  //   useEffect(() => {
  //     if (!props.authedUser) {
  //       const { dispatch } = props;
  //       console.log("Resetting Authed User");
  //       dispatch(setAuthedUser(undefined));
  //     }
  //   }, []);
  const {users} = props;

  function handleChange(value) {
    console.log(`selected ${value}`);
    const {dispatch} = props;
    dispatch(setAuthedUser(value));
  }

  return (
    <div className="Login">
      <header className="Login-header">
        <h3>Welcome to Would You Rather</h3>
        <img src={logo} className="Login-logo" alt="logo"/>
        <p>Select User to start using the app</p>
        {
          users.length ?
            <Select
              style={{width: 300}}
              onChange={handleChange}
              value={props.authedUser}
            >
              {users.map((user) => (
                <Option key={user.id}>{user.id + " : " + user.name}</Option>
              ))}
            </Select> : <div style={{
              color: 'white'
            }}>
              Loading Users...
            </div>
        }
      </header>
    </div>
  );
}

function mapStateToProps({userReducer, authedUserReducer, widgetsReducer}) {
  const {isLoading} = widgetsReducer
  return {
    users: Object.values(userReducer).map((user) => {
      return {name: user.name, id: user.id, avatarURL: user.avatarURL};
    }),
    authedUserReducer,
    isLoading
  };
}

export default connect(mapStateToProps)(LoginView);
