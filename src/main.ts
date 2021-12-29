import { NestFactory } from '@nestjs/core';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  const config = new DocumentBuilder()
    .setTitle('Blog api')
    .setDescription("Il s'agit de l'api blog")
    .build();
  const doc = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('/apidoc', app, doc);
  await app.listen(3000);
}
bootstrap();
