import React from 'react';

import { Box } from '@mui/material';

import CommentCard from '@/components/CommentCard';

interface CommentListProps {
  comments: { id: string; content: string }[];
  isStroke?: boolean;
  isFilled?: boolean;
  isCharacter?: boolean;
  isChat?: boolean;
}

const CommentList = ({ comments, isCharacter, isChat, isStroke, isFilled }: CommentListProps) => {
  return (
    <div>
      {comments.map((comment, index) => (
        <Box key={comment.id} mb={index === 0 ? 0 : 1.3}>
          <CommentCard
            content={comment.content}
            isCharacter={isCharacter && index === 0}
            isChat={isChat}
            isFilled={isFilled}
            isStroke={isStroke}
          />
        </Box>
      ))}
    </div>
  );
};

export default CommentList;
