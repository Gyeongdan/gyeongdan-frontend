'use client';

import React, { useEffect, useRef } from 'react';

import styled from '@emotion/styled';
import { Box } from '@mui/material';

import ChatMessage from './ChatMessage';

const StyledChatContainer = styled(Box)`
  flex: 1;
  width: 100%;
  max-width: 600px;
  margin-bottom: 2rem;
  overflow-y: auto;
  max-height: calc(100vh - 200px);
  padding: 1rem;
  border-radius: 10px;
  background: #f9f9f9;
  box-shadow: 0px 4px 12px rgba(0, 0, 0, 0.1);
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
