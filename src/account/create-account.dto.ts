import { ApiProperty } from '@nestjs/swagger';

export class CreateAccountDto {
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

  @ApiProperty({
    description: "Le nom de l'utilisateur",
    type: 'string',
    required: true,
  })
  public lastname: string;

  @ApiProperty({
    description: "Le prénom de l'utilisateur",
    type: 'string',
    required: true,
  })
  public firstname: string;

  @ApiProperty({
    description: "L'image de l'utilisateur",
    type: 'string',
    required: true,
    example: 'www.google.fr/image.png',
  })
  public profilPicture: string;

  @ApiProperty({
    description: "La date de naissance de l'utilisateur",
    type: 'string',
    required: true,
    example: '09/03/1997',
  })
  public birthday: string;
}
