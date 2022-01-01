import { ApiProperty } from '@nestjs/swagger';

export class CreateUserDto {
  @ApiProperty({
    description: "Le nom de l'utilisateur",
  })
  public lastname: string;

  @ApiProperty({
    description: "Le prénom de l'utilisateur",
  })
  public firstname: string;

  @ApiProperty({
    description: "L'image de l'utilisateur",
  })
  public profilPicture: string;

  @ApiProperty({
    description: "La date de naissance de l'utilisateur",
  })
  public birthday: string;
}
