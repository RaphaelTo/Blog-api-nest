import { ApiProperty } from '@nestjs/swagger';

export class UpdateUserDto {
  @ApiProperty({
    description: "Le nom de l'utilisateur",
    required: false,
    type: 'string',
  })
  public lastname?: string;

  @ApiProperty({
    description: "Le prénom de l'utilisateur",
    required: false,
    type: 'string',
  })
  public firstname?: string;

  @ApiProperty({
    description: "L'image de l'utilisateur",
    required: false,
    type: 'string',
    example: 'https://image/image.jpg',
  })
  public profilPicture?: string;

  @ApiProperty({
    description: "La date de naissance de l'utilisateur",
    required: false,
    type: 'string',
    example: '08/11/1979',
  })
  public birthday?: string;
}
