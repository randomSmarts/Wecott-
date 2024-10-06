import React from 'react';
import { styled } from '@mui/material/styles';
import SearchBar from './components/ui/searchbar';
import SidebarComponent from './components/ui/sidebar';

const AppContainer = styled('div')({
  display: 'flex',
  flexDirection: 'column',
  minHeight: '100vh',
});

const TopBar = styled('div')({
  position: 'fixed',
  top: 0,
  left: 0,
  right: 0,
  zIndex: 1100,
  padding: '10px 20px',
  backgroundColor: 'transparent',
});

const ContentWrapper = styled('div')({
  display: 'flex',
  flexGrow: 1,
  marginTop: '64px', // Adjust this value based on your TopBar height
});

const MainContent = styled('main')({
  flexGrow: 1,
  marginLeft: '250px', // Width of the sidebar
  padding: '20px',
});

const StyledSidebar = styled(SidebarComponent)({
  marginTop: '64px', // Same as ContentWrapper marginTop
});

export default function App() {
  return (
    <AppContainer>
      <TopBar>
        <SearchBar />
      </TopBar>
      <ContentWrapper>
        <StyledSidebar />
        <MainContent>
          {/* Add your main content here */}
        </MainContent>
      </ContentWrapper>
    </AppContainer>
  );
}

