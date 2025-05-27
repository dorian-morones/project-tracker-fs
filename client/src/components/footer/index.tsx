import React from 'react';
import { Flex, Text, Link } from "@radix-ui/themes";

export const Footer = () => {
    return (
        <Flex
            as="div"
            align="center"
            justify="center"
            gap="16px"
            px="4"
            py="3"
            style={{
                backgroundColor: '#f5f5f7', borderTop: '1px solid #ddd', position: 'absolute',
                bottom: 0,
                width: '100%',
            }}
        >
            <Link href="https://github.com/dorian-morones" target="_blank" rel="noopener noreferrer" style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                <Text size="3">GitHub</Text>
            </Link>

            <Link href="https://www.linkedin.com/in/dorian-morones/" target="_blank" rel="noopener noreferrer" style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                <Text size="3">LinkedIn</Text>
            </Link>
        </Flex>
    )
}