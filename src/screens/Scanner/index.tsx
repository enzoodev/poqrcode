import React, { useState, useEffect, useCallback } from 'react';
import { Alert, TouchableOpacity, StatusBar } from 'react-native';
import { BarCodeScannedCallback, BarCodeScanner } from 'expo-barcode-scanner';
import { RFValue } from 'react-native-responsive-fontsize';
import { useFocusEffect, useNavigation } from '@react-navigation/native';
import { useTheme } from 'styled-components/native';
import { Feather } from '@expo/vector-icons';

import { pokemonService } from '@services/api';

import { BorderedWrapper } from '@components/BorderedWrapper';

import * as S from './styles';

export const Scanner: React.FC = () => {
  const [hasPermission, setHasPermission] = useState(false);
  const [scanned, setScanned] = useState(false);
  const [isLoadingScan, setIsLoadingScan] = useState(false);
  const navigation = useNavigation();
  const theme = useTheme();

  const handleGoBack = useCallback(() => {
    navigation.goBack();
  }, [navigation]);

  useEffect(() => {
    (async () => {
      const { status } = await BarCodeScanner.requestPermissionsAsync();
      setHasPermission(status === 'granted');

      if (status === 'denied') {
        handleGoBack();

        return Alert.alert(
          'Poqrcode',
          'Permita acesso a câmera para poder escanear o qrcode.',
        );
      }
    })();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const handleBarCodeScanned: BarCodeScannedCallback = useCallback(
    async ({ data }) => {
      setScanned(true);

      try {
        setIsLoadingScan(true);

        const id = parseInt(data.split(': ')[1]);
        const response = await pokemonService.getPokemon(id);

        navigation.navigate('PokemonDetails', { pokemon: response.data });
      } catch (error) {
        return Alert.alert('Poqrcode', 'Não foi possível escanear o qrcode.');
      } finally {
        setIsLoadingScan(false);
      }
    },
    [navigation],
  );

  useFocusEffect(
    useCallback(() => {
      setScanned(false);
    }, []),
  );

  return (
    <S.Container>
      <StatusBar
        translucent
        barStyle="light-content"
        backgroundColor="transparent"
      />
      <TouchableOpacity onPress={handleGoBack}>
        <Feather
          name="chevron-left"
          size={RFValue(28)}
          color={theme.colors.button_bg}
        />
      </TouchableOpacity>
      <S.Content>
        {hasPermission && (
          <BorderedWrapper>
            <S.CodeScannerWrapper>
              <BarCodeScanner
                onBarCodeScanned={scanned ? undefined : handleBarCodeScanned}
                style={{ flex: 1 }}
              />
            </S.CodeScannerWrapper>
          </BorderedWrapper>
        )}
        {isLoadingScan ? (
          <S.Load color={theme.colors.textSecondary} />
        ) : (
          <S.ScanInfo>Aponte a câmera para o código QR</S.ScanInfo>
        )}
      </S.Content>
    </S.Container>
  );
};
