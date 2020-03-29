import styled from 'styled-components/native';
import Constants from 'expo-constants';

export const Container = styled.View.attrs({
paddingTop: Constants.statusBarHeight + 20,
paddingHorizontal: 24
})`
  flex: 1;
  background: #f0f0f5;
`;

export const Header = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`; 

export const Incident = styled.View`
  padding: 24px;
  border-radius: 8px;
  background: #fff;
  margin-bottom: 16px;
  margin-top: 48px;
`;

export const Property = styled.Text`
  font-size: 14px;
  color: #41414d;
  font-weight: bold;
`;

export const Value = styled.Text`
  margin-top: 8px;
  font-size: 15px;
  color: #737380;
  margin-bottom: 24px;
`;

export const ContactBox = styled.View`
  padding: 24px;
  border-radius: 8px;
  background: #fff;
  margin-bottom: 16px;
`;

export const HeroTitle = styled.Text`
  font-weight: bold;
  font-size: 20px;
  color: #13131a;
  line-height: 30px;
  text-align: center;
`;

export const HeroDescription = styled.Text`
  font-size: 15px;
  color: #737380;
  margin-top: 16px;
  text-align: center;
`;

export const ContactButtons  = styled.View`
  margin-top: 16px;
  flex-direction: row;
  justify-content: space-between;
`;

export const Action = styled.TouchableOpacity`
  background: #e02041;
  border-radius: 8px;
  height: 50px;
  width: 48%;
  justify-content: center;
  align-items: center;
`;

export const TextButton  = styled.Text`
  font-weight: bold;
  color: #fff;
  font-size: 15px;
`;

