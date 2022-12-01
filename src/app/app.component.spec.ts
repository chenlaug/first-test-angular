import { TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { AppComponent } from './app.component';

describe('AppComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RouterTestingModule],
      declarations: [AppComponent],
    }).compileComponents();
  });

  it('the button must have the name of Azumarill', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const btnAzumarill =
      fixture.nativeElement.querySelector('[id="Azumarill"]');
    btnAzumarill.click();
    fixture.detectChanges();
    const sName: HTMLSpanElement =
      fixture.nativeElement.querySelector('[id="name"]');
    expect(sName.innerHTML).toBe('Azumarill');
  });

  it('the button must have the name of Umbreon', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const btnUmbreon = fixture.nativeElement.querySelector('[id="Umbreon"]');
    btnUmbreon.click();
    fixture.detectChanges();
    const sName: HTMLSpanElement =
      fixture.nativeElement.querySelector('[id="name"]');
    expect(sName.innerHTML).toBe('Umbreon');
  });

  it('the button must have the name of Sirfetchd', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const btnSirfetchd =
      fixture.nativeElement.querySelector('[id="Sirfetchd"]');
    btnSirfetchd.click();
    fixture.detectChanges();
    const sName: HTMLSpanElement =
      fixture.nativeElement.querySelector('[id="name"]');
    expect(sName.innerHTML).toBe("Sirfetch'd");
  });

  it('the button must have the name of Pyrobut', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const btnPyrobut = fixture.nativeElement.querySelector('[id="Pyrobut"]');
    btnPyrobut.click();
    fixture.detectChanges();
    const sName: HTMLSpanElement =
      fixture.nativeElement.querySelector('[id="name"]');
    expect(sName.innerHTML).toBe('Pyrobut');
  });
});
