import { Controller, Get, Param, Query } from '@nestjs/common';
import { PokemonsService } from './pokemons.service';
import { QueryListDto } from './dto/query-list.dto';
import { Observable } from 'rxjs';
import { NamedAPIResourceDto } from './dto/named-API-resource.dto';
import { PokemonDto } from './dto/pokemon.dto';

@Controller('pokemons')
export class PokemonsController {
  constructor(private pokemonsService: PokemonsService) {}

  @Get()
  getPokemons(@Query() query: QueryListDto): Observable<NamedAPIResourceDto[]> {
    return this.pokemonsService.getPokemons(query.page);
  }

  @Get(':pokemonName')
  getPokemon(
    @Param('pokemonName') pokemonName: string,
  ): Observable<PokemonDto> {
    return this.pokemonsService.getPokemon(pokemonName);
  }
}
