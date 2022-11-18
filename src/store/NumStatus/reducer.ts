import NumStatus from "./index";
//管理数据
let reducer =(state={...NumStatus.state},action:{type:string,val:number})=>{
    //调用dispatch就是调用这里的代码
    let newState=JSON.parse(JSON.stringify(state));
    // switch(action.type) {
    //     case NumStatus.add1:
    //         NumStatus.actions[NumStatus.add1](newState,action);
    //         break;
    //     case NumStatus.add2:
    //         NumStatus.actions[NumStatus.add2](newState,action);
    //         break;
    //     default:
    //         break;
    // }
    for(let key in NumStatus.actionNames) {
        if(action.type===NumStatus.actionNames[key]) {
            NumStatus.actions[NumStatus.actionNames[key]](newState,action);
            break;
        }
    }
    return newState;
}
export default reducer;