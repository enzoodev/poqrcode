import styled from 'styled-components/native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { RFValue } from 'react-native-responsive-fontsize';

export const Container = styled(SafeAreaView)`
  flex: 1;
  background-color: #000;
  padding: ${RFValue(32)}px ${RFValue(16)}px;
  justify-content: space-between;
`;

export const Content = styled.View`
  flex: 1;
  align-items: center;
  justify-content: center;
`;

export const ScanInfo = styled.Text`
  font-size: ${RFValue(15)}px;
  font-weight: 500;
  color: ${({ theme }) => theme.colors.textSecondary};
  margin-top: ${RFValue(16)}px;
`;

export const CodeScannerWrapper = styled.View`
  height: ${RFValue(320)}px;
  width: ${RFValue(240)}px;
`;

export const Load = styled.ActivityIndicator`
  margin-top: ${RFValue(16)}px;
`;
