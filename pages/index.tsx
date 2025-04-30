import React from 'react'
import { Box, Container, Heading, Text, SimpleGrid, Stat, StatLabel, StatNumber, StatHelpText, StatArrow } from '@chakra-ui/react'
import { Line } from 'react-chartjs-2'
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js'

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
)

export default function Home() {
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

  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: 'top' as const,
      },
      title: {
        display: true,
        text: 'Mardin Turist Sayısı Değişimi (2016-2018)',
      },
    },
  }

  return (
    <Container maxW="container.xl" py={10}>
      <Heading as="h1" mb={6} textAlign="center">
        Mardin'in Sürdürülebilir Kültürel Miras Turizmine Dizilerin Etkisi
      </Heading>

      <SimpleGrid columns={{ base: 1, md: 2 }} spacing={10} mb={10}>
        <Box>
          <Heading as="h2" size="lg" mb={4}>
            Turizm İstatistikleri
          </Heading>
          <Line data={tourismData} options={options} />
        </Box>

        <Box>
          <Heading as="h2" size="lg" mb={4}>
            Önemli Göstergeler
          </Heading>
          <SimpleGrid columns={2} spacing={5}>
            <Stat>
              <StatLabel>Günlük Uçuş Sayısı</StatLabel>
              <StatNumber>15+</StatNumber>
              <StatHelpText>
                <StatArrow type="increase" />
                %650 artış
              </StatHelpText>
            </Stat>
            <Stat>
              <StatLabel>Aylık Havalimanı Yolcu Sayısı</StatLabel>
              <StatNumber>400,000</StatNumber>
              <StatHelpText>2018 verisi</StatHelpText>
            </Stat>
          </SimpleGrid>
        </Box>
      </SimpleGrid>

      <Box mb={10}>
        <Heading as="h2" size="lg" mb={4}>
          Dizilerin Etkileri
        </Heading>
        <SimpleGrid columns={{ base: 1, md: 2 }} spacing={10}>
          <Box>
            <Heading as="h3" size="md" mb={3} color="green.500">
              Olumlu Etkiler
            </Heading>
            <Text>• Şehrin ekonomisine katkı</Text>
            <Text>• Tanıtıma olumlu katkı</Text>
            <Text>• Turizm altyapısının gelişmesi</Text>
            <Text>• Otel doluluk oranlarının artması</Text>
            <Text>• Kültürel mirasın görünürlüğünün artması</Text>
          </Box>
          <Box>
            <Heading as="h3" size="md" mb={3} color="red.500">
              Olumsuz Etkiler
            </Heading>
            <Text>• Kültürün bazı durumlarda yanlış aktarılması</Text>
            <Text>• Yaşam tarzlarının abartılı gösterimi</Text>
            <Text>• Ekonomik rant odaklı yaklaşımlar</Text>
          </Box>
        </SimpleGrid>
      </Box>

      <Box>
        <Heading as="h2" size="lg" mb={4}>
          Kültürel Miras Unsurları
        </Heading>
        <SimpleGrid columns={{ base: 1, md: 3 }} spacing={5}>
          <Box p={5} shadow="md" borderWidth="1px">
            <Heading as="h3" size="md" mb={3}>
              Tarihi Yapılar
            </Heading>
            <Text>• Mardin Kalesi</Text>
            <Text>• Geleneksel Taş Evler</Text>
          </Box>
          <Box p={5} shadow="md" borderWidth="1px">
            <Heading as="h3" size="md" mb={3}>
              Dini Yapılar
            </Heading>
            <Text>• Ulu Cami</Text>
            <Text>• Zinciriye Medresesi</Text>
            <Text>• Kasımiye Medresesi</Text>
          </Box>
          <Box p={5} shadow="md" borderWidth="1px">
            <Heading as="h3" size="md" mb={3}>
              Manastırlar
            </Heading>
            <Text>• Mor Gabriel</Text>
            <Text>• Mor Malke</Text>
            <Text>• Mor Ya'qub</Text>
            <Text>• Mor Dimet</Text>
          </Box>
        </SimpleGrid>
      </Box>
    </Container>
  )
} 