import React, { useState } from 'react';
import { styled } from '@mui/material/styles';
import InputBase from '@mui/material/InputBase';
import SearchIcon from '@mui/icons-material/Search';
import IconButton from '@mui/material/IconButton';

const SearchContainer = styled('div')(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  width: '100%',
  maxWidth: '600px',
  margin: '0 auto',
  padding: '10px 0',
  position: 'relative',
  zIndex: 1200,
}));

const SearchInput = styled(InputBase)(({ theme }) => ({
  flex: 1,
  fontFamily: 'Comfortaa, sans-serif',
  fontWeight: 'bold',
  '& .MuiInputBase-input': {
    border: '1px solid #ccc',
    borderRight: 'none',
    borderRadius: '20px 0 0 20px',
    padding: '10px 16px',
    width: '100%',
    backgroundColor: 'white',
    boxShadow: '0 2px 5px rgba(0,0,0,0.1)',
    '&:focus': {
      outline: 'none',
      borderColor: theme.palette.primary.main,
      boxShadow: '0 2px 8px rgba(0,0,0,0.15)',
    },
  },
}));

const SearchButton = styled(IconButton)(({ theme }) => ({
  padding: '10px 20px',
  backgroundColor: theme.palette.primary.main,
  borderRadius: '0 20px 20px 0',
  color: 'white',
  boxShadow: '0 2px 5px rgba(0,0,0,0.1)',
  '&:hover': {
    backgroundColor: theme.palette.primary.dark,
  },
}));

const SearchBar: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');

  const handleSearch = (event: React.FormEvent) => {
    event.preventDefault();
    console.log('Searching for:', searchTerm);
  };

  return (
    <form onSubmit={handleSearch}>
      <SearchContainer>
        <SearchInput
          placeholder="Search…"
          inputProps={{ 'aria-label': 'search' }}
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        <SearchButton type="submit" aria-label="search">
          <SearchIcon />
        </SearchButton>
      </SearchContainer>
    </form>
  );
};

export default SearchBar;
