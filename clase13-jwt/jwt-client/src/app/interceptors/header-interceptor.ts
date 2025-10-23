import { HttpInterceptorFn } from '@angular/common/http';

export const headerInterceptor: HttpInterceptorFn = (req, next) => {
  console.log(req.url);

  // No sirve porque la HttpRequest es INMUTABLE:
  // req.headers.append('Content-Type', 'application/json');
  // req.headers.append('Authorization', 'Bearer ' + localStorage.getItem('token'));

  const nuevaRequest = req.clone({
    headers: req.headers.set('Authorization', 'Bearer ' + localStorage.getItem('token')),
    credentials: 'include',
  });

  return next(nuevaRequest);
};
