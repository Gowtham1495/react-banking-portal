import React from 'react';
import Button from '@material-ui/core/Button';


export default class CustomButton extends React.Component {

    render() {
        var buttonStyle = {
            padding: this.props.padding,
            background: "linear-gradient(45deg, #000000 30%, #2C3E50 90%)",
            borderRadius: "5px",
            color: "white"
        }
        return (
            <div style={buttonStyle}>
                <Button color={this.props.color} variant="outlined" onClick={this.props.onClick}>{this.props.label}</Button>
            </div>
        )
    }
}