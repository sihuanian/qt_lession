import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import { ListItem, ListInfo, LoadMore } from '../style'
import * as actionCreators from '../store/actionCreate.js'

class List extends Component {
  constructor(props) {
    super(props)
    this.state = {  }
  }
  render() {
    const { list, page } = this.props
    // console.log(list.toJS())
    return (
      <div>
        {
          list.map((item, i) => {
            return (
              <Link to={'/detail/' + item.get('id')} key={i}>
                <ListItem>
                  <ListInfo>
                    <h3 className="title">{ item.get('title') }</h3>
                    <p className="desc">{ item.get('desc') }</p>
                    <img alt='' className='pic' src={item.get('imgUrl')} />
                  </ListInfo>
                </ListItem>
              </Link>
            )
          })
        }
        <LoadMore onClick={() => {this.props.getMoreList(page)}}>更多文字</LoadMore>
      </div>
    )
  }
}

const mapStateToProps = (state) => ({
  list: state.getIn(['home', 'articleList']),
  page: state.getIn(['home', 'articlePage'])
})

const mapDispatchToProps = (dispatch) => {
  return {
    getMoreList (page) {
      dispatch(actionCreators.getMoreList(page))
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(List)