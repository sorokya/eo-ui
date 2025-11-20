import classes from './button.module.css';

type ButtonProps = {
  label: string;
  variant?: 'small' | 'large';
  type?: 'button' | 'submit' | 'reset';
};

export function Button({
  label,
  variant = 'small',
  type = 'button',
}: ButtonProps) {
  return (
    <button
      type={type}
      className={`${classes.button} ${variant === 'large' ? classes.large : ''}`}
    >
      <span>{label}</span>
    </button>
  );
}
