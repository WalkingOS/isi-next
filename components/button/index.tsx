"use client"

import React from "react";

interface Props {
  href?: string;
  className?: string;
  children: React.ReactNode;
  tag?: "button" | "a";
  variant?: "primary" | "secondary";
  onClick: () => void;
}

export const IsiButton = ({ onClick, href, className = "", children, tag = "button", variant = "primary", ...rest }: Props): JSX.Element => {
  const TagName = tag;
  const secondary = "text-isi-100 bg-white-100";
  const primary = "text-white-100 bg-isi hover:bg-isi-light";
  const variantClass = variant === "primary" ? primary : secondary;

  return (
    <TagName
    onClick={onClick}
    {...(href && { href })}
    className={`${variantClass} ${className} md:w-[256px] hover:cursor-pointer text-[16px] font-bold py-3 w-full text-center rounded-xl shadow-lg hover:shadow-xl ease-in-out duration-300 object-center overflow-hidden hover:scale-[1.01] active:scale-[1]`}
      {...rest}
    >
      {children}
    </TagName>
  );
};

export const SmoothIsiButton = ({ className = "", children, variant = "primary", target }: {children:JSX.Element; target: string; className: string; variant?: "primary" | "secondary"}) => {
  const handleClick = () => {
    document.querySelector(`#${target}`)?.scrollIntoView({
      behavior: 'smooth'
    });
  };

  return (
    <IsiButton className={className} variant={variant} onClick={() => handleClick()}>
      {children}
    </IsiButton>
  )
}
