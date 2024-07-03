import { Typography, Box } from '@mui/material';
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
      <Box sx={{ display: 'flex', alignItems: 'center', marginBottom: '1rem' }}>
        <Typography variant="body1" sx={{ marginRight: '0.5rem' }}>
          {uploadDate} | 조회 {viewCount}회 | {source}
        </Typography>
        <Box sx={{ display: 'flex', gap: '0.5rem' }}>
          {categories.map((category) => (
            <TagChip key={category} label={category} />
          ))}
        </Box>
      </Box>
    </Box>
  );
};

export default Headline;
