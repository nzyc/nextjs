import React, {Component} from "react";
import '../assets/scss/index.scss';
import {Button, Carousel, Calendar, Table, Divider, Tag} from 'antd';

const columns = [
    {
        title: 'Name',
        dataIndex: 'name',
        key: 'name',
        render: text => <a>{text}</a>,
    },
    {
        title: 'Age',
        dataIndex: 'age',
        key: 'age',
    },
    {
        title: 'Address',
        dataIndex: 'address',
        key: 'address',
    },
    {
        title: 'Tags',
        key: 'tags',
        dataIndex: 'tags',
        render: tags => (
            <span>
        {tags.map(tag => {
            let color = tag.length > 5 ? 'geekblue' : 'green';
            if (tag === 'loser') {
                color = 'volcano';
            }
            return (
                <Tag color={color} key={tag}>
                    {tag.toUpperCase()}
                </Tag>
            );
        })}
      </span>
        ),
    },
    {
        title: 'Action',
        key: 'action',
        render: (text, record) => (
            <span>
        <a>Invite {record.name}</a>
        <Divider type="vertical"/>
        <a>Delete</a>
      </span>
        ),
    },
];

const data = [
    {
        key: '1',
        name: 'John Brown',
        age: 32,
        address: 'New York No. 1 Lake Park',
        tags: ['nice', 'developer'],
    },
    {
        key: '2',
        name: 'Jim Green',
        age: 42,
        address: 'London No. 1 Lake Park',
        tags: ['loser'],
    },
    {
        key: '3',
        name: 'Joe Black',
        age: 32,
        address: 'Sidney No. 1 Lake Park',
        tags: ['cool', 'teacher'],
    },
];

class Page extends Component {
    render() {
        return (
            <section className={'index'}>
                <h1>这是首页</h1>
                <h1><b>antd-ui</b> 的使用</h1>

                <div><br/><br/></div>

                <div>
                    <Button type="primary">Primary</Button>
                    <Button>Default</Button>
                    <Button type="dashed">Dashed</Button>
                    <Button type="danger">Danger</Button>
                    <Button type="link">Link</Button>
                </div>

                <div><br/><br/></div>

                <Carousel autoplay>
                    <div>
                        <h3>1</h3>
                    </div>
                    <div>
                        <h3>2</h3>
                    </div>
                    <div>
                        <h3>3</h3>
                    </div>
                    <div>
                        <h3>4</h3>
                    </div>
                </Carousel>

                <div><br/><br/></div>

                <Calendar onPanelChange={onPanelChange}/>

                <div><br/><br/></div>

                <Table columns={columns} dataSource={data}/>
            </section>
        );
    }
}

function onPanelChange(value, mode) {
    console.log(value, mode);
}

export default Page;


/*
*
* 给你讲个烧饼的故事，股市原理通俗易懂版。：假设一个市场，有两个人在卖烧饼，有且只有两个人，姑且称他们为烧饼甲、烧饼乙。 假设他们的烧饼价格没有物价局监管。 假设他们每个烧饼卖一元钱就可以保本（包括他们的劳动力价值） 假设他们的烧饼数量一样多。 ——经济模型都这样，假设需要很多。 再假设他们生意很不好，一个买烧饼的人都没有。这样他们很无聊地站了半天。 甲说好无聊。 乙说好无聊。 看故事的你们说：好无聊。 这个时候的市场叫做很不活跃！ 为了让大家不无聊，甲对乙说：要不我们玩个游戏？乙赞成。 于是，故事开始了。。。。。。 甲花一元钱买乙一个烧饼，乙也花一元钱买甲一个烧饼，现金交付。 甲再花两元钱买乙一个烧饼，乙也花两元钱买甲一个烧饼，现金交付。 甲再花三元钱买乙一个烧饼，乙也花三元钱买甲一个烧饼，现金交付。。。 于是在整个市场的人看来（包括看故事的你）烧饼的价格飞涨，不一会儿就涨到了每个烧饼60元。但只要甲和乙手上的烧饼数一样，那么谁都没有赚钱，谁也没有 亏钱，但是他们重估以后的资产“增值”了！甲乙拥有高出过去很多倍的“财富”，他们身价提高了很多，“市值”增加了很多。 这个时候有路人丙，一个小时前路过的时候知道烧饼是一元一个，现在发现是60元一个，他很惊讶。 一个小时以后，路人丙发现烧饼已经是100元一个，他更惊讶了。 又一个小时以后，路人丙发现烧饼已经是120元一个了，他毫不犹豫地买了一个，因为他是个投资兼投机家，他确信烧饼价格还会涨，价格上还有上升空间，并且有人给出了超过200元的“目标价”（在股票市场，他叫股民，给出目标价的人叫研究员）。 在烧饼甲、烧饼乙“赚钱”的示范效应下，甚至路人丙赚钱的示范效应下，接下来的买烧饼的路人越来越多，参与买卖的人也越来越多，烧饼价格节节攀升，所有的人都非常高兴，因为很奇怪：所有人都没有亏钱。。。。。。 这个时候，你可以想见，甲和乙谁手上的烧饼少，即谁的资产少，谁就真正的赚钱了。参与购买的人，谁手上没烧饼了，谁就真正赚钱了！而且卖了的人都很后悔——因为烧饼价格还在飞快地涨。。。。。。 那谁亏了钱呢？ 答案是：谁也没有亏钱，因为很多出高价购买烧饼的人手上持有大家公认的优质等值资产——烧饼！而烧饼显然比现金好！现金存银行能有多少一点利息啊？哪比得 上价格飞涨的烧饼啊？甚至大家一致认为市场烧饼供不应求，可不可以买烧饼期货啊？于是出现了认购权证。。。。。。 有人问了：买烧饼永远不会亏钱吗？看样子是的。但这个世界就那么奇怪，突然市场上来了一个叫李子的，李子曰：有亏钱的时候！那哪一天大家会亏钱呢？ 假设一：市场上来了个物价部门，他认为烧饼的定价应该是每个一元。（监管） 假设二：市场出现了很多做烧饼的，而且价格就是每个一元。（同样题材） 假设三：市场出现了很多可供玩这种游戏的商品。（发行） 假设四：大家突然发现这不过是个烧饼！（价值发现） 假设五：没有人再愿意玩互相买卖的游戏了！（真相大白） 如果有一天，任何一个假设出现了，那么这一天，有烧饼的人就亏钱了！那谁赚了钱？就是最少占有资产——烧饼的人！ 这个卖烧饼的故事非常简单，人人都觉得高价买烧饼的人是傻瓜，但我们再回首看看我们所在的证券市场的人们吧。这个市场的有些所谓的资产重估、资产注入何尝 不是这样？在市盈率高企，资产又高溢价下的资产注入，和卖烧饼的原理其实一样，谁最少地占有资产，谁就是赚钱的人，谁就是获得高收益的人！ 所以作为一个投资人，要理性地看待资产重估和资产注入，忽悠别人不要忽悠自己，尤其不要忽悠自己的钱！ 在高市盈率下的资产注入，尤其是券商借壳上市、增发购买大股东的资产、增发类的房地产等等资产注入，一定要把眼睛擦亮再擦亮，慎重再慎重！ 因为，你很可能成为一个持有高价烧饼的路人。.高手啊，帮帮忙吧！
* */
