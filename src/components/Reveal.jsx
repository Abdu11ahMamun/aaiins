import { useScrollReveal } from '../hooks/useScrollReveal';

export default function Reveal({ children, delay = 0, className = '' }) {
  const [ref, visible] = useScrollReveal();
  return (
    <div
      ref={ref}
      className={`reveal${visible ? ' visible' : ''}${delay ? ` reveal-delay-${delay}` : ''} ${className}`}
    >
      {children}
    </div>
  );
}
