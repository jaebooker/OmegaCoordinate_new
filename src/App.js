import React, { Component } from 'react'
import { Link } from 'react-router'
import { HiddenOnlyAuth, VisibleOnlyAuth } from './util/wrappers.js'

// UI Components
import LoginButtonContainer from './user/ui/loginbutton/LoginButtonContainer'
import LogoutButtonContainer from './user/ui/logoutbutton/LogoutButtonContainer'

// Styles
import './css/oswald.css'
import './css/open-sans.css'
import './css/pure-min.css'
import './App.css'

class App extends Component {
  render() {
    const OnlyAuthLinks = VisibleOnlyAuth(() =>
      <span>
        <li className="pure-menu-item">
          <Link to="/dashboard" className="pure-menu-link">Dashboard</Link>
        </li>
        <li className="pure-menu-item">
          <Link to="/profile" className="pure-menu-link">Profile</Link>
        </li>
        <LogoutButtonContainer />
      </span>
    )

    const OnlyGuestLinks = HiddenOnlyAuth(() =>
      <span>
        <li className="pure-menu-item">
          <Link to="/signup" className="pure-menu-link">Sign Up</Link>
        </li>
        <LoginButtonContainer />
      </span>
    )

    return (
      <div className="App">
        <nav className="navbar pure-menu pure-menu-horizontal">
          <ul className="pure-menu-list navbar-right">
            <OnlyGuestLinks />
            <OnlyAuthLinks />
          </ul>
          <Link to="/" className="pure-menu-heading pure-menu-link">OmegaCoordinate</Link>
        </nav>

        {this.props.children}
      </div>
    );
  }
}
// var App2 = {
//   contracts: {},
//
//   init: function() {
//     // Load pets.
//     $.getJSON('./projects.json', function(data) {
//       var projectsRow = $('#projectsRow');
//       var projectsTemplate = $('#projectsTemplate');
//
//       for (i = 0; i < data.length; i ++) {
//         projectsTemplate.find('.panel-title').text(data[i].name);
//         projectsTemplate.find('img').attr('src', data[i].picture);
//         projectsTemplate.find('.project-type').text(data[i].type);
//         projectsTemplate.find('.project-date').text(data[i].date);
//         projectsTemplate.find('.project-location').text(data[i].location);
//         projectsTemplate.find('.btn-join').attr('data-id', data[i].id);
//
//         projectsRow.append(projectsTemplate.html());
//       }
//     });
//
//   },
//
//   // initWeb3: function() {
//   //     //Is there a web3 instance?
//   //     if (typeof web3 !== 'underfined') {
//   //         App.web3Provider = web3.currentProvider;
//   //     } else {
//   //         //is there's no web3, use Ganache
//   //         App.web3Provider = new Web3.providers.HttpProvider("https://ropsten.etherscan.io/address/0x359f2c53358791bd225c6cdbd5fdc13e8951e0e9");
//   //     }
//   //     web3 = new Web3(App.web3Provider);
//   //     return App.initContract();
//   // },
//
//   initContract: function() {
//       $.getJSON('../src/projects.json', function(data) {
//           //get the contract file and instantiate it truffle
//           var ProjectsArtifact = data;
//           App.contracts.Projects = TruffleContract(ProjectsArtifact);
//           //set provider
//           App.contracts.Projects.setProvider(App.web3Provider)
//           //use our contract to get and set projects
//           return App.markJoin();
//       });
//       return App.bindEvents();
//   },
//
//   bindEvents: function() {
//     $(document).on('click', '.btn-join', App.handleJoin);
//   },
//
//   markJoin: function(projectAdopters, account) {
//       var projectAdoptionInstance;
//       App.contracts.Projects.deployed().then(function(instance) {
//           projectAdoptionInstance = instance;
//
//           return projectAdoptionInstance.getProjectAdopters.call();
//       }).then(function(projectAdopters) {
//           for (i = 0; i < projectAdopters.length; i++) {
//               if (parseInt(projectAdopters[i]) > 1) {
//               $('.panel-project').eq(i).find('button').text('Success').attr('disabled', true);
//           }
//           }
//       }).catch(function(err) {
//       console.log(err.message);
//   });
//   },
//
//   handleJoin: function(event) {
//     event.preventDefault();
//     var projectId = parseInt($(event.target).data('id'));
//     var projectAdoptionInstance;
//     web3.eth.getAccounts(function(err, accounts) {
//         if (err) {
//             console.log(err);
//         }
//         var account = accounts[0];
//         App.contracts.Projects.deployed().then(function(instance) {
//             projectAdoptionInstance = instance;
//             //use join by sending account
//             return projectAdoptionInstance.joinProject(projectId, {from: account});
//         }).then(function(result) {
//             return App.markJoin();
//         }).catch(function(err) {
//             console.log(err.message);
//         });
//     });
// }//remove paranthesis if not needed
//
// };

// $(function() {
//   $(window).load(function() {
//     App2.init();
//   });
// });

export default App
