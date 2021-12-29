import { ApiProperty } from '@nestjs/swagger';

export class CreateRulesDto {
  @ApiProperty({
    description: "Il s'agit du role qu'on souhaite ajouter",
    required: true,
    type: 'string',
  })
  public rule: string;
}
