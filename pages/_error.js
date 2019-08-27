import React from 'react'

class Error extends React.Component {
    static getInitialProps({res, err}) {
        const statusCode = res ? res.statusCode : err ? err.statusCode : null
        return {statusCode}
    }

    render() {
        return (
            <>
                <h1>自定义错误页</h1>
                <p>
                    {this.props.statusCode ? `An error ${this.props.statusCode} occurred on server` : 'An error occurred on client'}
                </p>
            </>
        )
    }
}

export default Error
