import React, {Component} from 'react';
import './Script.css';
//import Button from '../Button/Button';

class Script extends Component{
    handleClick(type, value){
        this.props.handleButtonClick(type, value);
    }

    render() {
        let script = this.props.script;

        return (
            <div className={"script-wrap " + (script.isSelected ? 'selected' : 'not-selected')}>
                <div className="script-ind">
                    {script.title !== "" &&
                        <div className="script-header">
                            <div className="script-title">
                                <h3>{script.title}</h3>
                            </div>
                        </div>
                    }

                    <div className="script-content">
                        <p>{script.message}</p>
                    </div>

                    {script.type ==="consent" && //script.isSelected === false &&
                    <div className="script-footer">
                        <button onClick={this.handleClick.bind(this, script.type,"Never")}>Never</button>
                        <button onClick={this.handleClick.bind(this, script.type,"Not Now")}>Not Now</button>
                        <button onClick={this.handleClick.bind(this, script.type,"Interested")}>Interested</button>
                    </div>
                    }

                    {script.type ==="optin" &&
                    <div className="script-footer">
                        <button onClick={this.handleClick.bind(this, script.type,'Yes')}>Yes</button>
                        <button onClick={this.handleClick.bind(this, script.type,'No')}>No</button>
                    </div>
                    }
                </div>
            </div>
        )
    }
}


export default Script;