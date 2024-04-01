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

    // Spy on getRefreshToken and return a mock response
    mockMiscellaneousService.getRefreshToken.and.returnValue(of(mockTokenResponse));

    // Manually trigger the interval subscription
    interval(60000)
      .subscribe(() => {
        expect(localStorage.getItem('token')).toEqual(mockTokenResponse.data.accessToken);
      });
  });

  it('should update loggedIn property based on handleEvent method', () => {
    // Initially, loggedIn should be true
    expect(component.loggedIn).toBeTrue();

    // Call handleEvent with false argument
    component.handleEvent(false);

    // Now, loggedIn should be false
    expect(component.loggedIn).toBeFalse();
  });

  it('should do something when runTest is called', () => {
    // Initial value of i
    let i = 0;

    // Call runTest method
    component.runTest(i);

    // Now, you can add your assertions here to test the behavior of runTest method
    // For example, you can expect some side effects or changes in the component state based on the input parameter i
  })

  describe('constructor', () => {
    it('should call getRefreshToken and update localStorage with new token', () => {
      const mockTokenResponse = { data: { accessToken: 'newAccessToken' } };

      // Spy on getRefreshToken and return a mock response
      mockMiscellaneousService.getRefreshToken.and.returnValue(of(mockTokenResponse));

      // Spy on localStorage.setItem
      const setItemSpy = spyOn(localStorage, 'setItem').and.callThrough();

      // Instantiate AppComponent which will trigger the constructor
      const appComponent = new AppComponent(mockMiscellaneousService);

      // Expect localStorage.setItem to be called with new token
      expect(setItemSpy).toHaveBeenCalledWith('token', mockTokenResponse.data.accessToken);
    });
  });
});
