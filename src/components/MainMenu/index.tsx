import {
    DesktopOutlined,
    FileOutlined,
    PieChartOutlined,
    TeamOutlined,
    UserOutlined,
  } from '@ant-design/icons';
  import type { MenuProps } from 'antd';
  import { Menu } from 'antd';
  import React, { Children, useState } from 'react';
  import {useNavigate,useLocation} from 'react-router-dom'
type MenuItem = Required<MenuProps>['items'][number];

const items: MenuItem[]=[
    {
        label:'栏目1',
        key:'/page1',
        icon:<PieChartOutlined />
    },
    {
        label:'栏目2',
        key:'/page2',
        icon:<DesktopOutlined />
    },
    {
        label:'栏目3',
        key:'page3',
        icon:<UserOutlined />,
        children:[
            {
                label:'栏目301',
                key:'/page3/page301'
            },
            {
                label:'栏目302',
                key:'/page3/page302'
            },
            {
                label:'栏目303',
                key:'/page3/page303'
            },
        ]
    },
    {
        label:'栏目4',
        key:'page4',
        icon:<TeamOutlined />,
        children:[
            {
                label:'栏目401',
                key:'/page4/page401'
            },
            {
                label:'栏目402',
                key:'/page4/page402'
            },
        ]
    },
    {
        label:'栏目5',
        key:'/page5',
        icon:<FileOutlined />
    },
]
  const Comp: React.FC = () => {
    let firstOpenKey:string='';
    const currentRoute=useLocation();
    function findKey(obj:{key:string}) {
        return obj.key===currentRoute.pathname;
    }
    for(let i=0;i<items.length;i++) {
        if(items[i]!['children']&&items[i]!['children'].length>0&&items[i]!['children'].find(findKey)) {
            firstOpenKey=items[i]?.key as string;
            break;
        }
    }
    const [openKeys,setOpenkeys]=useState([firstOpenKey]);
    const navigateTo=useNavigate();
    const menuClick=(e:{key:string})=>{
        //点击跳转到对应路由
        navigateTo(e.key)
    }
    const handleOpenChange=(keys:string[])=>{
      setOpenkeys([keys[keys.length-1]])
    }
    return (
        <Menu theme="dark" defaultSelectedKeys={[currentRoute.pathname]} mode="inline" items={items} onClick={menuClick} onOpenChange={handleOpenChange} openKeys={openKeys}/>
    )
  }
export default Comp;