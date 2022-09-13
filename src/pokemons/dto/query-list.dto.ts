import {ApiPropertyOptional} from "@nestjs/swagger";

export class QueryListDto {
    @ApiPropertyOptional({ type: Number })
    readonly page: number;
}
