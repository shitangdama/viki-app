import _ from 'lodash'
import { observable, action, runInAction } from 'mobx'

import ApiService from '../services/ApiService'

class User {
    @observable users = []

    // @action
    // getPods = async () => {
    //     const data = await ApiService.getPods()
    //     runInAction(()=>{
    //         this.pods = data.items
    //     })
    // }
}

export default new User()