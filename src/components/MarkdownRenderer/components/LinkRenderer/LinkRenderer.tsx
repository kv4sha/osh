import React from 'react';

type LinkRendererProps = React.AnchorHTMLAttributes<HTMLAnchorElement>;

function LinkRenderer({ children, ...props }: LinkRendererProps) {
  return (
    <a {...props} target="_blank" rel="noopener noreferrer">
      {children}
    </a>
  );
}

export default LinkRenderer;
