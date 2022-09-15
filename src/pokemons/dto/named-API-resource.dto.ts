import { ApiPropertyOptional } from '@nestjs/swagger';

export class NamedAPIResourceDto {
  @ApiPropertyOptional({ type: String })
  readonly name: string;

  @ApiPropertyOptional({ type: String })
  readonly url: string;
}
