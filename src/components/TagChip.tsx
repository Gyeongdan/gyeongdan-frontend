import Chip from '@mui/material/Chip';

import color from '@/constants/color';

const TagChip = ({ label }: { label: string }) => {
  return (
    <Chip
      color="primary"
      label={label}
      sx={{
        background: `linear-gradient(${color.gradient_blue_dark}, ${color.gradient_blue_light})`,
        display: 'flex',
      }}
    />
  );
};

export default TagChip;
