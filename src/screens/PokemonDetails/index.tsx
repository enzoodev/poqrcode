import React, { useCallback, useState } from 'react';
import { Alert, RefreshControl, ScrollView, StatusBar } from 'react-native';
import { useNavigation, useRoute } from '@react-navigation/native';
import { Feather } from '@expo/vector-icons';
import { useTheme } from 'styled-components/native';
import { RFValue } from 'react-native-responsive-fontsize';

import { PokemonDTO } from '@dtos/pokemon';
import { pokemonService } from '@services/api';

import * as S from './styles';

type RouteParams = {
  pokemon: PokemonDTO;
};

export const PokemonDetails: React.FC = () => {
  const route = useRoute();
  const { pokemon } = route.params as RouteParams;
  const [pokemonData, setPokemonData] = useState(pokemon);
  const [isFetching, setIsFetching] = useState(false);
  const navigation = useNavigation();
  const theme = useTheme();

  const backgroundImageUrl =
    'https://animesonline.com.br/wp-content/uploads/2020/12/pokemon-go-wallpaper.jpg';

  const handleGoBack = useCallback(() => {
    navigation.navigate('Home');
  }, [navigation]);

  const handleRefetchData = useCallback(async () => {
    try {
      setIsFetching(true);

      const { data } = await pokemonService.getPokemon(pokemon.id);
      setPokemonData(data);
    } catch (error) {
      return Alert.alert(
        'Poqrcode',
        'Não foi possível atualizar os dados do pokemon.',
      );
    } finally {
      setIsFetching(false);
    }
  }, [pokemon.id]);

  return (
    <S.Container source={{ uri: backgroundImageUrl }} resizeMode="cover">
      <StatusBar
        translucent
        barStyle="light-content"
        backgroundColor="transparent"
      />
      <ScrollView
        refreshControl={
          <RefreshControl
            refreshing={isFetching}
            onRefresh={handleRefetchData}
          />
        }
      >
        <S.Content>
          <S.Header>
            <S.GoBackButton onPress={handleGoBack}>
              <Feather
                name="chevron-left"
                size={RFValue(28)}
                color={theme.colors.button_bg}
              />
            </S.GoBackButton>
            <S.Title>ID: {pokemonData.id}</S.Title>
          </S.Header>
          <S.PokemonImage
            source={{
              uri: pokemonData.sprites.front_default,
              cache: 'only-if-cached',
            }}
          />
          <S.InfoContent>
            <S.InfoWrapper>
              <S.InfoTitle>Name:</S.InfoTitle>
              <S.InfoName>{pokemonData.name}</S.InfoName>
            </S.InfoWrapper>
            <S.InfoWrapper>
              <S.InfoTitle>Type:</S.InfoTitle>
              <S.InfoType>{pokemonData.types[0].type.name}</S.InfoType>
            </S.InfoWrapper>
          </S.InfoContent>
        </S.Content>
      </ScrollView>
    </S.Container>
  );
};
