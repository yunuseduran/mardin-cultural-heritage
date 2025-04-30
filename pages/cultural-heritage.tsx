import React from 'react'
import {
  Box,
  Container,
  Heading,
  Text,
  SimpleGrid,
  Image,
  VStack,
  Tabs,
  TabList,
  TabPanels,
  Tab,
  TabPanel,
} from '@chakra-ui/react'

const CulturalHeritage = () => {
  return (
    <Container maxW="container.xl" py={10}>
      <VStack spacing={10} align="stretch">
        <Box>
          <Heading as="h1" size="2xl" mb={6}>
            Mardin'in Kültürel Mirası
          </Heading>
          <Text fontSize="lg" color="gray.600">
            Binlerce yıllık tarihi ve çok kültürlü yapısıyla UNESCO Dünya Mirası aday listesinde yer alan Mardin'in eşsiz kültürel mirası.
          </Text>
        </Box>

        <Tabs variant="enclosed">
          <TabList>
            <Tab>Tarihi Geçmiş</Tab>
            <Tab>Mimari</Tab>
            <Tab>Dini Yapılar</Tab>
            <Tab>El Sanatları</Tab>
            <Tab>Yerel Kültür</Tab>
          </TabList>

          <TabPanels>
            <TabPanel>
              <SimpleGrid columns={{ base: 1, md: 2 }} spacing={8}>
                <Box>
                  <Heading as="h3" size="lg" mb={4}>
                    Tarihi Geçmiş
                  </Heading>
                  <Text>
                    Mardin, Mezopotamya'nın en eski yerleşim yerlerinden biridir. Sümerler, Akadlar, Babiller, Hititler, Asurlular, Persler, Romalılar, Bizanslılar, Araplar, Selçuklular ve Osmanlılar gibi birçok medeniyete ev sahipliği yapmıştır.
                  </Text>
                </Box>
                <Box>
                  <Image
                    src="/images/mardin-history.jpg"
                    alt="Tarihi Mardin"
                    borderRadius="lg"
                    fallbackSrc="data:image/jpeg;base64,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"
                  />
                </Box>
              </SimpleGrid>
            </TabPanel>

            <TabPanel>
              <SimpleGrid columns={{ base: 1, md: 2 }} spacing={8}>
                <Box>
                  <Heading as="h3" size="lg" mb={4}>
                    Mardin Mimarisi
                  </Heading>
                  <Text>
                    Mardin'in karakteristik taş işçiliği ve geleneksel mimarisi, şehrin en önemli kültürel değerlerinden biridir. Abbasilerin sarı kalker taşından yapılmış evleri, dar sokakları ve terasları ile ünlüdür.
                  </Text>
                </Box>
                <Box>
                  <Image
                    src="/images/mardin-architecture.jpg"
                    alt="Mardin Mimarisi"
                    borderRadius="lg"
                    fallbackSrc="https://via.placeholder.com/500x300"
                  />
                </Box>
              </SimpleGrid>
            </TabPanel>

            <TabPanel>
              <SimpleGrid columns={{ base: 1, md: 2 }} spacing={8}>
                <Box>
                  <Heading as="h3" size="lg" mb={4}>
                    Dini Yapılar
                  </Heading>
                  <Text>
                    Mardin, farklı dinlerin bir arada yaşadığı nadir şehirlerden biridir. Mor Gabriel Manastırı, Zinciriye Medresesi, Ulu Cami ve Kırklar Kilisesi gibi önemli dini yapıları barındırır.
                  </Text>
                </Box>
                <Box>
                  <Image
                    src="/images/mardin-religious.jpg"
                    alt="Mardin Dini Yapıları"
                    borderRadius="lg"
                    fallbackSrc="https://via.placeholder.com/500x300"
                  />
                </Box>
              </SimpleGrid>
            </TabPanel>

            <TabPanel>
              <SimpleGrid columns={{ base: 1, md: 2 }} spacing={8}>
                <Box>
                  <Heading as="h3" size="lg" mb={4}>
                    Geleneksel El Sanatları
                  </Heading>
                  <Text>
                    Telkari (gümüş işçiliği), taş işçiliği, bakırcılık ve dokumacılık gibi geleneksel el sanatları, Mardin'in kültürel mirasının önemli bir parçasıdır.
                  </Text>
                </Box>
                <Box>
                  <Image
                    src="/images/mardin-crafts.jpg"
                    alt="Mardin El Sanatları"
                    borderRadius="lg"
                    fallbackSrc="https://via.placeholder.com/500x300"
                  />
                </Box>
              </SimpleGrid>
            </TabPanel>

            <TabPanel>
              <SimpleGrid columns={{ base: 1, md: 2 }} spacing={8}>
                <Box>
                  <Heading as="h3" size="lg" mb={4}>
                    Yerel Kültür ve Yaşam
                  </Heading>
                  <Text>
                    Mardin'in çok kültürlü yapısı, yerel mutfağı, gelenekleri ve yaşam tarzı, şehri benzersiz kılan unsurlardır. Farklı dil, din ve kültürlerin bir arada yaşama geleneği hala devam etmektedir.
                  </Text>
                </Box>
                <Box>
                  <Image
                    src="/images/mardin-culture.jpg"
                    alt="Mardin Kültürü"
                    borderRadius="lg"
                    fallbackSrc="https://via.placeholder.com/500x300"
                  />
                </Box>
              </SimpleGrid>
            </TabPanel>
          </TabPanels>
        </Tabs>
      </VStack>
    </Container>
  )
}

export default CulturalHeritage 
