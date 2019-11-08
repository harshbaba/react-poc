import React, {Component} from 'react';
import './Script.css';
//import Button from '../Button/Button';

class Script extends Component{
    constructor(props) {
        super(props);
    }

    handle(type,value) {
        console.log(type,value);
        this.props.handleButton(type,value);
    }

    render() {
        let script = this.props.script;

        return (
            <div className="script-wrap">
                <div className="script-ind">
                    {script.config.title !== "" &&
                        <div className="script-header">
                            <div className="script-title">
                                <h3>{script.config.title}</h3>
                            </div>
                        </div>
                    }

                    <div className="script-content">
                        <p>{script.config.message}</p>
                    </div>

                    {script.config.type ==="consent" &&
                    <div className="script-footer">
                        <button onClick = {this.handle}>Test</button>
                        <button onClick={(e) => this.handle(script.config.type,'Never')}>Never</button>
                        <button onClick={(e) => this.handle(script.config.type,'Not Now')}>Not Now</button>
                        <button onClick={(e) => this.handle(script.config.type,'Interested')}>Interested</button>
                    </div>
                    }

                    {script.config.type ==="optin" &&
                    <div className="script-footer">
                        <button onClick={(e) => this.handle(script.config.type,'Yes')}>Yes</button>
                        <button onClick={(e) => this.handle(script.config.type,'No')}>No</button>
                    </div>
                    }
                </div>
            </div>
        )
    }
}


export default Script;