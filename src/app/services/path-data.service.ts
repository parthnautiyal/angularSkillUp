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
      'eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCJ9.eyJhdWQiOiJUUkFJTklORy1BTkQtVVBTS0lMTElORyIsImV4cCI6MTcxMTI2MDAzNywiaWF0IjoxNzExMTczNjM3LCJpc3MiOiJHT09HTEUiLCJzdWIiOiJuYW1hbi5ndXB0YUB6b3BzbWFydC5jb20ifQ.Px9Q2G_LEWWvxW5fzn-8zJlauk5TT0Da2iOMOo1iNYuqDTPhvgGNIhGnSO13xshNccm2fm3MRyJIsoeIGE5GL8hFHquS01iXAEskf4zjx3bVb1tAuO0yX2z6Jo1nCflSHA1AlALL0qslGnQe3pA2P4N11J9IYFWdb65gxZtJJbQ3M_Kb9OXJtDU3VwI9gtr6lYfcoGMxOWEsj4fTAwnI6XWk0tB6MONYqD7azDD6tg9Ayg1u0eBLVleac6cb8GXrkYLi9rkpJfiRQRNcZPiaLjvAqkcVrJnRAZTeKFH55jiKT3KI9I8Ej1jlZnCtLALLpOLyeyu5E3kLUBO4ZN9UVQ',
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
