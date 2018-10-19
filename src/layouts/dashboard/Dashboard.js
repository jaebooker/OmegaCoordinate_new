import React, { Component } from 'react'

class Dashboard extends Component {
  constructor(props, { authData }) {
    super(props)
    authData = this.props
  }

  render() {
    return(
      <main className="container">
        <div className="pure-g">
          <div className="pure-u-1-1">
            <h1>Dashboard</h1>
            <p><strong>Welcome, {this.props.authData.name}!</strong> You have logged in with your own smart contract successfully and are now ready to start joining projects!</p>
          </div>
        </div>

      </main>
    )
  }
}

export default Dashboard
