import { forwardRef } from "react";

import { InputProps } from "./Input.props";

import styles from "./Input.module.css";
import cn from "classnames";

const Input = forwardRef<HTMLInputElement, InputProps>(function Input(
   { className, isValid = true, ...props },
   ref
) {
   return (
      <input
         placeholder="Email..."
         {...props}
         ref={ref}
         className={cn(styles["input"], className, {
            [styles["invalid"]]: isValid,
         })}
      />
   );
});

export default Input;
