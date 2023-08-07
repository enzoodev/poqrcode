import React from 'react';

import * as S from './styles';

interface Props {
  children: React.ReactNode;
}

export const BorderedWrapper = React.memo(({ children }: Props) => {
  return (
    <S.Container>
      <S.Content>{children}</S.Content>
      <S.TopLeftHorizontalBorder />
      <S.TopLeftVerticalBorder />
      <S.TopRightHorizontalBorder />
      <S.TopRightVerticalBorder />
      <S.BottomLeftHorizontalBorder />
      <S.BottomLeftVerticalBorder />
      <S.BottomRightHorizontalBorder />
      <S.BottomRightVerticalBorder />
    </S.Container>
  );
});
