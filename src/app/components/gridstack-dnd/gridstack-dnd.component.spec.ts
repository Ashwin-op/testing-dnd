import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GridstackDndComponent } from './gridstack-dnd.component';

describe('GridstackDndComponent', () => {
  let component: GridstackDndComponent;
  let fixture: ComponentFixture<GridstackDndComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [GridstackDndComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GridstackDndComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
