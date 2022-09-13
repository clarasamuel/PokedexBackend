import {Injectable, Logger} from '@nestjs/common';
import {HttpService} from "@nestjs/axios";
import {NamedAPIResourceListDto} from "./dto/named-API-resource-list.dto";
import {map} from "rxjs/operators";
import {Observable} from "rxjs";

const URL_API_POKEMON = "https://pokeapi.co/api/v2/pokemon";

@Injectable()
export class PokemonsService {
    private readonly logger = new Logger(PokemonsService.name);

    constructor(private readonly httpService: HttpService) {}

    async getPokemons(pageNumber: number = 0): Promise<Observable<NamedAPIResourceListDto>>{
        this.logger.log('Returning pokemon from page : ' + pageNumber);
        return await this.httpService.get<NamedAPIResourceListDto>(URL_API_POKEMON)
            .pipe(map(response => response.data))
    }

    getPokemon(pokemonID : number) : string{
        this.logger.log('Returning pokemon with id : ' + pokemonID);
        return 'A Pokemon - id : ' + pokemonID;
    }
}
