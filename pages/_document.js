import Document, {Html, Head, Main, NextScript} from 'next/document';
// import '../assets/scss/main.scss';

// import 'antd/dist/antd.css'
class MyDocument extends Document {
    // static async getInitialProps(ctx) {
    //     const initialProps = await Document.getInitialProps(ctx);
    //     return {...initialProps};
    // }
    // static getInitialProps ({ renderPage }) {
    //     const {html, head} = renderPage();
    //     return { html, head };
    // }

    render() {
        // console.log(this.props.html )
        // console.log(this.props.head )
        // const script = `window.ENV = '${process.env.NODE_ENV || 'dev'}';`;

        return (
            <Html>
            <Head>
                {/*<link rel='stylesheet' href='https://cdn.bootcss.com/antd/3.20.5/antd.css'/>*/}
                {/*<script dangerouslySetInnerHTML={{__html: script}}/>*/}
                {/*<link href="https://cdn.bootcss.com/minireset.css/0.0.2/minireset.css" rel="stylesheet"/>*/}
            </Head>
            <body>
            <Main/>
            <NextScript/>
            </body>
            </Html>
        );
    }
}

export default MyDocument;
