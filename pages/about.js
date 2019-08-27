import React, {Component} from "react";

import '../assets/scss/index.scss';

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
                <h1>这是关于</h1>
            </>
        );
    }
}


export default Page;
