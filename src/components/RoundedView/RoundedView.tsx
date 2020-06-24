import React from 'react';
import cn from 'classnames';
import "./RoundedView.css"

const RoundedView = ({ children, className, ...props }: React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement>) => (
  <div className={cn('rounded-view', className)} {...props}>
    {children}
  </div>
);

export default RoundedView;