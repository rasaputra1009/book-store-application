import React, { ButtonHTMLAttributes } from "react";
import styles from "./styles.module.scss";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  label: string;
}

const Button: React.FC<ButtonProps> = ({
  className,
  label,
  onClick,
  ...rest
}) => {
  const buttonClassName = `${styles.button} ${className}`;


  return (
    <button className={buttonClassName} onClick={onClick} {...rest}>
      {label}
    </button>
  );
};

export default Button;
