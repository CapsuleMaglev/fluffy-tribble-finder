import React, { Component } from 'react'

export class UserItem extends Component {
  render() {
    const { login, avatar_url, html_url } = this.props

    return (
      <div className="card text-center">
        <img src={avatar_url} alt="" className="round-img" style={{ width: '60px' }}/>
        <h3>{login}</h3>
        <div>
          <a href={html_url} className='brn btn-dark btn-sm my-1'>More</a>
        </div>
      </div>
    )
  }
}

export default UserItem
