import { Injectable } from '@angular/core';
import { Paths } from '../models/Paths';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { ActivatedRoute } from '@angular/router';
@Injectable({
  providedIn: 'root',
})
export class PathDataService {
  user: any = {
    token:
      'eyJhbGciOiJSUzI1NiIsImtpZCI6IkhBQWRPb3NIXzhBWnBycC15dTMxTkhpTjFTYWNndjRPclFaUEZrUUczbHMiLCJ0eXAiOiJKV1QifQ.eyJhdWQiOiJUUkFJTklORy1BTkQtVVBTS0lMTElORyIsImN1cnJlbnRSb2xlIjoic3R1ZGVudCIsImV4cCI6MTcxMDgyNTQwOCwiaWF0IjoxNzEwODI1MTA4LCJpc3MiOiJHT09HTEUiLCJvcmdhbml6YXRpb25JZCI6Miwicm9sZXMiOlsic3R1ZGVudCJdLCJzdWIiOiJjaGFuZGFuLnNhaGFAem9wc21hcnQuY29tIiwidXNlcklkIjozMzJ9.NlAnvnZjYx_7JFUMsc_DWmYdgSTmA2PAn9mHhfFfT01KJ_UL6WcARLBj73qPrGD_xLeD5PV19KoGaLrz7902K8i04_4PzSygfJ2_-a_uyS81fN6Q0xB1h3X3P5kIbPA9zF4oMx79UDhZUILTYm1Djz1ToIAJqOfmvNUCjecjcmWEvLo9gorPOeJXQmM0-MBOwj1ciypE8xP2Dbzo03obFzgOxR5J9_Wf4r6tM0TM3KzGKO9-9pgmxLsRbIP9FSZfHf2iY1DtvvuIru7fI3eklLaWfzfWwp_vZCf3YtdWwiasOYP5clc2kIn8IqmvMBhAQj8V-X9XJltD4mKZGl-y3g',
    refreshToken:
      'eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCJ9.eyJhdWQiOiJUUkFJTklORy1BTkQtVVBTS0lMTElORyIsImV4cCI6MTcxMDkxMTUwNywiaWF0IjoxNzEwODI1MTA3LCJpc3MiOiJHT09HTEUiLCJzdWIiOiJjaGFuZGFuLnNhaGFAem9wc21hcnQuY29tIn0.Ls0YkNH8aox3_TyvbBABVF-__W_k2q0Q7rFAPM2cgDkZTTAIIQWv0FG93vZTsCRjLREXZTsJKHS9iA3fxjp1uLY2YJfQ9uAS9sLKANJZ8UBwZJCh8-2uq6HfWcKRSk86oqh3UjlFLeqtpB-Nx2V9m-Fq_45dPcAHYGUPn1F7GzA9X-KZ_cieOQaJnxFPbA7stqnX29iruWPcogOsmDNNhRJnZn68WXfj3cLzaaftWPx4ODR-ccyzIB12ruvITrgKdrGWfTzuxL_ZJuv89nVyVMFlHY2OqQKalu5rIgjIxr-SqqhPsuTM0ucqMrCDDV_oxdbkyD9_1bQriEbhL6LKtw',
  };

  refreshHeader = new HttpHeaders({
    'Content-Type': 'application/json',
    refreshtoken: this.user.refreshToken,

    'Referrer-Policy': 'strict-origin-when-cross-origin',
  });

  constructor(private http: HttpClient, private route: ActivatedRoute) {}

  url: string = 'https://api.training.zopsmart.com/students/paths';

  getPaths() {
    return this.http.get(this.url + '?pageSize=10&pageNo=1');
  }

  getPathData(id: string) {
    return this.http.get(this.url + id + '?projection=course');
  }
  getAllPaths() {
    return this.http.get((this.url = '?pageSize=12&pageNo=1'));
  }
  getEnrolledPaths() {
    return this.http.get(
      'https://api.training.zopsmart.com/students/enrolled-paths'
    );
  }
  getRefreshToken() {
    return this.http.post(
      'https://api.training.zopsmart.com/login/refresh',
      {
        organizationId: 2,
        currentRole: 'student',
      },
      {
        headers: this.refreshHeader,
      }
    );
  }
}
