import { TestBed, ComponentFixture } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import {
	MatDialog,
	MatDialogRef,
  MatDialogModule,
  MAT_DIALOG_DATA
} from '@angular/material/dialog';
import { AppComponent } from './app.component';
import { Cardlist } from './models/cardlist';

describe('AppComponent', () => {
  let component: AppComponent;
  let fixture: ComponentFixture<AppComponent>;
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        RouterTestingModule,
        MatDialogModule
      ],
      declarations: [
        AppComponent
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
    }).compileComponents();
  });

  beforeEach(async () => {
    fixture = TestBed.createComponent(AppComponent);
    component = fixture.componentInstance;
    fixture.detectChanges(); 
  })

  it('should create the app', () => {
    expect(component).toBeTruthy();
  });

  it(`should have as title 'jpmc-assignment'`, () => {
    expect(component.title).toEqual('jpmc-assignment');
  });

  it('should render header content', () => {
    const compiled = fixture.nativeElement;
    expect(compiled.querySelector('mat-toolbar').textContent).toContain('Sample Application');
  });

  it('should call openListDialog function', () => {
    spyOn(component, 'openListDialog');
    component.openListDialog();
    expect(component.openListDialog).toHaveBeenCalled();
  });

  it('should call openCardDialog function', () => {
    const listName: Cardlist = {
      id: 1,
      listName: 'To Do',
      cardName: ['Pay Electricity bill']
    }
    spyOn(component, 'openCardDialog');
    component.openCardDialog(listName);
    expect(component.openCardDialog).toHaveBeenCalled();
  });

});
