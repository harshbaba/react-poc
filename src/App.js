import React, {Component} from 'react';
import './Popup.css';
import Script from './components/Script/Script';
import Button from './components/Button/Button';


class Popup extends Component {
  constructor(props) {
    super(props);
    this.state = {
        "consent":{
            "title": "Voice Id Consent",
            "message": "Can you confirm that you are providing Fidelity International to store and process your Voice to provide secure access to your accounts?",
            "selectedOption": "",
            "isSelected": false,
            "type":"consent"
        },
        "optin":{
          
            "title": "Voice Id OptIn",
            "message": "Would you like to opt now?",
            "selectedOption": "",
            "isSelected": false,
            "type":"optin"
          
        },
        "success":{
            "title": "Success",
            "message": "You have suucessfully Opt Voice Id Services",
            "selectedOption": "",
            "isSelected": false,
            "type":"success"
        }
    }
  }

   

  handleButtonClick(type,val){
    let t = this.state[type];
    t.isSelected = true;
    t.selectedOption = val;
    this.setState({t}); 
  }

  
  render() {
    
    return (
      <div className="popup-wrapper">
        <div className="popup-overlay">
  
        </div>
        <div className="popup-main">
          <Script script={this.state.consent} handleButtonClick={this.handleButtonClick.bind(this)} />

          {this.state.consent.selectedOption === "Interested" &&
            <Script script={this.state.optin} handleButtonClick={this.handleButtonClick.bind(this)} />
          }

          {this.state.optin.selectedOption === "Yes" &&
            <Script script={this.state.success} handleButtonClick={this.handleButtonClick.bind(this)} />
          }

        </div>
      </div>
    );
  }
  
}

export default Popup;
