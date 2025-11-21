import type { ChangeEvent } from 'react';
import classes from './checkbox.module.css';

type CheckboxProps = {
  /** Optional id for the checkbox */
  id?: string;
  /** Whether the checkbox is checked */
  checked?: boolean;
  /** onChange event handler */
  onChange?: (e: ChangeEvent<HTMLInputElement>) => void;
  /** Additional class name for the checkbox */
  className?: string;
};

export function Checkbox({
  id,
  checked = false,
  onChange = () => {},
  className = '',
}: CheckboxProps) {
  return (
    <div
      className={`${classes.checkbox} ${checked ? classes.checked : ''} ${className}`}
    >
      <input type="checkbox" id={id} checked={checked} onChange={onChange} />
    </div>
  );
}
