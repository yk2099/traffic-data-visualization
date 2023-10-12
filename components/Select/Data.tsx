import { Select } from "@chakra-ui/react";

export default function Data() {
  return (
    <Select placeholder='Select Data'>
      <option value='tree'>Tree</option>
      <option value='active-business'>Active Business</option>
    </Select>
  )
}