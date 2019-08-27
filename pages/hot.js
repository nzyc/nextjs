import React, {Component} from "react";
import '../assets/scss/index.scss';
import { useRouter } from 'next/router'


class Page extends Component {
    // static async getInitialProps(context) {
    //     const promise = await new Promise((resolve, reject) => {
    //         setTimeout(() => {
    //             resolve({appName: "Super App"});
    //         }, 500);
    //     });
    //     console.log(123);
    //     console.log(promise);
    //     return promise;
    // }


    render() {
        return (
            <>
                <h1>这是热榜</h1>
            </>
        );
    }
}


export default Page;
