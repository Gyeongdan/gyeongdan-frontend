import * as React from 'react';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import TagChip from './TagChip';

interface HeadlineProps {
  title: string;
  uploadDate: string;
  viewCount: number;
  source: string;
  categories: string[];
}

const Headline: React.FC<HeadlineProps> = ({ title, uploadDate, viewCount, source, categories }) => {
  return (
    <Box>
      <Typography variant="h1" sx={{ fontSize: '2rem', fontWeight: 'bold', marginBottom: '1rem' }}>
        {title}
      </Typography>
      <Typography variant="body1" sx={{ marginBottom: '1rem' }}>
        {uploadDate} | 조회 {viewCount}회 | {source}
      </Typography>
      <Box sx={{ display: 'flex', gap: '0.5rem' }}>
        {categories.map((category) => (
          <TagChip key={category} label={category} />
        ))}
      </Box>
    </Box>
  );
};

export default Headline;
