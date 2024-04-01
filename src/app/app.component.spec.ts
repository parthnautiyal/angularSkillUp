import { ComponentFixture, fakeAsync, TestBed, tick } from '@angular/core/testing';
import { AppComponent } from './app.component';
import { MiscellaneousService } from './services/miscellaneous.service';
import { interval, of } from 'rxjs';

describe('AppComponent', () => {
  let component: AppComponent;
  let fixture: ComponentFixture<AppComponent>;
  let mockMiscellaneousService: jasmine.SpyObj<MiscellaneousService>;

  beforeEach(async () => {
    const misSpy = jasmine.createSpyObj('MiscellaneousService', ['getRefreshToken']);

    await TestBed.configureTestingModule({
      declarations: [AppComponent],
      providers: [{ provide: MiscellaneousService, useValue: misSpy }],
    }).compileComponents();

    mockMiscellaneousService = TestBed.inject(MiscellaneousService) as jasmine.SpyObj<MiscellaneousService>;
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AppComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create the app', () => {
    expect(component).toBeTruthy();
  });

  it('should call getRefreshToken and update localStorage with new token', () => {
    const mockTokenResponse = { data: { accessToken: 'newAccessToken' } };

    mockMiscellaneousService.getRefreshToken.and.returnValue(of(mockTokenResponse));

    interval(60000)
      .subscribe(() => {
        expect(localStorage.getItem('token')).toEqual(mockTokenResponse.data.accessToken);
      });
  });

  it('should update loggedIn property based on handleEvent method', () => {
    expect(component.loggedIn).toBeTrue();

    component.handleEvent(false);

    expect(component.loggedIn).toBeFalse();
  });

  it('should do something when runTest is called', () => {
    let i = 0;

    component.runTest(i);
  })

  describe('constructor', () => {
    it('should call getRefreshToken and update localStorage with new token', () => {
      const mockTokenResponse = { data: { accessToken: 'newAccessToken' } };

      mockMiscellaneousService.getRefreshToken.and.returnValue(of(mockTokenResponse));

      const setItemSpy = spyOn(localStorage, 'setItem').and.callThrough();

      const appComponent = new AppComponent(mockMiscellaneousService);

      expect(setItemSpy).toHaveBeenCalledWith('token', mockTokenResponse.data.accessToken);
    });
  });
});
