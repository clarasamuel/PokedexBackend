import { Controller, Get, Param, Query } from '@nestjs/common';
import { PokemonsService } from './pokemons.service';
import { QueryListDto } from './dto/query-list.dto';
import { forkJoin, Observable, switchMap } from 'rxjs';
import { PokemonDto } from './dto/pokemon.dto';
import { NamedAPIResourceDto } from './dto/named-API-resource.dto';

@Controller('pokemons')
export class PokemonsController {
  constructor(private pokemonsService: PokemonsService) {}

  @Get()
  getPokemons(@Query() query: QueryListDto): Observable<PokemonDto[]> {
    const observablePokemons: Observable<NamedAPIResourceDto[]> =
      this.pokemonsService.getPokemons(query.limit, query.page);

    const tab: Observable<PokemonDto>[] = [];
    for (let index = 0; index < query.limit; index++) {
      tab.push(
        observablePokemons.pipe(
          switchMap((reponse: NamedAPIResourceDto[]) => {
            return this.pokemonsService.getPokemon(reponse[index].name);
          }),
        ),
      );
    }

    return forkJoin(tab);
  }

  @Get(':pokemonName')
  getPokemon(
    @Param('pokemonName') pokemonName: string,
  ): Observable<PokemonDto> {
    return this.pokemonsService.getPokemon(pokemonName);
  }
}
