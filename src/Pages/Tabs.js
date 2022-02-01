import { Paper, Tab, Tabs, Box, Typography } from '@mui/material'
import React, { useState } from 'react'
import Login from '../Auth/Login';
import Signup from '../Auth/Signup';

const Reg = () => {
  const [value, setValue] = useState(0);
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  function TabPanel(props) {
    const { children, value, index, ...other } = props;

    return (
      <div
        role="tabpanel"
        hidden={value !== index}
        id={`simple-tabpanel-${index}`}
        aria-labelledby={`simple-tab-${index}`}
        {...other}
      >
        {value === index && (
          <Box >
            <Typography>{children}</Typography>
          </Box>
        )}
      </div>
    );
  }
  return (
    <Paper sx={{
      width: 500,
      margin: "20px auto"
    }}
      elevation={20}>
      <Tabs
        value={value}
        indicatorColor='primary'
        textColor='primary'
        onChange={handleChange}
        aria-label="basic tabs example"
        centered
      >
        <Tab label="Sign In" />

        <Tab label="Sign up" />
      </Tabs>
      <TabPanel value={value} index={0}>
        <Login handleChange={handleChange} />
      </TabPanel>
      <TabPanel value={value} index={1}>
        <Signup />
      </TabPanel>
    </Paper>

  )
}

export default Reg
