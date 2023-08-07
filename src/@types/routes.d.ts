import { PokemonDTO } from '@dtos/pokemon';

interface StackRoutes {
  Home: undefined;
  Scanner: undefined;
  PokemonDetails: { pokemon: PokemonDTO };
}

export declare global {
  namespace ReactNavigation {
    // eslint-disable-next-line @typescript-eslint/no-empty-interface
    interface RootParamList extends StackRoutes {}
  }
}
