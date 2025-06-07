// import { Injectable } from '@nestjs/common';
// import { PrismaClient } from '@prisma/client';

import { Injectable } from '@nestjs/common';
import { PrismaClient } from 'generated/prisma';

@Injectable()
export class PrismaService extends PrismaClient {}
