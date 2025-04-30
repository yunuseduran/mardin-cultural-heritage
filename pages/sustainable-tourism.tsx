import React, { useEffect } from 'react'
import {
  Box,
  Container,
  Heading,
  Text,
  SimpleGrid,
  VStack,
  List,
  ListItem,
  ListIcon,
  Icon,
  Flex,
  useDisclosure,
  ScaleFade,
  SlideFade,
} from '@chakra-ui/react'
import { motion } from 'framer-motion'
import { FaCheckCircle, FaTimesCircle, FaLeaf, FaHandshake, FaUsers, FaUniversity, FaFilm, FaTree } from 'react-icons/fa'

const MotionBox = motion(Box)

const SustainableTourism = () => {
  const { isOpen, onToggle } = useDisclosure()

  useEffect(() => {
    onToggle()
    // Müzik başlatma
    const audio = new Audio('/audio/background-music.mp3')
    audio.loop = true
    const playPromise = audio.play()
    
    if (playPromise !== undefined) {
      playPromise.catch(error => {
        console.log("Otomatik müzik çalma engellendi:", error)
      })
    }

    return () => {
      audio.pause()
      audio.currentTime = 0
    }
  }, [])

  const universityContributions = [
    'Turizm Fakültesi araştırma üretkenliğinde Türkiye lideri',
    'Uluslararası kongreler düzenleme',
    'Topluluk projeleri ve işbirlikleri',
    'Öğrenci katılımlı saha uygulamaları',
    'Dara Antik Kenti temizlik projesi',
  ]

  const seriesImpact = [
    '2024\'te 4 milyon ziyaretçi',
    'Turizmin 12 aya yayılması',
    'Midyat ve Narlı\'da turist yoğunluğu',
    'Otel doluluk oranlarında artış',
    'Uzak Şehir dizisi etkisi',
  ]

  const sustainableSolutions = [
    {
      title: 'Mimari Koruma',
      icon: FaLeaf,
      items: [
        'Taş mimarinin özgün restorasyonu',
        'Geleneksel işçiliğin teşviki',
        'Butik otel ve kültür mekanı dönüşümleri',
      ],
    },
    {
      title: 'Ziyaretçi Yönetimi',
      icon: FaUsers,
      items: [
        'Kapasite kontrolü',
        'Rehberli turların planlanması',
        'Altyapı güçlendirmesi',
      ],
    },
    {
      title: 'Çevresel Önlemler',
      icon: FaTree,
      items: [
        'Atık yönetimi ve geri dönüşüm',
        'Park ve yeşil alan bakımı',
        'Su tasarrufu uygulamaları',
      ],
    },
  ]

  return (
    <Container maxW="container.xl" py={10}>
      <VStack spacing={10} align="stretch">
        <ScaleFade in={isOpen} initialScale={0.9}>
          <Box>
            <Heading as="h1" size="2xl" mb={6}>
              Sürdürülebilir Turizm
            </Heading>
            <Text fontSize="lg" color="gray.600">
              Mardin'in zengin kültürel mirasını koruyarak gelecek nesillere aktarmak için sürdürülebilir turizm stratejileri.
            </Text>
          </Box>
        </ScaleFade>

        <SimpleGrid columns={{ base: 1, md: 2 }} spacing={10}>
          <MotionBox
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            p={6}
            borderWidth="1px"
            borderRadius="lg"
          >
            <Flex align="center" mb={4}>
              <Icon as={FaUniversity} w={6} h={6} mr={2} color="blue.500" />
              <Heading as="h3" size="lg">
                Üniversite Katkıları
              </Heading>
            </Flex>
            <List spacing={3}>
              {universityContributions.map((item, index) => (
                <ListItem key={index} display="flex" alignItems="center">
                  <ListIcon as={FaCheckCircle} color="blue.500" />
                  {item}
                </ListItem>
              ))}
            </List>
          </MotionBox>

          <MotionBox
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            p={6}
            borderWidth="1px"
            borderRadius="lg"
          >
            <Flex align="center" mb={4}>
              <Icon as={FaFilm} w={6} h={6} mr={2} color="purple.500" />
              <Heading as="h3" size="lg">
                Dizi Turizmi Etkileri
              </Heading>
            </Flex>
            <List spacing={3}>
              {seriesImpact.map((item, index) => (
                <ListItem key={index} display="flex" alignItems="center">
                  <ListIcon as={FaCheckCircle} color="purple.500" />
                  {item}
                </ListItem>
              ))}
            </List>
          </MotionBox>
        </SimpleGrid>

        <SlideFade in={isOpen} offsetY="20px">
          <Box>
            <Heading as="h2" size="xl" mb={6}>
              Sürdürülebilirlik Çözümleri
            </Heading>
            <SimpleGrid columns={{ base: 1, md: 3 }} spacing={8}>
              {sustainableSolutions.map((solution, index) => (
                <MotionBox
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.2 }}
                  p={6}
                  borderWidth="1px"
                  borderRadius="lg"
                >
                  <Flex align="center" mb={4}>
                    <Icon as={solution.icon} w={6} h={6} mr={2} color="green.500" />
                    <Heading as="h3" size="md">
                      {solution.title}
                    </Heading>
                  </Flex>
                  <List spacing={3}>
                    {solution.items.map((item, itemIndex) => (
                      <ListItem key={itemIndex} display="flex" alignItems="center">
                        <ListIcon as={FaCheckCircle} color="green.500" />
                        {item}
                      </ListItem>
                    ))}
                  </List>
                </MotionBox>
              ))}
            </SimpleGrid>
          </Box>
        </SlideFade>

        <MotionBox
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.6 }}
        >
          <Heading as="h2" size="xl" mb={6}>
            Dereiçi Projesi
          </Heading>
          <SimpleGrid columns={{ base: 1, md: 2 }} spacing={8}>
            <Box p={6} borderWidth="1px" borderRadius="lg">
              <Heading as="h3" size="md" mb={4}>
                Proje Hedefleri
              </Heading>
              <List spacing={3}>
                <ListItem>• Taş konakların restorasyonu</ListItem>
                <ListItem>• Doğal film platosu oluşturma</ListItem>
                <ListItem>• Butik otel ve kafe dönüşümleri</ListItem>
                <ListItem>• Kültürel değerlerin korunması</ListItem>
              </List>
            </Box>
            <Box p={6} borderWidth="1px" borderRadius="lg">
              <Heading as="h3" size="md" mb={4}>
                Beklenen Sonuçlar
              </Heading>
              <List spacing={3}>
                <ListItem>• Sürdürülebilir turizm modeli</ListItem>
                <ListItem>• Ekonomik canlanma</ListItem>
                <ListItem>• Kültürel mirasın korunması</ListItem>
                <ListItem>• Yerel istihdamın artması</ListItem>
              </List>
            </Box>
          </SimpleGrid>
        </MotionBox>
      </VStack>
    </Container>
  )
}

export default SustainableTourism 