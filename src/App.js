import React, {Component} from 'react';
import './Popup.css';
import Script from './components/Script/Script';
import Button from './components/Button/Button';
import { stat } from 'fs';
class Popup extends Component {
  my = null;
  constructor(props) {
    super(props);
  }

  state = {
    "popupObj": {
      "consent":{
        "config":{
          "title": "Voice Id Consent",
          "message": "Can you confirm that you are providing Fidelity International to store and process your Voice to provide secure access to your accounts?",
          "selectedOption": "",
          "isSelected": false,
          "type":"consent"
        }
      },
      "optin":{
        "config":{
          "title": "Voice Id OptIn",
          "message": "Would you like to opt now?",
          "selectedOption": "",
          "isSelected": false,
          "type":"optin"
        }
      },
      "success":{
        "config":{
          "title": "Success",
          "message": "You have suucessfully Opt Voice Id Services",
          "selectedOption": "",
          "isSelected": false,
          "type":"success"
        }
      }
    }
  } 

  handleButtonClick(type,value){
    console.log('handle');
    this.setState({
      "popupObj": null
    });

  }  
  
  render() {
    
    return (
      <div className="popup-wrapper">
        <div className="popup-overlay">
  
        </div>
        <div className="popup-main">
          <Script script={this.state.popupObj.consent} handleButton={this.handleButtonClick} />

          {this.state.popupObj.consent.config.selectedOption === "Interested" &&
            <Script script={this.state.popupObj.optin} handleButton={this.handleButtonClick} />
          }

          {this.state.popupObj.optin.config.selectedOption === "Yes" &&
            <Script script={this.state.popupObj.success} handleButton={this.handleButtonClick} />
          }

        </div>
      </div>
    );
  }
  
}

export default Popup;
