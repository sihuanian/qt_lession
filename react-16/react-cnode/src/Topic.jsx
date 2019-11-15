import React, { Component } from 'react'
import { withRouter } from 'react-router-dom'
import axios from './axios'
import withLoading from './withLoding'

class Topic extends Component {
  constructor (props) {
    super(props)
    this.state = {
      content: null
    }
  }
  componentDidMount () {
    // this.initLoading()
  }
  initLoading = () => {
    // console.log(this.props.match.params)
    const { id } = this.props.match.params
    // 返回Promise
    return axios.get('/topic/' + id)
      .then(res => {
        console.log(res)
        this.setState({
          content: res.data.data.content
        })
        return Promise.resolve(true)
      })
      .catch(err => {
        return Promise.reject(false)
      })
  }
  render() {
    const { content } = this.state
    return (
      <div>
        Topic
        {/* { content }  dangerouslySetInnerHTML => v-html*/}
        <div dangerouslySetInnerHTML={{__html: content}}></div>
      </div>
    )
  }
}
// withRouter获取路径传参 withLoading 包裹之后需要传入 props
export default withRouter(withLoading(Topic))
