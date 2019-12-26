import React from 'react';

import { Layout, Menu } from 'antd';
import styles from './HeaderView.module.less'
import history from '../routers/history'

const { Header } = Layout;

export default class HeaderView extends React.Component {

  state = {
    current: 'info',
  };

  handleClick = e => {
    history.push("/dashboard/"+e.key)
    this.setState({
      current: e.key,
    });
  };


  render() {
    return (
      <Header className={styles.fixedHeader}>
        <div className="container">
          <div className="logo" />
          <Menu
            onClick={this.handleClick}
            selectedKeys={[this.state.current]}
            theme="light"
            mode="horizontal"
            style={{ lineHeight: '64px' }}
          >
          <Menu.Item key="info">信息</Menu.Item>
          <Menu.Item key="articles">文章</Menu.Item>
          <Menu.Item key="numbers">数据</Menu.Item>
          <Menu.Item key="info">管理</Menu.Item>
          </Menu>
        </div>
      </Header>
    )
  }
}