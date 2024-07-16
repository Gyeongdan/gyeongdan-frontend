'use client';

import React from 'react';

import { Tooltip, tooltipClasses, TooltipProps } from '@mui/material';
import { styled } from '@mui/system';

const ColorTooltip = styled(({ className, title, arrow, placement, children }: TooltipProps) => (
  <Tooltip arrow={arrow} classes={{ popper: className }} placement={placement} title={title}>
    {children}
  </Tooltip>
))(() => ({
  [`& .${tooltipClasses.tooltip}`]: {
    backgroundColor: 'white',
    color: 'black',
    fontSize: 14,
    padding: '10px 15px',
    borderRadius: '4px',
    fontFamily: 'GmarketSansMedium',
  },
  [`& .${tooltipClasses.arrow}`]: {
    '&::before': {
      backgroundColor: 'white',
    },
  },
}));

export default ColorTooltip;
