import Chip from '@mui/material/Chip';
import { useTheme } from '@mui/material/styles';

const TagChip = ({ label }: { label: string }) => {
  const theme = useTheme();

  return (
    <Chip
      label={label}
      sx={{
        color: '#000000',
        display: 'flex',
        alignItems: 'center',
        backgroundColor: theme.palette.primary.main,
      }}
    />
  );
};

export default TagChip;
