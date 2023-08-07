import styled from 'styled-components/native';
import { RFValue } from 'react-native-responsive-fontsize';
import { SafeAreaView } from 'react-native-safe-area-context';

export const Container = styled.ImageBackground`
  flex: 1;
`;

export const Content = styled(SafeAreaView)`
  flex: 1;
  align-items: center;
  justify-content: space-between;
  padding: ${RFValue(32)}px ${RFValue(16)}px;
`;

export const Title = styled.Text`
  text-transform: uppercase;
  font-size: ${RFValue(14)}px;
  font-weight: bold;
  color: ${({ theme }) => theme.colors.title};
`;

export const Button = styled.View<{ pressed: boolean }>`
  flex-direction: row;
  align-items: center;
  gap: ${RFValue(4)}px;
  padding: ${RFValue(16)}px ${RFValue(8)}px;
  border-radius: ${RFValue(2)}px;
  background-color: ${({ theme, pressed }) =>
    pressed ? theme.colors.button_bg_active : theme.colors.button_bg};
`;

export const ButtonScanText = styled.Text`
  font-size: ${RFValue(14)}px;
  font-weight: bold;
  color: ${({ theme }) => theme.colors.button_text};
`;

export const ButtonScanQrCode = styled.Text`
  text-transform: uppercase;
  font-size: ${RFValue(14)}px;
  font-weight: bold;
  color: ${({ theme }) => theme.colors.button_text};
`;
