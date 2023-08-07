import styled from 'styled-components/native';
import { RFValue } from 'react-native-responsive-fontsize';
import { SafeAreaView } from 'react-native-safe-area-context';

export const Container = styled.ImageBackground`
  flex: 1;
`;

export const Content = styled(SafeAreaView)`
  flex: 1;
  padding: ${RFValue(16)}px;
`;

export const Header = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: center;
`;

export const GoBackButton = styled.TouchableOpacity`
  position: absolute;
  left: 0;
`;

export const Title = styled.Text`
  text-align: center;
  align-self: center;
  font-size: ${RFValue(20)}px;
  font-weight: bold;
  color: ${({ theme }) => theme.colors.textPrimary};
`;

export const PokemonImage = styled.Image`
  align-self: center;
  height: ${RFValue(400)}px;
  width: ${RFValue(400)}px;
  margin-top: ${RFValue(80)}px;
`;

export const InfoContent = styled.View`
  gap: ${RFValue(16)}px;
`;

export const InfoWrapper = styled.View`
  flex-direction: row;
  align-items: center;
  gap: ${RFValue(8)}px;
`;

export const InfoName = styled.Text`
  font-size: ${RFValue(18)}px;
  font-weight: bold;
  text-transform: uppercase;
  color: ${({ theme }) => theme.colors.textPrimary};
`;

export const InfoType = styled.Text`
  font-size: ${RFValue(18)}px;
  font-weight: bold;
  text-transform: capitalize;
  color: ${({ theme }) => theme.colors.textPrimary};
`;

export const InfoTitle = styled.Text`
  font-size: ${RFValue(18)}px;
  font-weight: bold;
  color: ${({ theme }) => theme.colors.textPrimary};
`;
