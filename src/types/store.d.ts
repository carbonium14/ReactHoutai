type RootState=ReturnType<typeof import('../store/index').getState>
interface window {
    __REDUX_DEVTOOLS_EXTENSION__:function;
    __REDUX_DEVTOOLS_EXTENSION_COMPOSE__:function;
}