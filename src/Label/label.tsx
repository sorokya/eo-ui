import type { ReactNode } from 'react';
import classes from './label.module.css';

type LabelProps = {
  /** The id of the element this label is associated with */
  htmlFor?: string;
  /** The text content of the label */
  children: ReactNode;
};

export function Label({ htmlFor, children }: LabelProps) {
  return (
    <label htmlFor={htmlFor} className={classes.label}>
      {children}
    </label>
  );
}
