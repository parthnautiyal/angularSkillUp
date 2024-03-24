import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { ActivatedRoute } from '@angular/router';
@Injectable({
  providedIn: 'root',
})
export class PathDataService {
  user: any = {
    token:
      'eyJhbGciOiJSUzI1NiIsImtpZCI6IkhBQWRPb3NIXzhBWnBycC15dTMxTkhpTjFTYWNndjRPclFaUEZrUUczbHMiLCJ0eXAiOiJKV1QifQ.eyJhdWQiOiJUUkFJTklORy1BTkQtVVBTS0lMTElORyIsImN1cnJlbnRSb2xlIjoic3R1ZGVudCIsImV4cCI6MTcxMTE3MzkzNywiaWF0IjoxNzExMTczNjM3LCJpc3MiOiJHT09HTEUiLCJvcmdhbml6YXRpb25JZCI6Miwicm9sZXMiOlsic3R1ZGVudCJdLCJzdWIiOiJuYW1hbi5ndXB0YUB6b3BzbWFydC5jb20iLCJ1c2VySWQiOjMyN30.I7PeGHmCRWRz33_o5hu63u8oOjdJDZJG_w318QRhXGoUkBxWfLMWfnjwTO1Nl17FCFucZaBkEEtB2jlBmLYxyzQjnbcZ5jt2Eqc3BQyk5STgcWhmP1nTTUIA8AmGigaKDapkFX_XLbwd6jhT2PGcNkwadhg8EtqE3h5MwMwDnMz0-g5_Xg2sqy3Tcw038ApqBwA_f2LDqAA7kyOO4kJicBUDBSmP2y52ARawS-kUAP34AEVlkw8pZZKCiqs33GgYaSZEauWJtPHapQAnvVn3RezjnSt-Nr_O3plzdjpHKPCujXYpq-KjzN_-9JewwbVJlPcAOQ7iMcATHA-HaRCeNA',
    refreshToken:
      'eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCJ9.eyJhdWQiOiJUUkFJTklORy1BTkQtVVBTS0lMTElORyIsImV4cCI6MTcxMTMwNDQ0OCwiaWF0IjoxNzExMjE4MDQ4LCJpc3MiOiJHT09HTEUiLCJzdWIiOiJwYXJ0aC5uYXV0aXlhbEB6b3BzbWFydC5jb20ifQ.Ha8EwUdD53tBB_S8HvCg7YjSwXJLqv1KAcnXFpV-bmLj0qGrINqnKiyGZRJIkYidKUFuzxqxv7vhd95ZCAMkLhOL8fL-NAR2AUr_O_urt1x-T4oevNNPgEmLC3Zs9qqOVeYWJvMkGiEhCYqtiVY3Y8IVpmv9gsK5Mz6p6w_fx6ea8HrmP4V8MGGxO7SBHMB0A6CJ--wQ13idn4Lv0Z6LuD-wUN-v78nbm9a8jGZTdva1nr0jkxaZNGKkWEnNwNapX_vggtdjXsmqJ2BKPZVDiVnmeMHRJJnpg9xbwnt4iTfrj6FJii5km4VjMKNhj8fuDHfCI-gZ9tpjKtjNHPu3Pw',
  };

  refreshHeader = new HttpHeaders({
    'Content-Type': 'application/json',
    refreshtoken: this.user.refreshToken,

    'Referrer-Policy': 'strict-origin-when-cross-origin',
  });
  url: string = 'https://api.training.zopsmart.com/students/paths';

  constructor(private http: HttpClient, private route: ActivatedRoute) {
    // setInterval(() => {
    //   this.getRefreshToken().subscribe((res: any) => {
    //     localStorage.setItem('token', res.data.accessToken);
    //     console.log('token refreshed');
    //   });
    // }, 60000);
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
