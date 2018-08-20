import React,{Component} from 'react';
import {Link} from 'react-router';
import styles from './index.css'
import store from '../store/store'
class Nav extends Component {
    constructor(props){
        super(props)
        this.state={
            active:props.active
        }
    }
    componentDidMount(){
    }
    componentWillReceiveProps(nextProps){
        if(nextProps.active !== this.props.active){
            this.setState({
                active:nextProps.active
            })
        }
    }
   
    render (){
        const{active} = this.state
        return (
            <nav  className={active? styles.activeLink: styles.Link}>
                <Link  to={this.props.src}>{this.props.name}</Link>
            </nav>
        )
    }
}
export default Nav