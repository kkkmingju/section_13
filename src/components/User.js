import { Component } from "react";
import classes from "./User.module.css";

class User extends Component {
  // Compoenent를 확장해줌
  // constructor() {} // 생성자 메소드 - 초기화 작업
  render() {
    return <li className={classes.user}>{this.props.name}</li>;
    // this.props는 Component로부터 받은 모든 props를 가리킴
  } // jsx코드 안에 컴포넌트가 사용된 것을 확인하려면 호출하는 메소드. 무엇이 화면에 렌더링 되어야 하는지
}

/*
const User = (props) => {
  return <li className={classes.user}>{props.name}</li>;
};
*/

export default User;
