import React from 'react';
import TextField from '@material-ui/core/TextField';


export default class CustomTextField extends React.Component {
    render() {
        var textFieldStyle = {
            padding: "10px"
        }
        return (
            <div style={textFieldStyle}>
                <TextField id="outlined-basic" type={this.props.type} label={this.props.label} variant="outlined" />
            </div>
        )
    }
}