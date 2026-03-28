import clsx from 'clsx';
import css from './Button.module.css';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary';
  children?: React.ReactNode;
  className?: string;
}

export default function Button({
  children,
  variant = 'primary',
  className,
  ...rest
}: ButtonProps) {
  return (
    <button
      className={clsx(css.btnBase, css[variant], className)}
      {...rest}
    >
      {children}
    </button>
  );
}
