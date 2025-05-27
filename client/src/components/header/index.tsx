import React from 'react';
import { Flex, Text } from "@radix-ui/themes";
import appleLogo from '../../assets/apple-logo.png';

export const Header = () => {
    return (
        <Flex as="div" align="center" justify="start" gap="3" px="4" py="3" style={{ backgroundColor: '#f5f5f7' }}>
            <img src={appleLogo} alt="Apple Logo" style={{ height: '32px' }} />
            <Text size="5" weight="bold">Apple</Text>
        </Flex>
    )
}