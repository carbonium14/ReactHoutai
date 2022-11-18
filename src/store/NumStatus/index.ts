const store={
    state:{
        num:20
    },
    actions:{//只放同步方法
        add1(state:{num:number},action:{type:string,val?:number}){
            state.num++;
        },
        add2(state:{num:number},action:{type:string,val:number}){
            state.num+=action.val;
        },
        add3(state:{num:number},action:{type:string,val:number}){
            state.num+=action.val;
        }
    },
    asyncActions:{//异步方法
        asyncAdd1(dispatch:Function){
            setInterval(() => {
                dispatch({type:'add1'})
            }, 1000);
        }
    },
    actionNames:{
        // add1:'add1',
        // add2:'add2'
    }
}
let actionNames={};
for(let key in store.actions) {
    actionNames[key]=key;
}
store.actionNames=actionNames;
export default store