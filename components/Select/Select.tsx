"use client"

import { Select } from "@chakra-ui/react";

interface Props {
  options: string[]
  placeholder: string
}

export function SelectComponent({ options, placeholder }: Props) {
  return (
    <Select w={'fit-content'} placeholder={placeholder}>
      {options.map((option) => (
        <option key={option} value={option}>{option}</option>
      ))}
    </Select>
  );
}