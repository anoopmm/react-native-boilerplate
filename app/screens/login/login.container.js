import { connect } from 'react-redux';
import Login from './login.component';

const mapState = ({ login }) => ({
  login,
});
const mapDispatch = (dispatch) => {
  const {
    login: {
      handlelogin,
    },
  } = dispatch;
  return {
    handlelogin,
  };
};
export default connect(mapState, mapDispatch)(Login);
