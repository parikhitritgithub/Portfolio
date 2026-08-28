"use client";
import React, { useCallback, useEffect, useState } from "react";

export const FlipWords = ({
  words,
  duration = 3000,
  className = "",
}: {
  words: string[];
  duration?: number;
  className?: string;
}) => {
  const [currentWordIndex, setCurrentWordIndex] = useState(0);

  const startAnimation = useCallback(() => {
    setCurrentWordIndex((prev) => (prev + 1) % words.length);
  }, [words]);

  useEffect(() => {
    const interval = setInterval(() => {
      startAnimation();
    }, duration);
    return () => clearInterval(interval);
  }, [duration, startAnimation]);

  return (
    <span
      className={`inline-block font-semibold text-brand-300 transition-all duration-500 ease-in-out ${className}`}
      key={words[currentWordIndex]}
    >
      {words[currentWordIndex]}
    </span>
  );
};
