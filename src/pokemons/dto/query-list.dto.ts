import { ApiPropertyOptional } from '@nestjs/swagger';

const LIMIT = 20;

export class QueryListDto {
  @ApiPropertyOptional({ type: Number })
  readonly page: number;

  @ApiPropertyOptional({ type: Number })
  readonly limit: number = LIMIT;
}
