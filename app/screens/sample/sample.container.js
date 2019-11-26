import Sample from './sample.component';
import { connect } from 'react-redux';
  
  const mapDispatch = (dispatch) =>{
  const {
    login :{
        handlelogout,
    }
  } = dispatch;
    return {
        handlelogout
    }
  }
  export default connect(null, mapDispatch)(Sample)