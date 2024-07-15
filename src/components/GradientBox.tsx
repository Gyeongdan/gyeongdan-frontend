'use client';

import { Box, BoxProps, styled } from '@mui/material';

interface GradientBoxProps extends BoxProps {
  children?: React.ReactNode;
}

const StyledGradientBox = styled(Box)({
  background: 'linear-gradient(rgba(29, 112, 241, 0), rgba(26, 197, 251, 1))',
  opacity: 0.2,
  height: '100%',
  width: '100%',
});

const GradientBox = ({ children, ...props }: GradientBoxProps) => {
  return (
    <StyledGradientBox className={props.className} sx={props.sx}>
      {children}
    </StyledGradientBox>
  );
};

export default GradientBox;
