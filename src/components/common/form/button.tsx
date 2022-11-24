interface Props
  extends React.DetailedHTMLProps<
    React.ButtonHTMLAttributes<HTMLButtonElement>,
    HTMLButtonElement
  > {
  className?: string;
  href?: string;
  variant: "filled" | "outlined";
  color: "primary" | "secondary"|"danger";
  compact?: boolean;
}
const Button: React.FC<Props> = ({
  color,
  className,
  variant,
  children,
  compact,
  ...props
}) => {
  const colors = {
    primary: {
      text: "text-primary-400",
      bg: "bg-primary-400",
      outline: "border-primary-400",
    },
    secondary: {
      text: "text-secondary-400",
      bg: "bg-secondary-400",
      outline: "border-secondary-400",
    },
    danger: {
      text: "text-accent-danger",
      bg: "bg-accent-danger",
      outline: "border-accent-danger",
    }
  };

  let classes = "";
  switch (variant) {
    case "filled":
      classes = `${colors[color].bg} text-white`;
      break;
    case "outlined":
      classes = `${colors[color].outline} ${colors[color].text} border-2`;
      break;
  }

  return (
    <button
      {...props}
      className={`${className} ${classes} rounded-lg  p-3.75 flex justify-center ${!compact?"w-full":"w-fit"} font-display text-sm`}

    >
      {children}
    </button>
  );
};

export default Button;
