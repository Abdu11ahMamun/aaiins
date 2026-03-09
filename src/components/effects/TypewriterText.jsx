import { useState, useEffect } from 'react';

function TypewriterText({ phrases = ['Intelligent Systems', 'Scientific Impact', 'Research Excellence', 'Applied AI'] }) {
  const [phraseIndex, setphraseIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [displayText, setDisplayText] = useState('');

  useEffect(() => {
    const currentPhrase = phrases[phraseIndex];
    
    const timeout = setTimeout(() => {
      if (!isDeleting) {
        if (charIndex < currentPhrase.length) {
          setDisplayText(currentPhrase.slice(0, charIndex + 1));
          setCharIndex(charIndex + 1);
        } else {
          setTimeout(() => setIsDeleting(true), 1500);
        }
      } else {
        if (charIndex > 0) {
          setDisplayText(currentPhrase.slice(0, charIndex - 1));
          setCharIndex(charIndex - 1);
        } else {
          setIsDeleting(false);
          setphraseIndex((phraseIndex + 1) % phrases.length);
        }
      }
    }, isDeleting ? 40 : 75);

    return () => clearTimeout(timeout);
  }, [charIndex, isDeleting, phraseIndex, phrases]);

  return (
    <span className="inline-block">
      {displayText}
      <span className="inline-block border-r-[3px] border-[#36e1c6] ml-0.5 animate-[blink_0.8s_step-end_infinite]">
        &nbsp;
      </span>
    </span>
  );
}

export default TypewriterText;
