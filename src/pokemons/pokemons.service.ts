import { Injectable, Logger } from '@nestjs/common';
import { HttpService } from '@nestjs/axios';
import { NamedAPIResourceListDto } from './dto/named-API-resource-list.dto';
import { map } from 'rxjs/operators';
import { AxiosResponse } from 'axios';
import { Observable } from 'rxjs';
import { NamedAPIResourceDto } from './dto/named-API-resource.dto';
import { PokemonDto } from './dto/pokemon.dto';

const URL_API_POKEMON = 'https://pokeapi.co/api/v2/pokemon';
const LIMIT = 20;

@Injectable()
export class PokemonsService {
  private readonly logger = new Logger(PokemonsService.name);

  constructor(private readonly httpService: HttpService) {}

  /**
   * Récupère des X (Limit) pokemon de la page (pageNumber)
   * @param pageNumber
   */
  getPokemons(pageNumber = 0): Observable<NamedAPIResourceDto[]> {
    this.logger.log(
      'Returning ' + LIMIT + ' pokemon from page : ' + pageNumber,
    );

    const urlToCall =
      URL_API_POKEMON + '?limit=' + LIMIT + '&offset=' + pageNumber * LIMIT;
    return this.httpService
      .get<NamedAPIResourceListDto>(urlToCall)
      .pipe(
        map(
          (response: AxiosResponse<NamedAPIResourceListDto>) => response.data,
        ),
      )
      .pipe(map((data: NamedAPIResourceListDto) => data.results));
  }

  /**
   * Récupère les informations du Pokemon X (pokemonName)
   * @param pokemonName
   */
  getPokemon(pokemonName: string): Observable<PokemonDto> {
    this.logger.log('Returning pokemon with name : ' + pokemonName);

    const urlToCall = URL_API_POKEMON + '/' + pokemonName;
    return this.httpService
      .get(urlToCall)
      .pipe(map((response) => response.data))
      .pipe(
        map((data) => ({
          id: data.id,
          name: data.name,
          picture: data.sprites?.front_default,
        })),
      );
  }
}
