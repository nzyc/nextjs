import React from "react";
import dynamic from 'next/dynamic';
import '../../assets/scss/index.scss';


const DynamicHello = dynamic(() => import('../../components/hello'));


const Page = () => {
    return (
        <>
            <h1>这是话题</h1>
            <h1><b>next/dynamic 动态导入</b> 的使用</h1>
            <DynamicHello/>
        </>
    );
};


export default Page;
