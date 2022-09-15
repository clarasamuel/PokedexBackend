import { ApiPropertyOptional } from '@nestjs/swagger';
import { NamedAPIResourceDto } from './named-API-resource.dto';

export class NamedAPIResourceListDto {
  @ApiPropertyOptional({ type: Number })
  readonly count: number;

  @ApiPropertyOptional({ type: String })
  readonly next: string;

  @ApiPropertyOptional({ type: String })
  readonly previous: string;

  @ApiPropertyOptional({ type: [NamedAPIResourceDto] })
  readonly results: NamedAPIResourceDto[];
}
