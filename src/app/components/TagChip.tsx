import * as React from 'react';
import Chip from '@mui/material/Chip';

const TagChip = ({ label }: { label: string }) => {
  return (
    <Chip label={label}
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

