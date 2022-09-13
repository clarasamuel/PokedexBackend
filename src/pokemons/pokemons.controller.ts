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

    @Get(':pokemonID')
    async getPokemon(@Param('pokemonID') pokemonID : number) {
        return this.pokemonsService.getPokemon(pokemonID);
    }
}
