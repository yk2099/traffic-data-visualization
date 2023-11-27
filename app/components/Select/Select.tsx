'use client'

import { Select, Text } from '@chakra-ui/react'

interface Props {
    options: string[]
    value: string
    onChange: (param: string) => void
    placeholder: string
}

export function SelectComponent({
    options,
    value,
    onChange,
    placeholder,
}: Props) {
    return (
        <Select
            w={'fit-content'}
            value={value}
            onChange={(e) => onChange(e.target.value)}
            placeholder={placeholder}
            bg={'white'}
            color={'black'}
        >
            {options.map((option) => (
                <option
                    key={option}
                    value={option}
                    style={{ background: 'white', color: 'black' }}
                >
                    {option}
                </option>
            ))}
        </Select>
    )
}
