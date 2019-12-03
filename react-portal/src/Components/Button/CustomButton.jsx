import React from 'react';
import Button from '@material-ui/core/Button';
import { withStyles } from '@material-ui/core/styles';

const styledBy = (property, mapping) => props => mapping[props[property]];

const styles = {
    root: {
      background: styledBy('color', {
        default: 'linear-gradient(45deg, #000000 30%, #2C3E50 90%)',
        white: 'linear-gradient(315deg, #F8F9D2 0%, #E8DBFC 74%)',
      }),
      borderRadius: 3,
      border: 0,
      color: styledBy('color', {
        default: 'white',
        white: 'black',
      }),
      height: 28,
      width: 70,
      padding: '0 30px',
      boxShadow: styledBy('color', {
        default: '0 3px 5px 2px rgba(255, 105, 135, .3)',
        white: '0 3px 5px 2px rgba(0, 0, 0, 0.24)',
      }),
      textTransform: 'none',
    },
  };

  const StyledButton = withStyles(styles)(({ classes, color, ...other }) => (
    <Button className={classes.root} {...other} />
  ));

  export default function CustomButton(props) {

    const {children , ...other } = props;
    console.log('color',props.color)
    return <StyledButton color={props.color} {...other}>{children}</StyledButton>;
  }