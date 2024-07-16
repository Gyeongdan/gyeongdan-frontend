'use client';

import { Box, BoxProps, styled } from '@mui/material';

interface GradientBoxProps extends BoxProps {
  children?: React.ReactNode;
}

const StyledGradientBox = styled(Box)({
  position: 'relative',
  '&::before': {
    content: '""',
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    background: 'linear-gradient(to bottom, rgba(29, 112, 241, 0), rgba(26, 197, 251, 1))',
    opacity: 0.2,
    zIndex: -1,
  },
});

const GradientBox = ({ children, ...props }: GradientBoxProps) => {
  return (
    <StyledGradientBox className={props.className} sx={props.sx}>
      {children}
    </StyledGradientBox>
  );
};

export default GradientBox;
