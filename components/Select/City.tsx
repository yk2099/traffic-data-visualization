"use client"

import { Select } from "@chakra-ui/react";

export default function City() {
  return (
    <Select placeholder='Select City'>
      <option value='la'>LA</option>
      <option value='nyc'>NYC</option>
    </Select>
  )
}