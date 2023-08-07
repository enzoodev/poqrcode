import React, { useCallback } from 'react';
import { Pressable, StatusBar } from 'react-native';
import { useNavigation } from '@react-navigation/native';

import * as S from './styles';

export const Home: React.FC = () => {
  const navigation = useNavigation();

  const backgroundImageUrl =
    'https://animesonline.com.br/wp-content/uploads/2020/12/pokemon-go-wallpaper.jpg';

  const handleScan = useCallback(() => {
    navigation.navigate('Scanner');
  }, [navigation]);

  return (
    <S.Container source={{ uri: backgroundImageUrl }} resizeMode="cover">
      <StatusBar
        translucent
        barStyle="light-content"
        backgroundColor="transparent"
      />
      <S.Content>
        <S.Title>Enzo Mihael Damascena Santos</S.Title>
        <Pressable onPress={handleScan}>
          {({ pressed }) => (
            <S.Button pressed={pressed}>
              <S.ButtonScanText>Scannear</S.ButtonScanText>
              <S.ButtonScanQrCode>qrcode</S.ButtonScanQrCode>
            </S.Button>
          )}
        </Pressable>
      </S.Content>
    </S.Container>
  );
};
