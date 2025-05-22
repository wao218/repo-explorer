import { createParamDecorator, ExecutionContext } from '@nestjs/common';
import { User as UserType } from '../../../generated/prisma';

import type { Request } from 'express';

interface AuthenticatedRequest extends Request {
  user: UserType;
}

export const User = createParamDecorator(
  (
    data: keyof UserType | undefined,
    ctx: ExecutionContext,
  ): UserType | UserType[keyof UserType] => {
    const request = ctx.switchToHttp().getRequest<AuthenticatedRequest>();
    if (data) {
      return request.user[data];
    }
    return request.user;
  },
);
