import React, { useState } from 'react';

import { createMuiTheme, makeStyles, ThemeProvider } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import { grey } from '@material-ui/core/colors';

import Backgrounds from '../Backgrounds/Backgrounds';

const useStyles = makeStyles((theme) => ({
  margin: {
    margin: theme.spacing(1),
  },
}));

const theme = createMuiTheme({
  palette: {
    primary: grey,
  },
});

export default function Buttons(props) {
  const classes = useStyles();

  const [text] = useState(props.text);
  const [turi] = useState(props.turi);

  const letsGo = () => {
  	document.querySelector('.background').addClass('.bgAnim');
  	document.querySelector('.theWay').addClass('.twAnim');
  	document.querySelector('.theTowers').addClass('.ttAnim');
  	document.querySelector('.theMoon').addClass('.tmAnim');
  	document.querySelector('.theClouds').addClass('.tcAnim');
  	document.querySelector('.theLittleTowers').addClass('.tltAnim');
  }

  return (
    <div>
      <ThemeProvider theme={theme}>
        <Button onClick={letsGo} variant="contained" color="primary" className={classes.margin + `${turi} whiteBg`}>
        {text}
        </Button>
      </ThemeProvider>
    </div>
  );
}