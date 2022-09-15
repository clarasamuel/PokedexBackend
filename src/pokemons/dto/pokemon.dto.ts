import { ApiPropertyOptional } from '@nestjs/swagger';

export class PokemonDto {
  @ApiPropertyOptional({ type: Number })
  readonly id: number;

  @ApiPropertyOptional({ type: String })
  readonly name: string;

  @ApiPropertyOptional({ type: String })
  readonly picture: string;
}
