"use client"

import { Select } from "@chakra-ui/react";

interface Props {
  options: string[]
  value: string
  onChange: React.Dispatch<React.SetStateAction<string>>
}

export function SelectComponent({ options, value, onChange }: Props) {
  return (
    <Select w={'fit-content'} value={value} onChange={e => onChange(e.target.value)}>
      {options.map((option) => (
        <option key={option} value={option}>{option}</option>
      ))}
    </Select>
  );
}