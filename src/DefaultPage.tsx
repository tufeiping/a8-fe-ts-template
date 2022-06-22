/****************************************************
 * Audit Information Platform FrontEnd Project
 * 展示部分
 * 2022-06
 * Sunny
 ****************************************************/

//----- Global ------
import * as React from 'react';
import { PureComponent } from 'react';

import { Button, Icon, Modal } from 'tinper-bee';

import 'tinper-bee/assets/tinper-bee.css';
import 'bee-modal/build/Modal.css';

import './style/App.css';

/**
 * 页面模板
 *
 * @class DefaultPage
 *
 * @extends { PureComponent }
 *
 * @description A8前端页面模板
 */
class DefaultPage extends PureComponent<any, any> {
    state = {
    }

    onClick = () => {
        Modal.success({
            title: '提示',
            content: '确认要删除这条数据吗？',
            onOk: () => {
                console.log('OK');
            }
        });
    }

    componentDidMount() {
        let stopLoading = (window as any).stopLoading;
        stopLoading && stopLoading();
    }

    render() {
        return (
            <div className='main-div'>
                <Button colors="primary" onClick={this.onClick}>
                    <Icon type={this.props.icon || "uf-add-c-o"} />
                    确定
                </Button>
            </div>
        );
    }
}

export default DefaultPage;
