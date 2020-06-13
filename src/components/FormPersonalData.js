import React, { useState, useEffect } from 'react'
import { makeStyles } from '@material-ui/core/styles';
import Dialog from '@material-ui/core/Dialog';
import { MuiThemeProvider } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';

export const FormPersonalDetails = (props) => {

    const Continue = e => {
        e.preventDefault()
        props.nextStep()
    }
    const Back = e => {
        e.preventDefault()
        props.prevStep()
    }

    const { values, handleChange } = props

    return (
        <MuiThemeProvider>
            <div>
                <TextField 
                    hintText="Enter Your First Name"
                    label="Occupation"
                    onChange={handleChange('occupation')}
                    defaultValue={values.occupation}
                />
                <br/>
                <TextField 
                    hintText="Enter Your Last Name"
                    label="City"
                    onChange={handleChange('city')}
                    defaultValue={values.city}
                />
                <br/>
                <TextField 
                    hintText="Enter Your Emails"
                    label="Bio"
                    onChange={handleChange('bio')}
                    defaultValue={values.bio}
                />
                <br/>
                <Button 
                    color="false"
                    variant="contained"
                    onClick={Back}
                    className={classes.margin}
                >
                    Back
                </Button>
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
      marginTop: '20px',
    },
  }));