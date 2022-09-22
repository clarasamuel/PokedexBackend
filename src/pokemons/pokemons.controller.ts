import { Controller, Get, Param, Query } from '@nestjs/common';
import { PokemonsService } from './pokemons.service';
import { QueryListDto } from './dto/query-list.dto';
import { forkJoin, Observable, switchMap } from 'rxjs';
import { PokemonDto } from './dto/pokemon.dto';

const LIMIT = 20;

@Controller('pokemons')
export class PokemonsController {
  constructor(private pokemonsService: PokemonsService) {}

  @Get()
  getPokemons(@Query() query: QueryListDto) {
    const observablePokemons = this.pokemonsService.getPokemons(
      LIMIT,
      query.page,
    );

    const tab = [];
    for (let index = 0; index < LIMIT; index++) {
      tab.push(
        observablePokemons.pipe(
          switchMap((reponse) => {
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
