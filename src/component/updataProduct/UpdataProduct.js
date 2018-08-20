import React, { Component } from 'react';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import * as action from './module/action'
import { push } from 'react-router-redux';
import styles from './module/index.css'
import {Input,Upload, Icon, Modal,Button } from 'antd';
import util from '../../util/utils'

//无状态组件
const UploadButton = () => {
    return (
        <div>
          <Icon type="plus" />
          <div className="ant-upload-text">Upload</div>
        </div>
    )

}
class UpdataProduct extends Component {
    constructor(props){
        super(props)
        
    }
    componentDidMount(){

    }
    handleGoHome = () =>{
        store.dispatch(push ('/'))
    }
    handleCancel = () =>{
        const{handleCancel} = this.props
        handleCancel()
    } 
       

    handlePreview = (file) => {
        const{previewImageShow} = this.props
        previewImageShow(file,true)
       
    }

    handleChange = ({ fileList }) => {
        this.props.uploadImg({ fileList })
        
    }
    handleInputChange = (e,key) => {
        this.props.handleInputChange(e.target.value,key)
    }
    handleSaveProduct = () => {
        let params ={

        }
        util.request('product.save', {},{params}, {}, null).then((res) => {
            console.log("===res===>",res)
        }).catch(err => {
            console.log("===err===>",err)
        })
    }
 
    render() {
        const {previewVisible, previewImage, fileList} = this.props
        
        return ( 
            <div className={styles.UpdataProductWrap}>
                <p className={styles.upP}><span>商品名称：</span> <Input  onChange={(e) => this.handleInputChange(e,"name")}/></p>
                <p className={styles.upP}><span>商品描述：</span> <Input  onChange={(e) => this.handleInputChange(e,"desc")} /></p>
                <p className={styles.upP}><span>商品价格：</span> <Input  onChange={(e) => this.handleInputChange(e,"price")}/></p>
                <p className={styles.upP}><span>商品库存：</span> <Input  onChange={(e) => this.handleInputChange(e,"kcNumber")}/></p>
                <div className={styles.clearfix}>
                    <p className={styles.clearfixImgTitle}>商品图片(第一张默认为商品首图)</p>
                    <Upload
                        action="//jsonplaceholder.typicode.com/posts/"
                        listType="picture-card"
                        fileList={fileList}
                        onPreview={this.handlePreview}
                        onChange={this.handleChange}
                    >
                    {fileList.length >= 7 ? null : <UploadButton />}
                    </Upload>
                    <Modal visible={previewVisible} footer={null} onCancel={this.handleCancel}>
                        <img alt="example" style={{ width: '100%' }} src={previewImage} />
                    </Modal>
                </div>
                <p className={styles.upBtn}><Button  type="primary" className={styles.button} onClick={this.handleSaveProduct}>提交</Button></p>
               
            </div>
        )
    }
}
function mapStateToProps(state) {
    return state.updataProduct 
    
    
}
export default connect(mapStateToProps,
    dispatch => bindActionCreators(action, dispatch)
)(UpdataProduct)



