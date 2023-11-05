import { ButtonHTMLAttributes, ReactNode } from "react";

import "../../../styles.css";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
}

export function Button({ children, ...rest }: ButtonProps) {
  return (
    <div>
      <button className={`bg-slate-50  ${rest.className}`} {...rest}>
        {children}
      </button>
    </div>
  );
}
