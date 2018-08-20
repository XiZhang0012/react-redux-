import React, { Component } from 'react';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import * as action from './module/action'
import { push } from 'react-router-redux';
import {
    G2,
    Chart,
    Geom,
    Axis,
    Coord,
    Label,
    Legend,
    View,
    Guide,
    Shape,
    Facet,
    Util
  } from "bizcharts";
import {
    Row,
    Col,
    Icon,
    Card,
    Tabs,
    Table,
    Radio,
    DatePicker,
    Tooltip,
    Menu,
    Dropdown,
  } from 'antd';

import styles from './module/Home.css'
const TabPane = Tabs.TabPane;

const topColResponsiveProps = {
    xs: 24,
    sm: 12,
    md: 12,
    lg: 12,
    xl: 6,
    style: { 
            marginBottom: 24,
            // border: '1px solid',
            height:160,
            // padding: '20px 24px 8px',
            // background:'red',
          },
};

class Home extends Component {
    constructor(props){
        super(props)
        
        
    }

    handlClickAdd = () =>{
        const {clickAdd} = this.props
        clickAdd()
    }
    handlClickGoDetail = () =>{
        const {goDetail} = this.props
        goDetail()
        store.dispatch(push('/detail'))
    }
    componentWillMount(){
        const {clickRever} = this.props
        clickRever()
    }
    callback = (key) => {
        console.log(key);
    }
     render() {
        const {index,data,cols} = this.props
        return ( 
            <div>
                {/* <p>{index}</p>
                <button onClick={this.handlClickAdd}>add</button> */}
                  <Row gutter={24}>
                    <Col  {...topColResponsiveProps}>
                        <div className={styles.ColDiv}>
                            <p>总销售额</p>
                            <p>1000</p>
                        </div>
                       
                    </Col>
                    <Col {...topColResponsiveProps}>
                        <div className={styles.ColDiv}>
                            <p>访问量</p>
                            <p>20000</p>
                        </div>
                    </Col>
                    <Col {...topColResponsiveProps}>
                        <div className={styles.ColDiv}>
                            <p>支付笔数</p>
                            <p>200</p>
                        </div>
                    </Col>
                    <Col {...topColResponsiveProps}>
                        <div className={styles.ColDiv}>
                            <p>今日新增用户</p> 
                            <p>666</p>
                        </div>
                    </Col>
                  </Row>
                <div className={styles.homeTabs}>
                    <Tabs defaultActiveKey="1" onChange={this.callback}>
                        <TabPane tab="最近七天销售额" key="1">
                            <div className={styles.chartWrap}>
                                <Chart  height={300} data={data} scale={cols} padding={[ 30]} forceFit>
                                    <Axis name="year" />
                                    <Axis name="value" />
                                    <Tooltip
                                        crosshairs={{
                                        type: "y"
                                        }}
                                    />
                                    <Geom type="line" position="year*value" size={2} />
                                    <Geom
                                        type="point"
                                        position="year*value"
                                        size={4}
                                        shape={"circle"}
                                        style={{
                                        stroke: "#fff",
                                        lineWidth: 1
                                        }}
                                    />
                                </Chart>
                            </div>
                        </TabPane>
                        <TabPane tab="月销售额" key="2">
                            <Chart  height={300} data={data} scale={cols} padding={[ 30]} forceFit>
                                <Axis name="year" />
                                <Axis name="value" />
                                <Tooltip
                                    crosshairs={{
                                    type: "y"
                                    }}
                                />
                                <Geom type="line" position="year*value" size={2} />
                                <Geom
                                    type="point"
                                    position="year*value"
                                    size={4}
                                    shape={"circle"}
                                    style={{
                                    stroke: "#fff",
                                    lineWidth: 1
                                    }}
                                />
                            </Chart>
                        </TabPane>
                        
                    </Tabs>
                </div>
                <div>
                    
                </div>
            </div>
        )
    }
}
function mapStateToProps(state) {
    return state.home 
    
    
}
export default connect(mapStateToProps,
    dispatch => bindActionCreators(action, dispatch)
)(Home)



