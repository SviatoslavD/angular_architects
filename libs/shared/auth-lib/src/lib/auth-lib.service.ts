import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthLibService {
  private userName: string | null = null;

  public $userChanged: Subject<void> = new Subject();
  // onUserChanged: Observable<void> = this.$userChanged.asObservable();

  public get user(): string | null {
    return this.userName;
  }

  public login(userName: string, password: string): void {
    // Authentication for **honest** users TM. (c) Manfred Steyer
    this.userName = userName;
    this.$userChanged.next();
  }

  public logUser(): void {
    console.log(this.user);
  }
}
