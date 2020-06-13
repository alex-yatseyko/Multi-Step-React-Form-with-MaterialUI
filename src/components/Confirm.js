import React, { useState, useEffect } from 'react'
// import { List } from 'material-ui/List'
import ListItemText from '@material-ui/core/ListItemText';
import ListItem from '@material-ui/core/ListItem';
import List from '@material-ui/core/List';
import Button from '@material-ui/core/Button';
import { MuiThemeProvider } from '@material-ui/core/styles';

export const Confirm = (props) => {
    const {firstName, lastName, email, occupation, city, bio} = props.values

    const Continue = e => {
        e.preventDefault()
        // PROCESS FORM //
        props.nextStep()
    }

    const Back = e => {
        e.preventDefault()
        props.prevStep()
    }

    return (
        <MuiThemeProvider>
        <div>
            <p>Confirm</p> 
            <List component="nav">
                <ListItem button>
                    <ListItemText 
                        primary="Name" 
                        secondary={firstName}
                    />
                </ListItem>
                <ListItem button>
                    <ListItemText 
                        primary="Last Name" 
                        secondary={lastName}
                    />
                </ListItem>
                <ListItem button>
                    <ListItemText 
                        primary="Email" 
                        secondary={email}
                    />
                </ListItem>
                <ListItem button>
                    <ListItemText 
                        primary="Occupation" 
                        secondary={occupation}
                    />
                </ListItem>
                <ListItem button>
                    <ListItemText 
                        primary="City" 
                        secondary={city}
                    />
                </ListItem>
                <ListItem button>
                    <ListItemText 
                        primary="Bio" 
                        secondary={bio}
                    />
                </ListItem>
            </List>
            <Button 
                    color="false"
                    variant="contained"
                    onClick={Back}
                >
                    Back
                </Button>
            <Button 
                    color="primary"
                    variant="contained"
                    onClick={Continue}
                    // className={classes.margin}
                >
                    Confirm
            </Button>
        </div>
        </MuiThemeProvider>
    )
}
