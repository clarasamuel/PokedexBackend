import {Injectable, Logger} from '@nestjs/common';

@Injectable()
export class PokemonsService {
    private readonly logger = new Logger(PokemonsService.name);

    getPokemons(pageNumber: number = 0): string {
        this.logger.log('Returning pokemon from page : ' + pageNumber);
        return 'Pokemons - page : ' + pageNumber;
    }

    getPokemon(pokemonID : number) : string{
        this.logger.log('Returning pokemon with id : ' + pokemonID);
        return 'A Pokemon - id : ' + pokemonID;
    }
}
