import { ComponentFixture, TestBed } from "@angular/core/testing";

import { BatchHeadingComponent } from "./dashboard-container.component";

describe("BatchHeadingComponent", () => {
  let component: BatchHeadingComponent;
  let fixture: ComponentFixture<BatchHeadingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [BatchHeadingComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(BatchHeadingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
