import {Controller, Get, Param, Query} from '@nestjs/common';
import {PokemonsService} from "./pokemons.service";
import {QueryListDto} from "./dto/query-list.dto";

@Controller('pokemons')
export class PokemonsController {
    constructor(private pokemonsService: PokemonsService) { }

    @Get()
    async getPokemons(@Query() query : QueryListDto) {
        return this.pokemonsService.getPokemons(query.page);
    }

    @Get(':pokemonName')
    async getPokemon(@Param('pokemonName') pokemonName : string) {
        return this.pokemonsService.getPokemon(pokemonName);
    }
}
