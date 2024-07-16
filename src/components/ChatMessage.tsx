'use client';

import React from 'react';

import { css, keyframes } from '@emotion/react';
import styled from '@emotion/styled';
import { Box } from '@mui/material';

import CommentCard from '@/components/CommentCard';

const fadeInUp = keyframes`
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`;

const AnimatedBox = styled(Box)<{ delay: number }>`
  animation: ${fadeInUp} 0.6s ease-out;
  animation-delay: ${(props) => props.delay}s;
  animation-fill-mode: both;
`;

interface ChatMessageProps {
  content: string;
  isUser: boolean;
  delay: number;
}

const ChatMessage = ({ content, isUser, delay }: ChatMessageProps) => {
  return (
    <AnimatedBox
      delay={delay}
      sx={{ display: 'flex', justifyContent: isUser ? 'flex-end' : 'flex-start', marginY: '0.5rem' }}
    >
      <CommentCard isStroke content={content} isCharacter={!isUser} />
    </AnimatedBox>
  );
};

export default ChatMessage;
