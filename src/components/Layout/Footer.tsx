import React from 'react'
import { Box, Container, SimpleGrid, Stack, Text, Link, Icon } from '@chakra-ui/react'
import { FaFacebook, FaTwitter, FaInstagram, FaYoutube } from 'react-icons/fa'

const Footer = () => {
  const socialLinks = [
    { icon: FaFacebook, href: '#' },
    { icon: FaTwitter, href: '#' },
    { icon: FaInstagram, href: '#' },
    { icon: FaYoutube, href: '#' },
  ]

  return (
    <Box bg="gray.50" color="gray.700" as="footer">
      <Container maxW="container.xl" py={10}>
        <SimpleGrid columns={{ base: 1, md: 3 }} spacing={8}>
          <Stack spacing={6}>
            <Text fontSize="lg" fontWeight="bold">
              Mardin Kültür
            </Text>
            <Text fontSize="sm">
              Mardin'in kültürel mirasını ve dizilerin turizme etkisini inceleyen kapsamlı bir platform.
            </Text>
          </Stack>

          <Stack spacing={4}>
            <Text fontWeight="bold">Ana Bölümler</Text>
            <Link href="/">Ana Sayfa</Link>
            <Link href="/cultural-heritage">Kültürel Miras</Link>
            <Link href="/tv-series">Diziler</Link>
            <Link href="/data-analysis">Veri Analizi</Link>
            <Link href="/sustainable-tourism">Sürdürülebilir Turizm</Link>
          </Stack>

          <Stack spacing={4}>
            <Text fontWeight="bold">Sosyal Medya</Text>
            <Stack direction="row" spacing={4}>
              {socialLinks.map((social, index) => (
                <Link key={index} href={social.href}>
                  <Icon as={social.icon} w={6} h={6} />
                </Link>
              ))}
            </Stack>
            <Text fontSize="sm">
              © {new Date().getFullYear()} Mardin Kültür. Tüm hakları saklıdır.
            </Text>
          </Stack>
        </SimpleGrid>
      </Container>
    </Box>
  )
}

export default Footer 