import React from 'react'
import { Box, Container, Flex, Link, Stack } from '@chakra-ui/react'
import NextLink from 'next/link'

const Header = () => {
  const navItems = [
    { label: 'Ana Sayfa', href: '/' },
    { label: 'Kültürel Miras', href: '/cultural-heritage' },
    { label: 'Diziler', href: '/tv-series' },
    { label: 'Veri Analizi', href: '/data-analysis' },
    { label: 'Sürdürülebilir Turizm', href: '/sustainable-tourism' },
  ]

  return (
    <Box as="header" bg="white" boxShadow="sm" position="sticky" top={0} zIndex={10}>
      <Container maxW="container.xl">
        <Flex py={4} justify="space-between" align="center">
          <Link as={NextLink} href="/" fontSize="2xl" fontWeight="bold">
            Mardin Kültür
          </Link>
          <Stack as="nav" direction="row" spacing={8}>
            {navItems.map((item) => (
              <Link
                key={item.href}
                as={NextLink}
                href={item.href}
                fontSize="md"
                fontWeight="medium"
                _hover={{ color: 'blue.500' }}
              >
                {item.label}
              </Link>
            ))}
          </Stack>
        </Flex>
      </Container>
    </Box>
  )
}

export default Header 