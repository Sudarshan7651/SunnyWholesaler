const styles = {
  primary: 'button button-primary',
  secondary: 'button button-secondary',
  ghost: 'button button-ghost',
};

function Button({ children, type = 'button', variant = 'primary', onClick, className = '', ...props }) {
  return (
    <button
      type={type}
      className={`${styles[variant] || styles.primary} ${className}`.trim()}
      onClick={onClick}
      {...props}
    >
      {children}
    </button>
  );
}

export default Button;
