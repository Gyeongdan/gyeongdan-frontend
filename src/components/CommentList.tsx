import React from 'react';
import { useInView } from 'react-intersection-observer';

import { Box } from '@mui/material';

import CommentCard from '@/components/CommentCard';

interface CommentListProps {
  comments: { id: string; content: string }[];
  isStroke?: boolean;
  isFilled?: boolean;
  isCharacter?: boolean;
  isChat?: boolean;
}

interface CommentItemProps {
  comment: { id: string; content: string };
  index: number;
  isCharacter?: boolean;
  isChat?: boolean;
  isStroke?: boolean;
  isFilled?: boolean;
}

const CommentItem = ({ comment, index, isCharacter, isChat, isStroke, isFilled }: CommentItemProps) => {
  const { ref, inView } = useInView({
    threshold: 0.1,
  });

  return (
    <Box
      ref={ref}
      mb={index === 0 ? 0 : 1.3}
      sx={{
        opacity: inView ? 1 : 0,
        transform: inView ? 'translateY(0)' : 'translateY(20px)',
        transition: 'opacity 0.6s ease-out, transform 0.6s ease-out',
      }}
    >
      <CommentCard
        animate
        content={comment.content}
        isCharacter={isCharacter && index === 0}
        isChat={isChat}
        isFilled={isFilled}
        isStroke={isStroke}
      />
    </Box>
  );
};

const CommentList = ({ comments, isCharacter, isChat, isStroke, isFilled }: CommentListProps) => {
  return (
    <div>
      {comments.map((comment, index) => (
        <CommentItem
          key={comment.id}
          comment={comment}
          index={index}
          isCharacter={isCharacter}
          isChat={isChat}
          isFilled={isFilled}
          isStroke={isStroke}
        />
      ))}
    </div>
  );
};

export default CommentList;
