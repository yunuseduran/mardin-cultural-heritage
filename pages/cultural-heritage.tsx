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
                    fallbackSrc="https://via.placeholder.com/500x300"
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