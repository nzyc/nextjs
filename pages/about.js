import React, {Component} from "react";
import fetch from "isomorphic-unfetch";
import Count from '../components/count';
import '../assets/scss/index.scss';

// class Page extends Component {
//     // static async getInitialProps(context) {
//     //     const promise = await new Promise((resolve, reject) => {
//     //         setTimeout(() => {
//     //             resolve({appName: "Super App"});
//     //         }, 500);
//     //     });
//     //     console.log(123);
//     //     console.log(promise);
//     //     return promise;
//     // }
//
//     render() {
//         return (
//             <>
//                 <h1>这是关于</h1>
//                 <Count/>
//                 <Count/>
//             </>
//         );
//     }
// }

const Page = ({stars, stars1, stars2}) => {
    return (
        <>
            <h1>这是关于</h1>
            <Count/>
            <style jsx>{`
                ul{
                    float:left;
                    width:545px;
                }
                ul:nth-of-type(1){
                    padding-right:50px;
                    border-right:5px solid #999;
                }
                ul+ul{
                    padding-left:50px;
                    border-left:5px solid #999;
                }
                img{
                    width:200px;
                    height:200px;
                }
                video{
                    width:200px;
                }
                hr{
                    clear:both;
                }
                h5>img{
                    display:block;
                }
            `}</style>
            <ul>
                {
                    stars.map((item, index) => {
                        return (
                            <li key={index}>

                                <a href={item.path} target="_blank">
                                    <b>{item.title}</b>
                                    <br/>
                                    <img src={item.image} alt=""/>
                                </a>
                                <hr/>
                            </li>
                        )
                    })
                }
            </ul>

            <ul>
                {
                    stars1.map((item, index) => {
                        return (
                            <li key={index}>
                                <a href={item.path} target="_blank">
                                    <b>{item.text}</b>
                                    <b>{item.top_comments_content}</b>
                                    <br/>
                                    <img src={item.header} alt=""/>
                                    <img src={item.thumbnail} alt=""/>
                                </a>
                                <video src={item.video} controls="controls"/>
                                <hr/>
                            </li>
                        )
                    })
                }
            </ul>
            <hr/>
            <ul>
                {
                    stars2.map((item) => {
                        return (
                            <li key={item.id}>
                                <small>{item.time}</small>
                                <img src={item.img} alt=""/>
                            </li>
                        )
                    })
                }
            </ul>
            <Count/>
        </>
    );
};

Page.getInitialProps = async () => {
    const res = await fetch('https://api.apiopen.top/getWangYiNews');
    const res1 = await fetch('https://api.apiopen.top/getJoke');
    const res2 = await fetch('https://api.apiopen.top/getImages');
    const json = await res.json();
    const json1 = await res1.json();
    const json2 = await res2.json();
    return {
        stars: json.result,
        stars1: json1.result,
        stars2: json2.result,
    }
};

export default Page;
