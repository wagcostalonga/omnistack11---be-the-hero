import React from 'react';
import { Feather } from '@expo/vector-icons';
import { useNavigation, useRoute } from '@react-navigation/native';
import { Image, TouchableOpacity, Linking } from 'react-native';
import * as MailComposer from 'expo-mail-composer';

import { 
  Container,
  Header,
  Incident,
  Property,
  Value,
  ContactBox,
  HeroTitle,
  HeroDescription,
  ContactButtons,
  Action,
  TextButton
} from './styles';

import logoImg from '../../assets/img/logo.png';

export default function Details() {

  const navigation = useNavigation();
  const route = useRoute();
  const incident = route.params.incident;
  const message = `Olá ${incident.name}, estou entrando em contato, pois gostaria de ajudar no caso "${incident.title}" com o valor de ${Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL'}).format(incident.value)}`;

  function navigateBack() {
    navigation.goBack();
  };

  function sendMail() {
    MailComposer.composeAsync({
      subject: `Herói do caso: ${incident.title}`,
      recipients: [incident.email],
      body: message,
    })
  }

  function sendWhatsapp() {
    Linking.openURL(`whatsapp://send?text=${message}&phone=${incident.whatsapp}`);
  }


  return (  
    <Container>
      <Header>
        <Image source={logoImg} />
        <TouchableOpacity onPress={navigateBack}>
          <Feather name="arrow-left" size={28} color="#e02041" />
        </TouchableOpacity>
      </Header>

      <Incident>
        <Property>ONG: </Property>
        <Value>{incident.name} de {incident.city}, {incident.uf}</Value>

        <Property>CASO: </Property>
        <Value>{incident.title}</Value>

        <Property>VALOR: </Property>
          <Value>
            {Intl.NumberFormat('pt-BR', 
              { style: 'currency', currency: 'BRL'}
              ).format(incident.value)
            }
          </Value>
      </Incident>

      <ContactBox>
        <HeroTitle>Salve o dia!</HeroTitle>
        <HeroTitle>Seja o herói desse caso.</HeroTitle>
        <HeroDescription>Entre em contato:</HeroDescription>

        <ContactButtons>
          <Action onPress={sendWhatsapp}>
            <TextButton>WhatsApp</TextButton>
          </Action>
          <Action onPress={sendMail}>
            <TextButton>Email</TextButton>
          </Action>
        </ContactButtons>

      </ContactBox>
    </Container>
  );
}
