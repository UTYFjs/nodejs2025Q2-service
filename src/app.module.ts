import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AlbumsModule } from './albums/albums.module';
import { ArtistsModule } from './artists/artists.module';
import { FavsModule } from './favs/favs.module';
import { TracksModule } from './tracks/tracks.module';
import { UsersModule } from './users/users.module';
import { DbModule } from './db/db.module';

@Module({
  imports: [
    AlbumsModule,
    ArtistsModule,
    FavsModule,
    TracksModule,
    UsersModule,
    DbModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
