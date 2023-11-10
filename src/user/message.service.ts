import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class MessageService {
  constructor() {}

  afficherMessage(): String {
    return 'Service Message Service marche';
  }
}
