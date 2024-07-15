import { Box, Typography } from '@mui/material';

interface HeadlineProps {
  title: string;
  uploadDate: string;
  viewCount: number;
  source: string;
}

const Headline = ({ title, uploadDate, viewCount, source }:HeadlineProps) => {
  return (
    <Box>
      <Typography variant="h1" sx={{ fontSize: '2rem', fontWeight: 'bold', marginBottom: '1rem' }}>
        {title}
      </Typography>
      <Box sx={{ display: 'flex', alignItems: 'center', marginBottom: '1rem' }}>
        <Typography variant="body1" sx={{ marginRight: '0.5rem' }}>
          {uploadDate} | 조회 {viewCount}회 | {source}
        </Typography>
      </Box>
    </Box>
  );
};

export default Headline;
