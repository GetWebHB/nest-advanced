import {
  CanActivate,
  ExecutionContext,
  Inject,
  Injectable,
} from '@nestjs/common';
import { Reflector } from '@nestjs/core';
import { Observable } from 'rxjs';

@Injectable()
export class UsersGuardGuard implements CanActivate {
  @Inject(Reflector)
  private reflector: Reflector;

  canActivate(
    context: ExecutionContext,
  ): boolean | Promise<boolean> | Observable<boolean> {
    console.log('ice');
    const classMetadata = this.reflector.get('roles', context.getClass());
    const methodMetadata = this.reflector.get('roles', context.getHandler());

    console.log(classMetadata, methodMetadata);
    return true;
  }
}
