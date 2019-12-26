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
export default class Info extends React.Component {

    // componentDidMount() {
    //     this.props.deploy.getDeploys()
    // }

    // handleEditClick = (e, name) => {
    //     e.preventDefault()
    //     history.push("/dashboard/deploys/"+name+"/edit")
    // }

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