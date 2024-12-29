import { useEffect } from 'react';

export const useReactiveEffect = () => {
  useEffect(() => {
    let rafId: number;

    const handleMouseMove = (e: MouseEvent) => {
      rafId = requestAnimationFrame(() => {
        const elements = document.querySelectorAll('.reactive-element');
        
        elements.forEach(element => {
          const rect = element.getBoundingClientRect();
          const x = e.clientX - rect.left;
          const y = e.clientY - rect.top;
          
          element.style.setProperty('--mouse-x', `${x}px`);
          element.style.setProperty('--mouse-y', `${y}px`);
        });
      });
    };

    document.addEventListener('mousemove', handleMouseMove);
    
    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
      if (rafId) cancelAnimationFrame(rafId);
    };
  }, []);
}; 