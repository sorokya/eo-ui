import type { ReactNode } from 'react';
import classes from './label.module.css';

type LabelProps = {
  /** The id of the element this label is associated with */
  htmlFor?: string;
  /** The text content of the label */
  children: ReactNode;
  /** Additional class name for the label */
  className?: string;
};

export function Label({ htmlFor, children, className = '' }: LabelProps) {
  return (
    <label htmlFor={htmlFor} className={`${classes.label} ${className}`}>
      {children}
    </label>
  );
}
