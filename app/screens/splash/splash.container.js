import { connect } from 'react-redux';
import Splash from './splash.component';

const mapState = (state) =>{
    const { app } = state;
    return {
        app
    };
  }
  
  const mapDispatch = (dispatch) =>{
  const {
    app :{
        onAppStart,
    }
  } = dispatch;
    return {
        onAppStart
    }
  }
  export default connect(mapState, mapDispatch)(Splash)

