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

interface Message {
  id: number;
  content?: string;
  isUser?: boolean;
  buttons?: Array<{ id: number; text: string; onClick: () => void }>;
}

interface ChatContainerProps {
  messages: Message[];
}

const ChatContainer = ({ messages }: ChatContainerProps) => {
  const messagesEndRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages]);

  return (
    <StyledChatContainer>
      {messages.map((message) => (
        <ChatMessage
          key={message.id}
          buttons={message.buttons}
          content={message.content}
          delay={message.id}
          isUser={message.isUser}
        />
      ))}
      <div ref={messagesEndRef} />
    </StyledChatContainer>
  );
};

export default ChatContainer;
