import React, { Component } from 'react';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import * as action from './module/action'
import { push } from 'react-router-redux';
import store from '../../store/store'

class User extends Component {
    constructor(props){
        super(props)
        
    }
    handleGoHome = () =>{
        store.dispatch(push ('/'))
    }
 
     render() {
        const {content} = this.props
        return ( 
            <div>
                <h1>User</h1>
                {/* <p>{content}</p> */}
                {/* <button onClick={this.handleGoHome}>回到Homeyes</button> */}
            </div>
        )
    }
}
function mapStateToProps(state) {
    console.log("=====>",state)
    return state.user 
    
    
}
export default connect(mapStateToProps,
    dispatch => bindActionCreators(action, dispatch)
)(User)



