import { ApiProperty } from '@nestjs/swagger';

export const enum AlbumConstants {
  NOT_FOUND_MESSAGE = 'Album was not found',
  OK_MESSAGE = 'Successful',
  BAD_REQUEST_MESSAGE = 'AlbumId is not uuid',
  BAD_REQUEST_POST_MESSAGE = 'Request body does not contains required fields',
  NO_CONTENT_MESSAGE = 'Album removed',
  PUT_SUMMARY = 'Update a album with specified Id',
  POST_SUMMARY = 'Create new album',
  DELETE_SUMMARY = 'Delete a album with specific Id',
  GET_ONE_SUMMARY = 'Get one album with specific Id',
  GET_ALL_SUMMARY = 'Get all albums',
}

export const enum UserConstants {
  NOT_FOUND_MESSAGE = 'User was not found',
  OK_MESSAGE = 'Successful',
  BAD_REQUEST_MESSAGE = 'UserId is not uuid',
  BAD_REQUEST_POST_MESSAGE = 'Request body does not contains required fields',
  NO_CONTENT_MESSAGE = 'User removed',
  PUT_SUMMARY = 'Update a user with specified Id',
  POST_SUMMARY = 'Create new user',
  DELETE_SUMMARY = 'Delete a user with specific Id',
  GET_ONE_SUMMARY = 'Get one user with specific Id',
  GET_ALL_SUMMARY = 'Get all users',
  FORBIDDEN_MESSAGE = 'Old password is wrong',
}
export class ErrorType {
  @ApiProperty({
    description: 'Status code of error',
    format: 'number',
  })
  statusCode: number;
  @ApiProperty({
    description: 'Error message',
    format: 'string',
  })
  message: string;
  @ApiProperty({
    description: 'Error',
    format: 'string',
  })
  error: string;
}
