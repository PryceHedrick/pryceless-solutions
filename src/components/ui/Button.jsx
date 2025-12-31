import { Link } from 'react-router-dom';

const Button = ({
  children,
  variant = 'primary',
  size = 'md',
  href,
  to,
  className = '',
  ...props
}) => {
  const baseStyles = 'inline-flex items-center justify-center font-semibold rounded-lg transition-all duration-300 ease-out hover:-translate-y-0.5 active:scale-[0.98] focus:outline-none focus:ring-2';

  const variants = {
    primary: 'bg-accent hover:bg-accent-dark text-white focus:ring-accent/50 hover:shadow-lg',
    secondary: 'bg-primary hover:bg-primary-light text-white focus:ring-primary/50 hover:shadow-lg',
    outline: 'bg-transparent border-2 border-primary hover:bg-primary text-primary hover:text-white focus:ring-primary/50',
    'outline-white': 'bg-transparent border-2 border-white hover:bg-white text-white hover:text-primary focus:ring-white/50',
    ghost: 'bg-transparent hover:bg-primary/10 text-primary focus:ring-primary/50',
  };

  const sizes = {
    sm: 'px-4 py-2 text-sm',
    md: 'px-6 py-3 text-base',
    lg: 'px-8 py-4 text-lg',
  };

  const classes = `${baseStyles} ${variants[variant]} ${sizes[size]} ${className}`;

  if (to) {
    return (
      <Link to={to} className={classes} {...props}>
        {children}
      </Link>
    );
  }

  if (href) {
    return (
      <a href={href} className={classes} {...props}>
        {children}
      </a>
    );
  }

  return (
    <button className={classes} {...props}>
      {children}
    </button>
  );
};

export default Button;
