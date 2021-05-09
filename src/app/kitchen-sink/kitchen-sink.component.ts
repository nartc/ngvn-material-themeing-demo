import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-kitchen-sink',
  template: `
    <h2>Badge</h2>
    <p>
      <span matBadge="4" matBadgeOverlap="false">Text with a badge</span>
    </p>

    <p>
      <span matBadge="1" matBadgeSize="large">Text with large badge</span>
    </p>

    <p>
      Button with a badge on the left
      <button
        mat-raised-button
        color="primary"
        matBadge="8"
        matBadgePosition="before"
        matBadgeColor="accent"
      >
        Action
      </button>
    </p>

    <p>
      Button toggles badge visibility
      <button
        mat-raised-button
        matBadge="7"
        [matBadgeHidden]="hidden"
        (click)="toggleBadgeVisibility()"
      >
        Hide
      </button>
    </p>

    <p>
      Icon with a badge
      <mat-icon matBadge="15" matBadgeColor="warn">home</mat-icon>
      <!-- Include text description of the icon's meaning for screen-readers -->
      <span class="cdk-visually-hidden">
        Example with a home icon with overlaid badge showing the number 15
      </span>
    </p>

    <mat-divider></mat-divider>

    <h2>Button</h2>
    <section>
      <div class="example-label">Basic</div>
      <div class="example-button-row">
        <button mat-button>Basic</button>
        <button mat-button color="primary">Primary</button>
        <button mat-button color="accent">Accent</button>
        <button mat-button color="warn">Warn</button>
        <button mat-button disabled>Disabled</button>
        <a mat-button href="https://www.google.com/" target="_blank">Link</a>
      </div>
    </section>
    <mat-divider></mat-divider>
    <section>
      <div class="example-label">Raised</div>
      <div class="example-button-row">
        <button mat-raised-button>Basic</button>
        <button mat-raised-button color="primary">Primary</button>
        <button mat-raised-button color="accent">Accent</button>
        <button mat-raised-button color="warn">Warn</button>
        <button mat-raised-button disabled>Disabled</button>
        <a mat-raised-button href="https://www.google.com/" target="_blank">
          Link
        </a>
      </div>
    </section>
    <mat-divider></mat-divider>
    <section>
      <div class="example-label">Stroked</div>
      <div class="example-button-row">
        <button mat-stroked-button>Basic</button>
        <button mat-stroked-button color="primary">Primary</button>
        <button mat-stroked-button color="accent">Accent</button>
        <button mat-stroked-button color="warn">Warn</button>
        <button mat-stroked-button disabled>Disabled</button>
        <a mat-stroked-button href="https://www.google.com/" target="_blank">
          Link
        </a>
      </div>
    </section>
    <mat-divider></mat-divider>
    <section>
      <div class="example-label">Flat</div>
      <div class="example-button-row">
        <button mat-flat-button>Basic</button>
        <button mat-flat-button color="primary">Primary</button>
        <button mat-flat-button color="accent">Accent</button>
        <button mat-flat-button color="warn">Warn</button>
        <button mat-flat-button disabled>Disabled</button>
        <a mat-flat-button href="https://www.google.com/" target="_blank">
          Link
        </a>
      </div>
    </section>
    <mat-divider></mat-divider>
    <section>
      <div class="example-label">Icon</div>
      <div class="example-button-row">
        <div class="example-flex-container">
          <button
            mat-icon-button
            aria-label="Example icon button with a vertical three dot icon"
          >
            <mat-icon>more_vert</mat-icon>
          </button>
          <button
            mat-icon-button
            color="primary"
            aria-label="Example icon button with a home icon"
          >
            <mat-icon>home</mat-icon>
          </button>
          <button
            mat-icon-button
            color="accent"
            aria-label="Example icon button with a menu icon"
          >
            <mat-icon>menu</mat-icon>
          </button>
          <button
            mat-icon-button
            color="warn"
            aria-label="Example icon button with a heart icon"
          >
            <mat-icon>favorite</mat-icon>
          </button>
          <button
            mat-icon-button
            disabled
            aria-label="Example icon button with a open in new tab icon"
          >
            <mat-icon>open_in_new</mat-icon>
          </button>
        </div>
      </div>
    </section>
    <mat-divider></mat-divider>
    <section>
      <div class="example-label">FAB</div>
      <div class="example-button-row">
        <div class="example-flex-container">
          <div class="example-button-container">
            <button
              mat-fab
              color="primary"
              aria-label="Example icon button with a delete icon"
            >
              <mat-icon>delete</mat-icon>
            </button>
          </div>
          <div class="example-button-container">
            <button
              mat-fab
              color="accent"
              aria-label="Example icon button with a bookmark icon"
            >
              <mat-icon>bookmark</mat-icon>
            </button>
          </div>
          <div class="example-button-container">
            <button
              mat-fab
              color="warn"
              aria-label="Example icon button with a home icon"
            >
              <mat-icon>home</mat-icon>
            </button>
          </div>
          <div class="example-button-container">
            <button
              mat-fab
              disabled
              aria-label="Example icon button with a heart icon"
            >
              <mat-icon>favorite</mat-icon>
            </button>
          </div>
        </div>
      </div>
    </section>
    <mat-divider></mat-divider>
    <section>
      <div class="example-label">Mini FAB</div>
      <div class="example-button-row">
        <div class="example-flex-container">
          <div class="example-button-container">
            <button
              mat-mini-fab
              color="primary"
              aria-label="Example icon button with a menu icon"
            >
              <mat-icon>menu</mat-icon>
            </button>
          </div>
          <div class="example-button-container">
            <button
              mat-mini-fab
              color="accent"
              aria-label="Example icon button with a plus one icon"
            >
              <mat-icon>plus_one</mat-icon>
            </button>
          </div>
          <div class="example-button-container">
            <button
              mat-mini-fab
              color="warn"
              aria-label="Example icon button with a filter list icon"
            >
              <mat-icon>filter_list</mat-icon>
            </button>
          </div>
          <div class="example-button-container">
            <button
              mat-mini-fab
              disabled
              aria-label="Example icon button with a home icon"
            >
              <mat-icon>home</mat-icon>
            </button>
          </div>
        </div>
      </div>
    </section>

    <mat-divider></mat-divider>
    <h2>Toolbar</h2>
    <p>
      <mat-toolbar>
        <span>My Application</span>
      </mat-toolbar>
    </p>

    <p>
      <mat-toolbar>
        <button
          mat-icon-button
          class="example-icon"
          aria-label="Example icon-button with menu icon"
        >
          <mat-icon>menu</mat-icon>
        </button>
        <span>My App</span>
        <span class="example-spacer"></span>
        <button
          mat-icon-button
          class="example-icon favorite-icon"
          aria-label="Example icon-button with heart icon"
        >
          <mat-icon>favorite</mat-icon>
        </button>
        <button
          mat-icon-button
          class="example-icon"
          aria-label="Example icon-button with share icon"
        >
          <mat-icon>share</mat-icon>
        </button>
      </mat-toolbar>
    </p>

    <p>
      <mat-toolbar color="primary">
        <button
          mat-icon-button
          class="example-icon"
          aria-label="Example icon-button with menu icon"
        >
          <mat-icon>menu</mat-icon>
        </button>
        <span>My App</span>
        <span class="example-spacer"></span>
        <button
          mat-icon-button
          class="example-icon favorite-icon"
          aria-label="Example icon-button with heart icon"
        >
          <mat-icon>favorite</mat-icon>
        </button>
        <button
          mat-icon-button
          class="example-icon"
          aria-label="Example icon-button with share icon"
        >
          <mat-icon>share</mat-icon>
        </button>
      </mat-toolbar>
    </p>

    <p>
      <mat-toolbar color="primary">
        <mat-toolbar-row>
          <span>My App</span>
          <span class="example-spacer"></span>
          <button
            mat-icon-button
            class="example-icon"
            aria-label="Example icon-button with menu icon"
          >
            <mat-icon>menu</mat-icon>
          </button>
        </mat-toolbar-row>

        <mat-toolbar-row>
          <span>Second Line</span>
          <span class="example-spacer"></span>
          <button
            mat-icon-button
            class="example-icon favorite-icon"
            aria-label="Example icon-button with heart icon"
          >
            <mat-icon>favorite</mat-icon>
          </button>
          <button
            mat-icon-button
            class="example-icon"
            aria-label="Example icon-button with share icon"
          >
            <mat-icon>share</mat-icon>
          </button>
        </mat-toolbar-row>
      </mat-toolbar>
    </p>
  `,
  styles: [
    `
      :host {
        display: block;
        padding: 2rem;
      }

      .example-spacer {
        flex: 1 1 auto;
      }

      section {
        display: table;
      }

      .example-label {
        display: table-cell;
        font-size: 14px;
        margin-left: 8px;
        min-width: 120px;
      }

      .example-button-row {
        display: table-cell;
        width: 490px;
      }

      .example-button-row .mat-button-base {
        margin: 8px 8px 8px 0;
      }

      .example-flex-container {
        display: flex;
        justify-content: space-between;
        flex-wrap: wrap;
      }

      .example-button-container {
        display: flex;
        justify-content: center;
        width: 120px;
      }
    `,
  ],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class KitchenSinkComponent {
  hidden = false;

  toggleBadgeVisibility() {
    this.hidden = !this.hidden;
  }
}
