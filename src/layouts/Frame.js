import React,{Component} from 'react'
import Nav from './Nav';
import styles from './index.css'
import {connect} from 'react-redux';
import { Layout, Menu, Icon,Input } from 'antd';
import 'antd/dist/antd.css';
import {Link} from 'react-router';

const { Header, Sider, Content } = Layout;
class Frame extends Component {
    constructor(props){
        super(props)
        this.state={
            collapsed: false,
            index:['1']
        }
    }
    componentDidMount(){
      const {location} = this.props
      const  pathname = location.pathname.substr(1,location.pathname.length) == ''? 'Home': location.pathname.substr(1,location.pathname.length)
      if(pathname === "Home"){
        this.setState({
          index:['1']
        })
      }else if(pathname === "user"){
        this.setState({
          index:['2']
        })
      }else if(pathname === "updataProduct"){
        this.setState({
          index:['3']
        })
      }
    }
    toggle = () => {
      this.setState({
        collapsed: !this.state.collapsed,
      });
    }

    handleClickMeau = (obj) => {
      this.setState({
        index:[obj.key]
      })
    }
   
    
    render() {
        const {location} = this.props
        const {index} = this.state
        return (
            <div className={styles.leftTree}>
              <Layout>
                <Sider
                trigger={null}
                collapsible
                collapsed={this.state.collapsed}
                style={{height:'100vh'}}
                >
                  <div className={styles.logo} >aaa</div>
                  <Menu theme="dark" mode="inline" defaultSelectedKeys={index} selectedKeys={index} onSelect={(index)=>this.handleClickMeau(index)}>
                    <Menu.Item key="1">
                      <Link to='/' className={styles.leftTreeA}>
                        <Icon type="user" />
                        <span>home</span>
                      </Link>
                    </Menu.Item>
                    <Menu.Item key="2">
                      <Link  className={styles.leftTreeA} to='/user'>
                        <Icon type="video-camera" />
                        <span>user</span>
                      </Link>
                    </Menu.Item>
                    <Menu.Item key="3">
                      <Link  className={styles.leftTreeA} to='/updataProduct'>
                        <Icon type="upload" />
                        <span>UpdataProduct</span>
                      </Link>
                    </Menu.Item>
                  </Menu>
              </Sider>
              <Layout className={styles.contain}>
                <Header style={{ background: '#fff', padding: 0,textAlign:'center' }}>
                  <Icon
                    className={styles.trigger}
                    type={this.state.collapsed ? 'menu-unfold' : 'menu-fold'}
                    onClick={this.toggle}
                  />
                  <span className={styles.headerName}>{location.pathname.substr(1,location.pathname.length) == ''? 'Home': location.pathname.substr(1,location.pathname.length)}</span>
                </Header>
                <Content style={{ margin: '24px 16px', padding: 24, minHeight: 280 }}>
                  {this.props.children}
                </Content>
              </Layout>
            </Layout>
          </div>    
        )
    }
}
function mapStateToProps(state) {
    return state.routing 
}
export default connect(mapStateToProps)(Frame)

// export default Frame
