import ArrStatus from "./index";
//管理数据
let reducer =(state={...ArrStatus.state},action:{type:string,val:number})=>{
    //调用dispatch就是调用这里的代码
    let newState=JSON.parse(JSON.stringify(state));
    // switch(action.type) {
    //     case ArrStatus.arrpush:
    //         ArrStatus.actions[ArrStatus.arrpush](newState,action);
    //         break;
    //     default:
    //         break;
    // }
    for(let key in ArrStatus.actionNames) {
        if(action.type===ArrStatus.actionNames[key]) {
            ArrStatus.actions[ArrStatus.actionNames[key]](newState,action);
            break;
        }
    }
    return newState;
}
export default reducer;