import { forwardRef } from "react";

import { SearchProps } from "./Search.props";

import styles from "./Search.module.css";
import cn from "classnames";

import { VscSearch } from "react-icons/vsc";

const Search = forwardRef<HTMLInputElement, SearchProps>(function Input(
   { className, isValid = true, ...props },
   ref
) {
   return (
      <div className={styles["input-wrapper"]}>
         <input
            {...props}
            ref={ref}
            className={cn(styles["input"], className, {
               [styles["invalid"]]: isValid,
            })}
         />
         <VscSearch className={styles["input-svg"]} />
      </div>
   );
});

export default Search;
