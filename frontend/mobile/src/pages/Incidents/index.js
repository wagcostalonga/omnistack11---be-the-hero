import React, { useState, useEffect } from 'react';
import { Feather } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native'
import { Image } from 'react-native';

import { 
  Container, 
  Header,
  TextHeader,
  TextSpan,
  Title,
  Description,
  IncidentList,
  IncidentListItem,
  Property,
  Value,
  DetailButton,
  DetailButtonText
} from './styles';

import api from '../../services/api';

import logoImg from '../../assets/img/logo.png';


export default function Incidents() {

  const [incidents, setIncidents] = useState([]);
  const [total, setTotal] = useState(0);
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(false);
  const navigation = useNavigation();

    function navigateToDetails(incident) {
      navigation.navigate('Details', { incident });
    };

  async function loadIncidents() {
    if (loading) {
      return;
    }

    if (total > 0 && incidents.length === total) {
      return;
    }

    setLoading(true);

    const response = await api.get('incidents', {
      params: { page }
    });

    setIncidents([...incidents, ...response.data]);
    setTotal(response.headers['x-total-count']);
    setPage(page + 1);
    setLoading(false);
  }

  useEffect(() => {
    loadIncidents();
  }, []);


  return (
    <>
    <Container>
      <Header>
        <Image source={logoImg} />
        <TextHeader>
          Total de <TextSpan>{total} casos</TextSpan>.
        </TextHeader>
      </Header>

      <Title>Bem-vindo!</Title>
      <Description>Escolha um dos casos abaixo e salve o dia.</Description>

      <IncidentList
        data={incidents}
        keyExtractor={incident => String(incident.id)}
        onEndReached={loadIncidents}
        onEndReachedThreshold={0.2}
        renderItem={({ item: incident }) => (
          <IncidentListItem>
          <Property>ONG: </Property>
          <Value>{incident.name}</Value>

          <Property>CASO: </Property>
          <Value>{incident.title}</Value>

          <Property>VALOR: </Property>
          <Value>
            {Intl.NumberFormat('pt-BR', 
              { style: 'currency', currency: 'BRL'}
              ).format(incident.value)
            }
          </Value>

          <DetailButton onPress={() => navigateToDetails(incident)}>
            <DetailButtonText>
              Ver mais detalhes
            </DetailButtonText>
            <Feather name="arrow-right" size={16} color="#e02041" />
          </DetailButton>
        </IncidentListItem>
        )}
      />
    </Container>
    </>
  )
}