import { ExecutionContext, Injectable } from '@nestjs/common';
import { Reflector } from '@nestjs/core';
import { GqlExecutionContext } from '@nestjs/graphql';
import { Observable } from 'rxjs';

@Injectable()
export class SessionGuard {
  public constructor(private readonly reflector: Reflector) {}

  canActivate(
    context: ExecutionContext,
  ): boolean | Promise<boolean> | Observable<boolean> {
    const isPublicRoute = this.reflector.get<boolean>(
      'public-route',
      context.getHandler(),
    );

    if (isPublicRoute) {
      return true;
    }

    const ctx = GqlExecutionContext.create(context);
    const { request } = ctx.getContext();
    const user = request.session.get('user');
    if (user) return true;

    return false;
  }
}
