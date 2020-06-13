import React, { useState, useEffect } from 'react'
import ListItemText from '@material-ui/core/ListItemText';
import ListItem from '@material-ui/core/ListItem';
import List from '@material-ui/core/List';
import Button from '@material-ui/core/Button';
import { MuiThemeProvider } from '@material-ui/core/styles';

export const Success = (props) => {

    const {firstName, lastName, email, occupation, city, bio} = props.values

    const Back = e => {
        e.preventDefault()
        props.prevStep()
    }
    return (
        <MuiThemeProvider>
        <div>
            <h1>Thank You For Your Submission</h1>
            <p>You will get an email with further instructions.</p>
        </div>
        </MuiThemeProvider>
    )
}
