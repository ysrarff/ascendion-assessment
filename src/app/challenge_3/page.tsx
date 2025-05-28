"use client";

import { useEffect } from "react";

const ChallengeThree = () => {
  const sampleArr = [-1, 0];
  const target = -1;

  useEffect(() => {
    const sumResult = calculateTwoSums(sampleArr, target);
    console.log(sumResult);
  });

  const calculateTwoSums = (arr: number[], tar: number) => {
    const result: number[] = [];

    arr.forEach((item, index) => {
      if (arr.indexOf(tar - item) !== -1 && result.length < 2) {
        result.push(index + 1, arr.indexOf(tar - item) + 1);
      }
    });

    return result;
  };

  return (
    <div className="h-screen flex justify-center items-center">
      <p>challenge 3...</p>
    </div>
  );
};

export default ChallengeThree;
