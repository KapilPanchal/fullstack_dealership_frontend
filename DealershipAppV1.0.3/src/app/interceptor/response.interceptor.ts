import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
  HttpResponse
} from '@angular/common/http';
import { map, Observable } from 'rxjs';
import { deserialize } from 'jsonapi-deserializer';

@Injectable()
export class ResponseInterceptor implements HttpInterceptor {

  constructor() {}

  intercept(request: HttpRequest<any>, next: HttpHandler): 
                                            Observable<HttpEvent<any>> {
    return next.handle(request).pipe(
      map((event: HttpEvent<any>) => {
        if(event instanceof HttpResponse){
          event = event.clone({
              // body: this.modifyBody(event)
            })
        }
        return event;
      })
    );
  }

  // modifyBody(body: body) {
  //   if(!body){
  //     return (body);
  //   }
  //   return{...body, data:deserialize(body)}
  // }
}

