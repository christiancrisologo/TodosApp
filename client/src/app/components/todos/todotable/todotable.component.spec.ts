/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { TodotableComponent } from './todotable.component';

describe('TodotableComponent', () => {
  let component: TodotableComponent;
  let fixture: ComponentFixture<TodotableComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TodotableComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TodotableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
