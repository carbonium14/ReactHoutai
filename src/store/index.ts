import {legacy_createStore,combineReducers,applyMiddleware,compose} from 'redux'
import thunk from 'redux-thunk'
import NumStatus from './NumStatus/reducer'
import ArrStatus from './ArrStatus/reducer'
//组合各个模块
const reducers=combineReducers({
    NumStatus,
    ArrStatus
})
//创建数据仓库
const store=legacy_createStore(reducers,applyMiddleware(thunk))
//window.__REDUX_DEVTOOLS_EXTENSION__&&window.__REDUX_DEVTOOLS_EXTENSION__()
export default store