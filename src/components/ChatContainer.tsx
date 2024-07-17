'use client';

import React, { useEffect, useRef } from 'react';

import styled from '@emotion/styled';
import { Box } from '@mui/material';

import ChatMessage from './ChatMessage';

const StyledChatContainer = styled(Box)`
  flex: 1;
  width: 100%;
  max-width: 750px;
  overflow-y: auto;
  max-height: calc(100vh - 200px);
`;

interface ChatContainerProps {
  messages: Array<{ content: string; isUser: boolean }>;
}

const ChatContainer = ({ messages }: ChatContainerProps) => {
  const messagesEndRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages]);

  return (
    <StyledChatContainer>
      {messages.map((message, index) => (
        <ChatMessage key={index} content={message.content} delay={index * 0.1} isUser={message.isUser} />
      ))}
      <div ref={messagesEndRef} />
    </StyledChatContainer>
  );
};

export default ChatContainer;
