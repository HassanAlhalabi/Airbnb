"use client";

import { useRef } from "react";
import { AriaButtonProps, useButton } from "react-aria";

export function Button(props: ButtonProps) {
  let ref = useRef(null);
  let { buttonProps } = useButton(props, ref);
  let { children } = props;

  return (
    <button
      className={`bg-${
        props.variant ?? "main"
      } border-0 outline-none py-2 px-4 rounded text-white`}
      {...buttonProps}
      ref={ref}
    >
      {children}
    </button>
  );
}

export interface ButtonProps extends AriaButtonProps {
  variant?: ButtonVariant;
}

type ButtonVariant = "main" | "default" | "black";
