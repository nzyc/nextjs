import React, {useState} from "react";
import '../../assets/scss/index.scss';


const Page = ({query}) => {
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
        </>
    )
};

Page.getInitialProps = async ({query}) => {
    return {query}
};

export default Page;
