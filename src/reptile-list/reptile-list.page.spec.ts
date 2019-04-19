import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ReptileListPage } from './reptile-list.page';

describe('ReptileListPage', () => {
  let component: ReptileListPage;
  let fixture: ComponentFixture<ReptileListPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReptileListPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReptileListPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
