import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import SearchIcon from '@material-ui/icons/Search';
import InputBase from '@material-ui/core/InputBase';
import PermIdentityIcon from '@material-ui/icons/PermIdentity';
import IconButton from '@material-ui/core/IconButton';
import './Nav.css';



const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    backgroundColor:1473e6,
  },
  search: {
    position: 'relative',
    left:'100px',
    borderRadius: theme.shape.borderRadius,
    backgroundColor:"white",
    marginLeft: 0,
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      marginLeft: theme.spacing(1),
      width: 'auto',
    },
  },
  searchIcon: {
    padding: theme.spacing(0, 2),
    height: '100%',
    position: 'absolute',
    pointerEvents: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  
    
  },
   inputRoot: {
    color: 'inherit',
  },
  inputInput: {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
    transition: theme.transitions.create('width'),
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      width: '50ch',
    },
  },
}));

export default function DenseAppBar() {
  const classes = useStyles();
  const [setAnchorEl] = React.useState(null);
  const handleMenu = (event) => {
    setAnchorEl(event.currentTarget);
  };

  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar variant="dense">
          <Typography variant="h6" color="inherit">
            LOGO
          </Typography>

          {/* serach */}
          <div className={classes.search}>
            <div className={classes.searchIcon}>
              <SearchIcon style={{color: "1473e6"}}/>
            </div>
            <InputBase style={{color: "gray"}}
              placeholder="Search for products"
              classes={{
                root: classes.inputRoot,
                input: classes.inputInput,
              }}
              inputProps={{ 'aria-label': 'search' }}
            />
           
          </div>
          <Typography variant="h8" color="inherit" style={{position: "relative", left:"45%"}}>
          Login
          </Typography>
          <IconButton
                aria-label="account of current user"
                aria-controls="menu-appbar"
                aria-haspopup="true"
                onClick={handleMenu}
                color="inherit"
                style={{position: "relative", left:"50%"}}>
                <PermIdentityIcon />
              </IconButton>

        </Toolbar>
      </AppBar>
    </div>
  );
}
