import { ApiProperty } from '@nestjs/swagger';

export class SigninDto {
  @ApiProperty({
    description: "Il s'agit d'une adresse mail",
    type: 'string',
    required: true,
  })
  public email: string;

  @ApiProperty({
    description: "Il s'agit du mot de passe qu'on va donner",
    type: 'string',
    required: true,
  })
  public password: string;
}
