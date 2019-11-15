import React, { Component } from 'react'
import axios from './axios.js'
import { Pagination,Spin } from 'antd'
import { Link } from 'react-router-dom'
const perSize = 40
const tabMap = {
  'all': '全部',
  'good': '精华',
  'share': '分享',
  'ask': '问答',
  'job': '招聘'
}
class Home extends Component {
	state = {
    current: 1,
    tab: 'all',
    limit: perSize,
    list: [],
    isLoding: false
  }
  onChange = (page) => {
    this.setState({
      current: page
    }, () => {
      this.handleRequestList()
    })
  }
  handleChangeTab = (key) => (e) => {
    // setState是异步的,第二个参数是执行成功的的回调
    // react setState借鉴了事务的思想
    this.setState({
      tab: key
    }, () => {
      this.handleRequestList()
    })
  }
  handleRequestList = () => {
    this.setState({
      isLoding: true
    })
    const { tab, limit, current } = this.state
    axios.get(`/topics?tab=${tab}&limit=${limit}&page=${current}`)
      .then(res => {
        this.setState({
          list: res.data,
          isLoding: false
        })
      })
  }
  componentDidMount () {
    this.handleRequestList()
  }
	render () {
    const { list, tab, isLoding } = this.state
		return (
			<div>
				Home
        <ul>
          {
            Object.keys(tabMap).map((key, index) => {
              return (
                <li onClick={this.handleChangeTab(key)}
                  key={index}
                  style={{color: tab === key ? 'red' : ''}}>{tabMap[key]}</li>
              )
            })
          }
        </ul>
        <Spin spinning={isLoding}>
          {
            list.data && list.data.map((dis, index) => {
              return (
                <Link to={`/topic/${dis.id}`} key={index}>
                  <li className="li" key={`dis${index}`}>
                    <img src={dis.author.avatar_url} alt=""/>
                    <span>{dis.author.loginname}</span>
                    <h2>{dis.title}</h2>
                  </li>
                </Link>
              )
            })
          }
        </Spin>
				<Pagination
					current={this.state.current}
					onChange={this.onChange}
					total={50}
				/>
			</div>
		)
	}
}

export default Home
