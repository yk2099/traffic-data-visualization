'use client'
import { Box, ChakraProvider } from '@chakra-ui/react'

export default function RootLayout({
    children,
}: {
    children: React.ReactNode
}) {
    return (
        <html lang="en">
            <body>
                <ChakraProvider>
                    <Box h={'100vh'} w={'100vw'}>
                        {children}
                    </Box>
                </ChakraProvider>
            </body>
        </html>
    )
}
