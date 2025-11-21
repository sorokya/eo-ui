import type { ChangeEventHandler } from 'react';
import classes from './text-box.module.css';

type TextBoxProps = {
  /** Optional id for the text box */
  id?: string;
  /** Type of the text box, either 'text' or 'password' */
  type?: 'text' | 'password';
  /** Value of the text box */
  value?: string;
  /** onChange event handler */
  onChange?: ChangeEventHandler<HTMLInputElement>;
  /** Background opacity of the text box */
  backgroundOpacity?: number;
  /** Padding inside the text box */
  padding?: string;
  /** Additional class name for the text box */
  className?: string;
};

export function TextBox({
  id,
  type = 'text',
  value = '',
  onChange = () => {},
  backgroundOpacity = 0.4,
  padding = '4px',
  className = '',
}: TextBoxProps) {
  return (
    <input
      id={id}
      className={`${classes['text-box']} ${className}`}
      type={type}
      value={value}
      onChange={onChange}
      style={
        {
          '--eo-ui-text-box-background-opacity': backgroundOpacity,
          '--eo-ui-text-box-padding': padding,
        } as React.CSSProperties
      }
    />
  );
}
