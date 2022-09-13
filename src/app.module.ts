import { Module } from '@nestjs/common';
import { PokemonsController } from './pokemons/pokemons.controller';
import { PokemonsService } from './pokemons/pokemons.service';

@Module({
  imports: [],
  controllers: [PokemonsController],
  providers: [PokemonsService],
})
export class AppModule {}
