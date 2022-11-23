import { ComponentFixture, TestBed } from '@angular/core/testing';
import {
	MatDialog,
	MatDialogRef,
  MatDialogModule,
  MAT_DIALOG_DATA
} from '@angular/material/dialog';
import { FormsModule } from '@angular/forms';

import { CardDialogComponent } from './card-dialog.component';

describe('CardDialogComponent', () => {
  let component: CardDialogComponent;
  let fixture: ComponentFixture<CardDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CardDialogComponent ],
      imports: [FormsModule, MatDialogModule],
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
    fixture = TestBed.createComponent(CardDialogComponent);
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
    expect(compiled.querySelector('h1').textContent).toContain('Create new card');
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
