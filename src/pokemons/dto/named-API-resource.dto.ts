import { ApiPropertyOptional } from '@nestjs/swagger';

export class NamedAPIResourceDto {
  @ApiPropertyOptional({ type: String })
  readonly name: string;
}
