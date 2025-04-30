import React from 'react'
import {
  Box,
  Container,
  Heading,
  Text,
  SimpleGrid,
  Image,
  VStack,
  HStack,
  Badge,
  Divider,
} from '@chakra-ui/react'

const TvSeries = () => {
  const series = [
    {
      title: "Sıla",
      year: "2006-2008",
      location: "Mardin Kalesi, Eski Mardin",
      impact: "Yüksek",
      description: "Mardin'in tanıtımında önemli rol oynayan dizilerden biri. Şehrin tarihi dokusunu ve kültürel zenginliğini ön plana çıkardı.",
      image: "/images/sila.jpg",
    },
    {
      title: "Gönül",
      year: "2015-2016",
      location: "Mardin Merkez",
      impact: "Orta",
      description: "Mardin'in modern yüzünü de gösteren, kültürel değerleri işleyen bir dizi.",
      image: "/images/gonul.jpg",
    },
    // Diğer diziler buraya eklenecek
  ]

  return (
    <Container maxW="container.xl" py={10}>
      <VStack spacing={10} align="stretch">
        <Box>
          <Heading as="h1" size="2xl" mb={6}>
            Mardin'de Çekilen Diziler
          </Heading>
          <Text fontSize="lg" color="gray.600">
            Mardin'in eşsiz atmosferinde çekilen ve şehrin tanıtımına katkı sağlayan televizyon dizileri.
          </Text>
        </Box>

        <SimpleGrid columns={{ base: 1, md: 2 }} spacing={10}>
          {series.map((serie, index) => (
            <Box
              key={index}
              borderWidth="1px"
              borderRadius="lg"
              overflow="hidden"
              shadow="md"
            >
              <Image
                src={serie.image}
                alt={serie.title}
                height="300px"
                width="100%"
                objectFit="cover"
                fallbackSrc="https://png.pngtree.com/element_our/sm/20180516/sm_5afbfa01e121d.jpg"
              />
              <Box p={6}>
                <HStack spacing={4} mb={4}>
                  <Heading as="h3" size="lg">
                    {serie.title}
                  </Heading>
                  <Badge colorScheme="blue">{serie.year}</Badge>
                </HStack>
                <Text color="gray.600" mb={4}>
                  {serie.description}
                </Text>
                <Divider my={4} />
                <SimpleGrid columns={2} spacing={4}>
                  <Box>
                    <Text fontWeight="bold">Çekim Lokasyonu</Text>
                    <Text color="gray.600">{serie.location}</Text>
                  </Box>
                  <Box>
                    <Text fontWeight="bold">Turizm Etkisi</Text>
                    <Badge
                      colorScheme={
                        serie.impact === "Yüksek"
                          ? "green"
                          : serie.impact === "Orta"
                          ? "yellow"
                          : "red"
                      }
                    >
                      {serie.impact}
                    </Badge>
                  </Box>
                </SimpleGrid>
              </Box>
            </Box>
          ))}
        </SimpleGrid>

        <Box mt={10}>
          <Heading as="h2" size="xl" mb={6}>
            Dizilerin Turizme Etkisi
          </Heading>
          <SimpleGrid columns={{ base: 1, md: 3 }} spacing={8}>
            <Box p={6} borderWidth="1px" borderRadius="lg">
              <Heading as="h3" size="md" mb={4}>
                Ekonomik Etki
              </Heading>
              <Text>
                Dizilerin çekildiği bölgelerde turizm gelirlerinde artış, yeni iş fırsatları ve ekonomik canlanma gözlemlendi.
              </Text>
            </Box>
            <Box p={6} borderWidth="1px" borderRadius="lg">
              <Heading as="h3" size="md" mb={4}>
                Kültürel Tanıtım
              </Heading>
              <Text>
                Mardin'in kültürel zenginliği ve tarihi dokusu geniş kitlelere ulaştı, şehrin bilinirliği arttı.
              </Text>
            </Box>
            <Box p={6} borderWidth="1px" borderRadius="lg">
              <Heading as="h3" size="md" mb={4}>
                Altyapı Gelişimi
              </Heading>
              <Text>
                Artan turist sayısıyla birlikte otel, restoran ve diğer turizm altyapılarında gelişme sağlandı.
              </Text>
            </Box>
          </SimpleGrid>
        </Box>
      </VStack>
    </Container>
  )
}

export default TvSeries 