import { DOCUMENT } from '@angular/common';
import { Component, Inject } from '@angular/core';
import {NgForm} from "@angular/forms";
import { MatSlideToggleChange } from '@angular/material/slide-toggle';
import { ThemeService } from './theme.service';

@Component({
  selector: 'app-root',
  template: `
<!--    <mat-slide-toggle [(ngModel)]="isDark" (change)="onChange($event)">-->
<!--      {{ isDark ? 'Dark' : 'Light' }}-->
<!--    </mat-slide-toggle>-->
    <form #form="ngForm" (ngSubmit)="onChangeTheme(form)">
      <input type="color" [(ngModel)]="theme.primary" name="primary" />
      <input type="color" [(ngModel)]="theme.accent" name="accent" />
      <input type="color" [(ngModel)]="theme.warn" name="warn" />
      <button mat-raised-button color="primary" type="submit">
        Submit
      </button>
    </form>
    <app-kitchen-sink></app-kitchen-sink>
  `,
  styles: [],
})
export class AppComponent {
  isDark = false;

  theme = {...this.themeService.value};

  constructor(
    @Inject(DOCUMENT) private readonly doc: Document,
    private readonly themeService: ThemeService
  ) {}

  onChange(toggleChange: MatSlideToggleChange) {
    this.doc.body.classList.toggle('dark', toggleChange.checked);
  }

  onChangeTheme(form: NgForm) {
    this.themeService.setTheme(form.value);
  }
}
