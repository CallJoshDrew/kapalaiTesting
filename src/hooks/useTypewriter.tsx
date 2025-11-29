import { useState, useEffect } from 'react';

interface UseTypewriterProps {
  text: string;
  speed?: number;
  delay?: number;
  trigger?: boolean;
}

export const useTypewriter = ({ text, speed = 50, delay = 0, trigger = true }: UseTypewriterProps) => {
  const [displayText, setDisplayText] = useState('');
  const [isComplete, setIsComplete] = useState(false);

  useEffect(() => {
    if (!trigger) return;
    
    let timeoutId: NodeJS.Timeout;
    
    // Reset states when trigger changes
    setDisplayText('');
    setIsComplete(false);
    
    const startTyping = () => {
      let index = 0;
      const typing = () => {
        if (index < text.length) {
          setDisplayText(text.slice(0, index + 1));
          index++;
          timeoutId = setTimeout(typing, speed);
        } else {
          setIsComplete(true);
        }
      };
      typing();
    };

    if (delay > 0) {
      timeoutId = setTimeout(startTyping, delay);
    } else {
      startTyping();
    }

    return () => {
      if (timeoutId) {
        clearTimeout(timeoutId);
      }
    };
  }, [text, speed, delay, trigger]);

  return { displayText, isComplete };
};