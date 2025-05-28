import { ComponentProps } from "react";

export type TTextType = "h1" | "h2" | "h3" | "p";
export type TTextVariation = "formText" | "navbarText";
export type TTextStyling = ComponentProps<"div">["className"];

export interface ITextProps {
  variation: TTextVariation;
  type: TTextType;
  value: string;
  styling?: TTextStyling;
}
