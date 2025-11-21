import classes from './button.module.css';

type ButtonProps = {
  /**
   * The string content of the button
   */
  children: string;
  /**
   * The variant of the button, either 'small' or 'large'
   * @default 'small'
   */
  variant?: 'small' | 'large';
  /** The HTML button type attribute
   * @default 'button'
   */
  type?: 'button' | 'submit' | 'reset';
  /** Optional click handler */
  onClick?: () => void;
  /** Additional class name for the button */
  className?: string;
};

export function Button({
  children,
  variant = 'small',
  type = 'button',
  onClick = () => {},
  className = '',
}: ButtonProps) {
  return (
    <button
      type={type}
      className={`${classes.button} ${variant === 'large' ? classes.large : ''} ${className}`}
      onClick={onClick}
    >
      <span>{children}</span>
    </button>
  );
}
