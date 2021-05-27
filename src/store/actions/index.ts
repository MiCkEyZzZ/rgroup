import * as UsersActionCreators from './dataUsersAction'
import * as UserActionCreators from './dataUserAction'

const actionsObject = {
    ...UsersActionCreators,
    ...UserActionCreators
}

export default actionsObject