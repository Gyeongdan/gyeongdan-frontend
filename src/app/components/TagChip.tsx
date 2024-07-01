import * as React from 'react';
import Chip from '@mui/material/Chip';

const TagChip = () => {
  return (
    <Chip label="경제"
      sx={{
        color: '#000000',
        display: 'flex',
        alignItems: 'center',
        backgroundColor: '#D8D1C5',
      }}
        />
  );
};

export default TagChip;

