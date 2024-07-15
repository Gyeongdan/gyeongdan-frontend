import { Box, Typography } from '@mui/material';

interface HeadlineProps {
  title: string;
  uploadDate: string;
  viewCount: number;
  source: string;
}

const Headline = ({ title, uploadDate, viewCount, source }: HeadlineProps) => {
  return (
    <Box>
      <Typography sx={{ fontSize: '2rem', fontWeight: 'bold', marginBottom: '1rem' }} variant="h1">
        {title}
      </Typography>
      <Box sx={{ display: 'flex', alignItems: 'center', marginBottom: '1rem' }}>
        <Typography sx={{ marginRight: '0.5rem' }} variant="body1">
          {uploadDate} | 조회 {viewCount}회 | {source}
        </Typography>
      </Box>
    </Box>
  );
};

export default Headline;
