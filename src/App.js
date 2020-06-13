import React from 'react';
import logo from './logo.svg';
import './App.css';
import { UserForm } from './components/UserForm';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';


function App() {
  return (
    <div className="App">
                 <AppBar position="static">
                <Toolbar>
                    <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
                    {/* <MenuIcon /> */}
                    </IconButton>
                    <Typography variant="h6" className={classes.title}>
                    FormUserDetails
                    </Typography>
                    <Button color="inherit">Login</Button>
                </Toolbar>
                </AppBar>
      <UserForm />
    </div>
  );
}

const classes = makeStyles((theme) => ({
    root: {
      flexGrow: 1,
    },
    menuButton: {
      marginRight: theme.spacing(2),
    },
    title: {
      flexGrow: 1,
    },
  }));

export default App;
