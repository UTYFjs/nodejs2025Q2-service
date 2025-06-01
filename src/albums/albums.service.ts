import {
  Injectable,
  InternalServerErrorException,
  NotFoundException,
} from '@nestjs/common';
import { CreateAlbumDto } from './dto/create-album.dto';
import { UpdateAlbumDto } from './dto/update-album.dto';
import { DbService } from 'src/db/db.service';
import { AlbumConstants } from 'src/constants/constants';

@Injectable()
export class AlbumsService {
  constructor(private readonly db: DbService) {}
  create(createAlbumDto: CreateAlbumDto) {
    const createdAlbum = this.db.createAlbum(createAlbumDto);
    return createdAlbum;
  }

  findAll() {
    const allAlbums = this.db.findAllAlbums();
    return allAlbums;
  }

  findOne(id: string) {
    const album = this.db.findOneAlbum(id);
    if (!album) {
      throw new NotFoundException(AlbumConstants.NOT_FOUND_MESSAGE);
    }

    return album;
  }

  update(id: string, updateAlbumDto: UpdateAlbumDto) {
    const album = this.db.findOneAlbum(id);
    if (!album) {
      throw new NotFoundException(AlbumConstants.NOT_FOUND_MESSAGE);
    }
    const updatedAlbum = this.db.updateAlbum(id, updateAlbumDto);
    if (!updatedAlbum) {
      throw new InternalServerErrorException('something went wrong');
    }
    return updatedAlbum;
  }

  remove(id: string) {
    const album = this.db.findOneAlbum(id);
    if (!album) {
      throw new NotFoundException(AlbumConstants.NOT_FOUND_MESSAGE);
    }
    try {
      // this.favsService.remove('album', id);
    } catch (err) {}

    const isRemoved = this.db.removeAlbum(id);
    if (!isRemoved) {
      throw new InternalServerErrorException('something went wrong');
    }

    return;
  }
  removeArtistId(artistId: string) {
    const albums = this.db.findAllAlbums();
    const selectedAlbums = albums.filter(
      (album) => album.artistId === artistId,
    );
    selectedAlbums.forEach((album) => (album.artistId = null));
  }
  isExist(id: string) {
    const album = this.db.findOneAlbum(id);
    return album ? true : false;
  }
}
