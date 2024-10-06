import React from 'react';
import { styled } from '@mui/system';
import { Tabs, Tab, Box } from '@mui/material';

const Sidebar = styled(Box)({
  position: 'fixed',
  left: 0,
  top: 0,
  bottom: 0,
  width: '250px',
  backgroundColor: '#f5f5f5',
  padding: '20px',
  boxShadow: '2px 0 5px rgba(0,0,0,0.1)',
});

const StyledTabs = styled(Tabs)({
  '& .MuiTab-root': {
    fontFamily: 'Comfortaa, sans-serif',
    fontWeight: 'bold',
    color: '#333',
  },
});

const SidebarComponent: React.FC = () => {
  const [value, setValue] = React.useState(0);

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  return (
    <Sidebar>
      <StyledTabs
        orientation="vertical"
        value={value}
        onChange={handleChange}
        aria-label="Sidebar navigation"
      >
        <Tab label="Post" />
        <Tab label="My Cotts" />
        <Tab label="Categories" />
      </StyledTabs>
    </Sidebar>
  );
};

export default SidebarComponent;
