import { TInputVariation, IInputProps } from "./types/InputType";

const Input = (props: IInputProps) => {
  const { id, variation, type, styling, labelName, placeholder, onChange } =
    props;

  const getVariation = (componentVariation: TInputVariation) => {
    let extraStyling = "";
    extraStyling =
      componentVariation === "formInput"
        ? "xl:min-w-2xl w-auto mb-5"
        : "xl:min-w-lg w-auto";
    extraStyling += styling ? " " + styling : "";

    return extraStyling;
  };

  return (
    <>
      <label>{labelName}</label>
      <input
        id={id}
        type={type}
        placeholder={placeholder}
        className={` bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 ${getVariation(
          variation
        )}`}
        onChange={onChange}
      />
    </>
  );
};

export default Input;
