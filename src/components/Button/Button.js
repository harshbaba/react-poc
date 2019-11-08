import React, {Component} from 'react';

class PopupButton extends Component {
    constructor(props) {
      super(props);
      console.log(this.props);
    }

    click = () => {
        this.props.parentMethod();
    }
    render() {
        return (
            <button onClick={this.click}>Never</button>
        )
    }
}

export default PopupButton;