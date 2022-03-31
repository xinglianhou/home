import React from 'react';
import { Row, Col, Card } from 'antd'
import styles from './index.less'
import { hostUrl } from '@/utils/common.js'
import Axios from 'axios';

class HomePage extends React.Component {

    state = {
        cardList: [],
        homeTitle:""
    }

    componentDidMount() {
        Axios.get(hostUrl + '/data.json', {})
            .then(res => {
                if (res.data.code === 200) {
                    this.setState({ 
                        cardList: res.data.data,
                        homeTitle:res.data.title
                    })
                }
            })
    }

    //打开新页面
    jumpUrl = (url) => {
        window.open(url);
    }

    render() {
        const { cardList,homeTitle } = this.state;
        return (
            <div className={styles.container}>
                <Row>
                    <Col span={24} className={styles.header}>
                        {homeTitle}
                    </Col>
                </Row>
                <Row style={{ marginTop: 50 }}>
                    {
                        cardList.map((e, i) => {
                            let imgUrl = require('./image/' + e.imgUrl);
                            return (
                                <Col span={8} style={{ padding: '15px 30px' }} key={'col' + i}>
                                    <Card hoverable onClick={() => this.jumpUrl(e.jumpUrl)} key={i}>
                                        <Row key={'row' + i}>
                                            <Col span={8}>
                                                <img className={styles.logoSytle} src={imgUrl} alt="logo"></img>
                                            </Col>
                                            <Col span={16}>
                                                <span className={styles.firstTitle}>{e.name}</span>
                                                <br />
                                                <span className={styles.secondTitle}
                                                    style={{ WebkitBoxOrient: 'vertical' }}
                                                    title={e.desc}>
                                                    {e.desc}
                                                </span>
                                            </Col>
                                        </Row>
                                    </Card>
                                </Col>
                            )
                        })
                    }
                </Row>
            </div>
        )
    }
}

export default HomePage