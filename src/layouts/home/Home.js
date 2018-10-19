import React, { Component } from 'react'

class Home extends Component {
  render() {
    return(
      <main className="container">
        <div className="pure-g">
          <div className="pure-u-1-1">
            <h1>OmegaCoordinate</h1>
            <h2>Welcome to a new form of coordination</h2>
            <p>Please Login or Register.</p>
            <h3>What We are About</h3>
            <p>We help people collaborate to build projects together, coordinating their team on a decentralized blockchain on Ethereum. What you are seeing is a test version of what will be built on the mainnet in the future. The advantage of building on the blockchain is it will allow innovators to get their own tokens for their projects without the hastle. Instead of worrying about ICOs, Venture Capitalists, or registering as a coporation, they will be free to do what they do best: building.</p>
            <h3>The Plan</h3>
            <p>We plan to create a dAPP using Solidity, Truffle, and Ethereum to provide an easy way for people to pitch ideas, with certain roles needed in order to generate an MVP. If all roles are filled, the project is a success! And everyone can get straight to building it. But the project only follows through if the required roles are met. This way, people will not be committing any time or effort to a project unless it is fully staffed. They are then free to create the project wherever and however they like. They will be issued their own unique tokens, based on the preferences of their choosing, and can then use those tokens to sell ads, prememium services, or anything else they choose, all without any legal paperwork! </p>
            <h3>Further Reading</h3>
            <p>Check out our Medium articles <a href="https://medium.com/@jaesonbooker/how-to-hunt-a-mammoth-50579302f3a3" target="_blank">How to Hunt a Mammoth</a> and <a href="https://medium.com/@jaesonbooker/after-the-hunt-how-to-hunt-a-mammoth-part-ii-db969f8cfdb" target="_blank">After the Hunt</a>!</p>
          </div>
        </div>
      </main>
    )
  }
}

export default Home
