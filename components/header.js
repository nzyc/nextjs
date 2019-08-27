import React, {Component} from 'react';
import Link from 'next/link';
import Router from 'next/router';
import '../assets/scss/header.scss';

class Page extends Component {
    render() {
        return (
            <header className={'header'}>
                <ul>
                    <li><Link href='/'><a>首页</a></Link></li>
                    <li><Link href='/topics'><a>话题</a></Link></li>
                    <li><Link href="/topics/[id]" as={`/topics/123213`}><a>话题分类</a></Link></li>
                    <li><Link href='/hot'><a>热榜</a></Link></li>
                    <li><Link href='/about'><a>关于</a></Link></li>
                </ul>
            </header>
        );
    }
}

export default Page;
