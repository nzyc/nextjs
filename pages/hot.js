import React, {useState} from "react";
import '../assets/scss/index.scss';
import {useRouter} from 'next/router'


const Page = () => {
    const [list, setList] = useState([]);
    const [inputData, setInputData] = useState('');
    const [isShow, setIsShow] = useState(true);

    const change = (e) => {
        setInputData(e.target.value);
    };
    const addPush = () => {
        let obj = {
            text: inputData,
        };
        setList(list.concat(obj));
        setInputData('');
    };
    const qihuan = () => {
        setIsShow(!isShow);
    };

    return (
        <>
            <h1>列表 + 双向数据绑定</h1>
            <div>
                <input type="text" onChange={change} value={inputData}/>
                <button onClick={addPush}>添加</button>
            </div>
            <style jsx>{`
                .bgda{
                    height:20px;
                    background:pink;
                }
                .show{
                    width:100px;
                    height:100px;
                    background:red;
                }
            `}</style>
            <div className={'bgda'}>{inputData}</div>
            <ul>
                {
                    list.map((item, index) => (
                        <li key={index}>{item.text}</li>
                    ))
                }
            </ul>
            <hr/>
            <h1>显示隐藏</h1>
            <button onClick={qihuan}>切换</button>
            {isShow ? <div className={'show'}></div> : ''}
        </>
    )
};


export default Page;
