import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MagazineUploaderComponent } from './magazine-uploader.component';

describe('MagazineUploaderComponent', () => {
  let component: MagazineUploaderComponent;
  let fixture: ComponentFixture<MagazineUploaderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MagazineUploaderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MagazineUploaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
