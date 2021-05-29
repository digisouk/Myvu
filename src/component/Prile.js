import React from 'react';
import PropTypes from 'prop-types';
import SwipeableViews from 'react-swipeable-views';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import TextField from '@material-ui/core/TextField';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import Button from '@material-ui/core/Button';


function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`full-width-tabpanel-${index}`}
      aria-labelledby={`full-width-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box p={3}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.any.isRequired,
  value: PropTypes.any.isRequired,
};

function a11yProps(index) {
  return {
    id: `full-width-tab-${index}`,
    'aria-controls': `full-width-tabpanel-${index}`,
  };
}

const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: theme.palette.background.paper,
    width: 500,
    position: "absolute gi!important",
  left: "34%",
  top: "10%",
  width: "60vw",
  
  },
}));

export default function FullWidthTabs() {
  const classes = useStyles();
  const theme = useTheme();
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const handleChangeIndex = (index) => {
    setValue(index);
  };

  return (
    <div className={classes.root}>
      <AppBar position="static" color="default">
        <Tabs
          value={value}
          onChange={handleChange}
          indicatorColor="primary"
          textColor="primary"
          variant="fullWidth"
          aria-label="full width tabs example"
        >
          <Tab label="Personal Information" {...a11yProps(0)} />
          <Tab label="My Reviews" {...a11yProps(1)} />
          <Tab label="Settings" {...a11yProps(2)} />
        </Tabs>
      </AppBar>
      <SwipeableViews
        axis={theme.direction === 'rtl' ? 'x-reverse' : 'x'}
        index={value}
        onChangeIndex={handleChangeIndex}
      >
        <TabPanel value={value} index={0} dir={theme.direction}>
        <h2 style={{position: 'absolute',top: '7%', left:'50px',}}>Personal Information</h2>
    <div style ={{display:"flex",flexDirection:"column", paddingTop: '100px'}}>
  <div  style={{display:'flex',justifyContent:"space-around"}}>
  <TextField
              variant="outlined"
              margin="normal"
              required
              defaultValue="James Charles"
              name="password"
              label="Name"
              type="name"
              id="name"
             
            />
	   <TextField
              variant="outlined"
              margin="normal"
              required
              defaultValue="jamescharles@gmail.com"
              name="password"
              label="E-mail ID"
              type="name"
              id="name"
              
            /> 
            <TextField
             variant="outlined"
             margin="normal"
             required
             defaultValue="ABC Aviation - Electrical Engineer"
             name="Job Title"
             label="Job Title"
             type="name"
             id="name"
            
           />
  </div>
  <div  style={{display:'flex'}}>
      <div style={{margin:'35px'}}>
  <TextField
              variant="outlined"
              margin="normal"
              required
              defaultValue="https://www.linkedin.com/james"
              name="profile"
              label="Public Profile"
              type="name"
              id="name"
              
            />
            </div>
            <div style={{margin:'36px', position:'relative', left:'13px'}}>
	  <TextField
              variant="outlined"
              margin="normal"
              required
              defaultValue="Dallas, TX - United States"
              name="password"
              label="City"
              type="name"
              id="name"
              className="city"
              
            /> 
  </div>
  </div>

</div>
  {/*button  */}
  <Button
              type="submit"
              variant="contained"
              color="primary"
              style={{marginTop:"15%", marginLeft:"60%"}}
            >
              Save
          </Button>
        </TabPanel>
        <TabPanel value={value} index={1} dir={theme.direction}>
        My Reviews
        </TabPanel>
        <TabPanel value={value} index={2} dir={theme.direction}>
        Settings
        </TabPanel>
      </SwipeableViews>
    </div>
  );
}



