import { ComponentFixture, TestBed } from '@angular/core/testing';
import {
	MatDialog,
	MatDialogRef,
  MatDialogModule,
  MAT_DIALOG_DATA
} from '@angular/material/dialog';
import { FormsModule } from '@angular/forms';

import { ListDialogComponent } from './list-dialog.component';

describe('ListDialogComponent', () => {
  let component: ListDialogComponent;
  let fixture: ComponentFixture<ListDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListDialogComponent ],
      imports: [
        FormsModule,
        MatDialogModule
      ],
      providers: [
        MatDialog,
        { 
          provide: MatDialogRef,
          useValue: []
        }, 
        { 
          provide: MAT_DIALOG_DATA, 
          useValue: [] 
        }
      ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should call onNoClick function', () => {
    spyOn(component, 'onNoClick');
    component.onNoClick();
    expect(component.onNoClick).toHaveBeenCalled();
  });

  it('should render h1 content', () => {
    const compiled = fixture.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Create new list');
  });

  it('should have input text field', () => {
    const compiled = fixture.nativeElement;
    expect(compiled.querySelector('input')).toBeTruthy()
  });
  
  it('should have cancel button', () => {
    const compiled = fixture.nativeElement;
    expect(compiled.querySelector('button').textContent).toContain('Cancel');
  });

  it('should have save button', () => {
    const compiled = fixture.nativeElement;
    expect(compiled.querySelector('.save-button').textContent).toContain('Save');
  });

});
