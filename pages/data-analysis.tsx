import React from 'react'
import {
  Box,
  Container,
  Heading,
  Text,
  SimpleGrid,
  Select,
  VStack,
} from '@chakra-ui/react'
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js'
import { Line, Bar } from 'react-chartjs-2'

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  BarElement,
  Title,
  Tooltip,
  Legend
)

const DataAnalysis = () => {
  const tourismData = {
    labels: ['2016', '2017', '2018'],
    datasets: [
      {
        label: 'Toplam Turist Sayısı (Milyon)',
        data: [0.09, 1, 3],
        borderColor: 'rgb(75, 192, 192)',
        tension: 0.1,
      },
    ],
  }

  const economicImpactData = {
    labels: ['Otel Doluluk', 'Restoran Sayısı', 'Hediyelik Eşya', 'Tur Operatörleri'],
    datasets: [
      {
        label: 'Dizilerden Sonra Artış (%)',
        data: [85, 60, 70, 55],
        backgroundColor: 'rgba(53, 162, 235, 0.5)',
      },
    ],
  }

  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: 'top' as const,
      },
      title: {
        display: true,
        text: 'Turist Sayısı Değişimi (2016-2018)',
      },
    },
  }

  const barOptions = {
    responsive: true,
    plugins: {
      legend: {
        position: 'top' as const,
      },
      title: {
        display: true,
        text: 'Ekonomik Etki Analizi',
      },
    },
  }

  return (
    <Container maxW="container.xl" py={10}>
      <VStack spacing={10} align="stretch">
        <Box>
          <Heading as="h1" size="2xl" mb={6}>
            Veri Analizi
          </Heading>
          <Text fontSize="lg" color="gray.600">
            Mardin'de çekilen dizilerin turizm ve ekonomiye etkisinin sayısal analizi.
          </Text>
        </Box>

        <Box>
          <SimpleGrid columns={{ base: 1, md: 2 }} spacing={10}>
            <Box p={6} borderWidth="1px" borderRadius="lg">
              <Heading as="h3" size="md" mb={4}>
                Turist Sayısı Değişimi
              </Heading>
              <Line data={tourismData} options={options} />
            </Box>
            <Box p={6} borderWidth="1px" borderRadius="lg">
              <Heading as="h3" size="md" mb={4}>
                Ekonomik Etki Analizi
              </Heading>
              <Bar data={economicImpactData} options={barOptions} />
            </Box>
          </SimpleGrid>
        </Box>

        <Box>
          <Heading as="h2" size="xl" mb={6}>
            Detaylı Analiz
          </Heading>
          <SimpleGrid columns={{ base: 1, md: 3 }} spacing={8}>
            <Box p={6} borderWidth="1px" borderRadius="lg">
              <Heading as="h3" size="md" mb={4}>
                Ziyaretçi Profili
              </Heading>
              <Text mb={4}>
                Dizilerin etkisiyle ziyaretçi profilinde önemli değişimler gözlemlendi:
              </Text>
              <VStack align="stretch" spacing={2}>
                <Text>• Yerli turist oranı: %85</Text>
                <Text>• Yabancı turist oranı: %15</Text>
                <Text>• Ortalama konaklama: 3.5 gün</Text>
              </VStack>
            </Box>
            <Box p={6} borderWidth="1px" borderRadius="lg">
              <Heading as="h3" size="md" mb={4}>
                Mevsimsellik
              </Heading>
              <Text mb={4}>
                Turizm aktivitesinin mevsimlere göre dağılımı:
              </Text>
              <VStack align="stretch" spacing={2}>
                <Text>• İlkbahar: %30</Text>
                <Text>• Yaz: %40</Text>
                <Text>• Sonbahar: %20</Text>
                <Text>• Kış: %10</Text>
              </VStack>
            </Box>
            <Box p={6} borderWidth="1px" borderRadius="lg">
              <Heading as="h3" size="md" mb={4}>
                Ekonomik Göstergeler
              </Heading>
              <Text mb={4}>
                Turizm sektöründeki büyüme:
              </Text>
              <VStack align="stretch" spacing={2}>
                <Text>• İstihdam artışı: %45</Text>
                <Text>• Yeni işletme sayısı: +120</Text>
                <Text>• Gelir artışı: %65</Text>
              </VStack>
            </Box>
          </SimpleGrid>
        </Box>
      </VStack>
    </Container>
  )
}

export default DataAnalysis 