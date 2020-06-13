import React, { useState, useEffect } from 'react'
import { makeStyles } from '@material-ui/core/styles';
import Dialog from '@material-ui/core/Dialog';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
// import MenuIcon from '@material-ui/core/MenuIcon';
// import MenuIcon from '@material-ui/icons/Menu';
import { MuiThemeProvider } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';

export const FormUserDetails = (props) => {

    const Continue = e => {
        e.preventDefault()
        props.nextStep()
    }

    const { values, handleChange } = props

    return (
        <MuiThemeProvider>
            <div>
                <TextField 
                    hintText="Enter Your First Name"
                    label="First Name"
                    onChange={handleChange('firstName')}
                    defaultValue={values.firstName}
                />
                <br/>
                <TextField 
                    hintText="Enter Your Last Name"
                    label="Last Name"
                    onChange={handleChange('lastName')}
                    defaultValue={values.lastName}
                />
                <br/>
                <TextField 
                    hintText="Enter Your Emails"
                    label="Email"
                    onChange={handleChange('email')}
                    defaultValue={values.email}
                />
                <br/>
                <Button 
                    color="primary"
                    variant="contained"
                    onClick={Continue}
                    className={classes.margin}
                >
                    Next
                </Button>
            </div>
        </MuiThemeProvider>
    )
}

const classes = makeStyles((theme) => ({
    margin: {
      margin: theme.spacing(1),
    },
  }));