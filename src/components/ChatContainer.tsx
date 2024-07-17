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
  id: string; // Ensure each message has a unique identifier
  content?: string;
  isUser?: boolean;
  buttons?: Array<{ text: string; onClick: () => void }>;
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
          key={message.id} // Use the unique identifier here
          buttons={message.buttons} // 전달된 buttons 속성을 추가
          content={message.content}
          delay={message.id} // Ensure the delay is set properly if it relies on index
          isUser={message.isUser}
        />
      ))}
      <div ref={messagesEndRef} />
    </StyledChatContainer>
  );
};

export default ChatContainer;
