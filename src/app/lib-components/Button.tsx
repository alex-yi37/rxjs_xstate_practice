import { PropsWithChildren } from "react";

type ButtonVariants = "sm" | "md" | "lg";

interface ButtonProps extends PropsWithChildren {
  handleClick: () => void;
  variant?: ButtonVariants;
  styles?: React.CSSProperties;
}

const Button = ({
  handleClick,
  variant = "md",
  styles = {},
  children,
  ...rest
}: ButtonProps) => {
  if (!variant) variant = "md";

  return (
    <button onClick={handleClick} style={styles} type="button" {...rest}>
      {children}
    </button>
  );
};

export default Button;
