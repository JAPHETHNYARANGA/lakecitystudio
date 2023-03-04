import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RecordingStudiosComponent } from './recording-studios.component';

describe('RecordingStudiosComponent', () => {
  let component: RecordingStudiosComponent;
  let fixture: ComponentFixture<RecordingStudiosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RecordingStudiosComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RecordingStudiosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
