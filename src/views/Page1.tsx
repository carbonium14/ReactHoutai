import {useSelector,useDispatch} from 'react-redux'
import NumStatus from '../store/NumStatus/index'
const View=()=>{
    //修改仓库数据
    const dispatch=useDispatch();
    //获取仓库数据
    const {num}=useSelector((state:RootState)=>({
        num:state.NumStatus.num
    }))
    const {arr}=useSelector((state:RootState)=>({
        arr:state.ArrStatus.arr
    }))
    const changenum=()=>{
        dispatch({type:'add2',val:10})
    }
    const changenum2=()=>{
        // dispatch({type:'add1'})
        // dispatch((dis:Function)=>{
        //     setInterval(() => {
        //         dis({type:'add1'})
        //     }, 1000);
        // })
        dispatch(NumStatus.asyncActions.asyncAdd1)//这里不需要给参数
    }
    const changenum_=()=>{
        dispatch({type:'add3',val:100})
    }
    const changearr=()=>{
        dispatch({type:'arrpush',val:40})
    }
    return (
        <div className="page1">
            <p>这是page1页面</p>
            <p>{num}</p>
            <button onClick={changenum2}>num异步</button>
            <button onClick={changenum}>num同步</button>
            <button onClick={changenum_}>num+</button>
            <p>{arr}</p>
            <button onClick={changearr}>arr</button>
        </div>
    )
}
export default View