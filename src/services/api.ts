import axios, { AxiosResponse } from 'axios';
import { Response } from 'ts-retrofit';

import { PokemonDTO } from '@dtos/pokemon';

const baseURL = 'https://pokeapi.co/api/v2';

class PokemonService {
  private axiosInstance = axios.create({ baseURL });

  async getPokemon(id: number): Promise<Response<PokemonDTO>> {
    const response: AxiosResponse<PokemonDTO> = await this.axiosInstance.get(
      `/pokemon/${id}`,
    );

    return {
      data: response.data,
      status: response.status,
      statusText: response.statusText,
      headers: response.headers,
      config: response.config as any,
    };
  }
}

export const pokemonService = new PokemonService();
