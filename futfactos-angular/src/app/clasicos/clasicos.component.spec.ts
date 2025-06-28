import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClasicosComponent } from './clasicos.component';

describe('ClasicosComponent', () => {
  let component: ClasicosComponent;
  let fixture: ComponentFixture<ClasicosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ClasicosComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ClasicosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
