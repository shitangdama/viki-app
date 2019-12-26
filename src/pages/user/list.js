import React from 'react'
import classNames from 'classnames'
import { inject, observer } from 'mobx-react'

import {
    Card,
    List,
    Table,
    Avatar
} from 'antd';

import history from "../../routers/history"

const { Column } = Table;

@inject('user')
@observer
export default class List extends React.Component {

    render() {
        const deploys = this.props.deploy.deploys
        return (
            <div className="card-info-list">
                <Card bordered={false}>

                </Card>
            </div>
        )
    }
}