import { ITextProps, TTextVariation } from "./types/TextType";

const Text = (props: ITextProps) => {
  const { type, variation, styling, value } = props;

  const getVariation = (componentVariation: TTextVariation) => {
    let extraStyling = "";
    extraStyling = componentVariation === "formText" ? "mb-5" : "";
    extraStyling += styling ?  " " + styling : "";

    return extraStyling;
  };

  if (type === "h1") {
    return <h1 className={`text-2xl ${getVariation(variation)}`}>{value}</h1>;
  } else if (type === "h2") {
    return <h2 className={`text-xl ${getVariation(variation)}`}>{value}</h2>;
  } else if (type === "h3") {
    return <h3 className={`text-lg ${getVariation(variation)}`}>{value}</h3>;
  } else {
    return <p className={`text-base ${getVariation(variation)}`}>{value}</p>;
  }
};

export default Text;
