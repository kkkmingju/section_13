import { Component, useState } from "react";
import User from "./User";

import classes from "./Users.module.css";

// const DUMMY_USERS = [
//   { id: "u1", name: "Max" },
//   { id: "u2", name: "Manuel" },
//   { id: "u3", name: "Julie" },
// ];

class Users extends Component {
  constructor() {
    super(); // 상위 클래스의 생성자를 호출
    this.state = {
      showUsers: true,
      // moreState: 'Test',
      // nested: {},
      // data: []
    };
  }

  toggleUsersHandler() {
    this.setState((curState) => {
      return { showUsers: !curState.showUsers }; // Component를 상속받은 모든 클래스에서 사용 가능. 항상 객체를 사용. 오버라이드하지 않고 기존 상태와 병합함. 기존 상태와 결합된 것이기 때문에 다른 상태값은 손실되지 않음
    });
  }

  render() {
    const usersList = (
      <ul>
        {this.props.users.map((user) => (
          <User key={user.id} name={user.name} />
        ))}
      </ul>
    );

    return (
      <div className={classes.users}>
        <button onClick={this.toggleUsersHandler.bind(this)}>
          {" "}
          {/* this 예약어가 코드가 평가될 시점의 동일 값이나 동일 내용을 갖도록 설정됨 */}
          {this.state.showUsers ? "Hide" : "Show"} Users
        </button>
        {this.state.showUsers && usersList}
      </div>
    );
  }
}

/*
const Users = () => {
  const [showUsers, setShowUsers] = useState(true);

  const toggleUsersHandler = () => {
    setShowUsers((curState) => !curState);
  };

  const usersList = (
    <ul>
      {DUMMY_USERS.map((user) => (
        <User key={user.id} name={user.name} />
      ))}
    </ul>
  );

  return (
    <div className={classes.users}>
      <button onClick={toggleUsersHandler}>
        {showUsers ? 'Hide' : 'Show'} Users
      </button>
      {showUsers && usersList}
    </div>
  );
};
*/
export default Users;
