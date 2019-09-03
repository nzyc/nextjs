import React, {useState} from "react";
import fetch from "isomorphic-unfetch";
import '../../assets/scss/index.scss';


const Page = ({query, json, json1}) => {
    console.log(json1.data.data)
    const [count, setCount] = useState(0);

    const plus = () => {
        setCount(count + 10);
    };
    const Less = () => {
        setCount(count - 10);
    };

    return (
        <>
            <h1><b>动态路由的使用：</b></h1>
            <p>ID: {query.id}</p>
            <p>You clicked {count} times</p>
            <button onClick={Less}>-</button>
            <button>{count}</button>
            <button onClick={plus}>+</button>

            <style jsx>{`
                li > img{
                    width:200px;
                }
                li > h1{
                    margin-top:50px;
                }
            `}
            </style>

            <ul>
                {
                    json.data.map((item, index) => {
                        return (
                            <li key={index}>
                                <h1>{item.text}&emsp;-&emsp;{item.theme_name}</h1>
                                <b>{item.screen_name}</b>
                                <img src={item.profile_image} alt=""/>
                                <img src={item.cdn_img} alt=""/>
                                <img src={item.image0} alt=""/>
                                <img src={item.image1} alt=""/>
                                <img src={item.image2} alt=""/>
                            </li>
                        )
                    })
                }
            </ul>

            <ul>
                {
                    json1.data.data.map((item, index) => {
                        return (
                            <li key={index}>
                                <h1>{item.title}</h1>
                                <ul>
                                    {
                                        item.tags.split(',').map((item1, index1) => {
                                            return (
                                                <li key={index1}>{item1}</li>
                                            )
                                        })
                                    }
                                </ul>
                                <br/>
                                <br/>
                                <img src={item.cover}/>
                                <address><b>{item.author}</b></address>
                                <p><b>{item.first_chapter}</b>{item.desc}</p>
                                <a href={'//' + item.host} target='_blank'>阅读更多...</a>
                            </li>
                        )
                    })
                }
            </ul>
        </>
    )
};

Page.getInitialProps = async ({query}) => {
    //https://www.apiopen.top/satinApi
    const res = await fetch('https://www.apiopen.top/satinApi');
    const res1 = await fetch('https://www.apiopen.top/novelInfoApi?name=%E7%9B%97%E5%A2%93%E7%AC%94%E8%AE%B0');
    const json = await res.json();
    const json1 = await res1.json();

    return {query, json, json1}
};

export default Page;
