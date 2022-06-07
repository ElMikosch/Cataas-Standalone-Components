import { Injectable } from '@angular/core';

@Injectable()
export class CatGetterService {
  public getCat(message?: string): Promise<string> {
    return new Promise<string>(async (resolve, reject) => {
      const uri = message ? `https://cataas.com/cat/says/${message}` : "https://cataas.com/cat"
      const catResponse = await fetch(
        encodeURI(uri),
        {
          cache: 'no-cache',
        }
      );
      const catBlob = await catResponse.blob();
      const reader = new FileReader();
      reader.readAsDataURL(catBlob);
      reader.onloadend = async () => {
        resolve(<string>reader.result);
      }
    });
  }
}
