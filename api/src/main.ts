import { NestFactory, Reflector } from '@nestjs/core';
import { AppModule } from './app.module';
import { ironSession } from 'next-iron-session';
import { SessionGuard } from './common/guards/session.guard';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  const reflector = app.get(Reflector);
  app.useGlobalGuards(new SessionGuard(reflector));

  app.use(
    ironSession({
      cookieName: 'twitter.sid',
      password: process.env.COOKIE_PASSWORD,
      cookieOptions: {
        secure: process.env.NODE_ENV === 'production',
      },
    }),
  );

  await app.listen(4000);
}
bootstrap();
