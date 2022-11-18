const store={
    state:{
        arr:[10,20,30]
    },
    actions:{
        arrpush(state:{arr:number[]},action:{type:string,val:number}){
            state.arr.push(action.val)
        }
    },
    actionNames:{
        // arrpush:'arrpush'
    }
}
let actionNames={};
for(let key in store.actions) {
    actionNames[key]=key;
}
store.actionNames=actionNames;
export default store