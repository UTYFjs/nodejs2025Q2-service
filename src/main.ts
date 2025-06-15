import { NestFactory, Reflector } from '@nestjs/core';
import { AppModule } from './app.module';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { ClassSerializerInterceptor, ValidationPipe } from '@nestjs/common';
import 'dotenv/config';
import { MyLoggerService } from './logger/logger.service';

const PORT = process.env.PORT || 4000;

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  //for validation
  app.useGlobalPipes(new ValidationPipe());
  app.useGlobalInterceptors(new ClassSerializerInterceptor(app.get(Reflector)));
  app.useLogger(new MyLoggerService());

  const logger = app.get(MyLoggerService);
  process.on('uncaughtException', (err: Error) => {
    logger.error(err.message, err.stack, 'uncaughtException');
  });
  process.on('unhandledRejection ', (err: Error) => {
    logger.error(err.message, err.stack, 'unhandledRejection');
  });

  const config = new DocumentBuilder()
    .addBearerAuth({
      type: 'http',
      description:
        'Paste here your valid access token. For get access token -> sighup -> login (with login and password) -> get access and refresh token',
    })
    .setTitle('Home Library Service')
    .addTag('auth')
    .setDescription('Home music library service')
    .setVersion('1.0.0')
    .build();
  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('doc', app, document);

  await app.listen(PORT);
  console.log(`Server is running at http://localhost:${PORT}`);
  console.log(`Swagger docs available at http://localhost:${PORT}/doc`);
  console.log(`The connection URL DB is ${process.env.DATABASE_URL}`);
}
bootstrap();
