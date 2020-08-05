import { TestBed } from '@angular/core/testing';
import { Pipe, PipeTransform } from '@angular/core'
import { AuthGuard } from './auth.guard';

describe('AuthGuard', () => {
  let guard: AuthGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(AuthGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });

  @Pipe({
    name: 'selector-name'
  })

});
