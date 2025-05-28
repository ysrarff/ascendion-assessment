import { HTMLInputTypeAttribute, ComponentProps } from "react";

export type TInputVariation = "formInput" | "searchInput";
export type TInputStyling = ComponentProps<"div">["className"];

export interface IInputProps {
  id: string;
  variation: TInputVariation;
  type: HTMLInputTypeAttribute | undefined;
  styling?: TInputStyling;
  labelName: string;
  placeholder: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
}
