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
`; 

export const TextHeader = styled.Text`
  font-size: 15px;
`;

export const TextSpan = styled.Text`
  font-weight:bold;
`;

export const Title = styled.Text`
  text-align: center;
  font-size: 30px;
  margin-top: 48px;
  margin-bottom: 16px;
  color: #13131a;
  font-weight: bold;
`;

export const Description = styled.Text`
  font-size: 16px;
  line-height: 24px;
  color: #737380; 
`;

export const IncidentList = styled.FlatList.attrs({
showsVerticalScrollIndicator: false
})`
  margin-top: 32px;
`;

export const IncidentListItem = styled.View`
  padding: 24px;
  border-radius: 8px;
  background: #fff;
  margin-bottom: 16px;
`;

export const Property = styled.Text`
  font-size: 14px;
  color: #41414d;
  font-weight: bold;
`;

export const Value = styled.Text`
  margin-top: 8px;
  font-size: 15px;
  margin-bottom: 24px;
  color: #737380;
`;

export const DetailButton = styled.TouchableOpacity`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

export const DetailButtonText = styled.Text`
  color: #e02041;
  font-size: 15px;
  font-weight: bold;
`;