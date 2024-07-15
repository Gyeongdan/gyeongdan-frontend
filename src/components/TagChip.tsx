import Chip from '@mui/material/Chip';
import color from '@/constants/color';

const TagChip = ({ label }: { label: string }) => {
  return (
    <Chip
      label={label}
      color="primary"
      sx={{
        background: `linear-gradient(${color.gradient_blue_dark}, ${color.gradient_blue_light})`,
        display: 'flex',
        alignItems: 'center',
      }}
    />
  );
};

export default TagChip;
