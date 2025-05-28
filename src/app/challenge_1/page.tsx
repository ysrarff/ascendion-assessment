"use client";

import { useState } from "react";
import Form from "next/form";

import Button from "@/components/button";
import Input from "@/components/input";
import Text from "@/components/text";

const ChallengeOne = () => {
  const [numbers, setNumbers] = useState<{
    firstNum: string;
    secondNum: string;
  }>({
    firstNum: "",
    secondNum: "",
  });

  const [sum, setSum] = useState<number>(0);

  const onSubmitButton = () => {
    const parsedInputValues = Object.values(numbers)
      .map((item) => parseInt(item))
      .reduce((acc, item) => (acc += item), 0);

    setSum(parsedInputValues);
  };

  const onChangeText = (e: React.ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();

    setNumbers((prevVal) => ({ ...prevVal, [e.target.id]: e.target.value }));
  };

  return (
    <div className="h-screen flex justify-center items-center">
      <Form action={onSubmitButton}>
        <Text
          type="h1"
          variation="formText"
          styling={"font-bold"}
          value="Adding Two Numbers"
        />

        <Input
          id="firstNum"
          variation="formInput"
          type="number"
          labelName="First number"
          placeholder="0"
          onChange={onChangeText}
        />
        <Input
          id="secondNum"
          variation="formInput"
          type="number"
          labelName="Second number"
          placeholder="0"
          onChange={onChangeText}
        />

        <Button />

        <div className="mt-6 flex justify-baseline">
          <Text
            type="h2"
            variation="formText"
            styling={"font-bold"}
            value="Total: "
          />
          <Text
            type="h2"
            variation="formText"
            styling={"font-bold"}
            value={sum.toString()}
          />
        </div>
      </Form>
    </div>
  );
};

export default ChallengeOne;
