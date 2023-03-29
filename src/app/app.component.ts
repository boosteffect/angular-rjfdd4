import { Component } from '@angular/core';

@Component({
    selector: 'my-app',
    template: `
        <ol>
          <li>
            Select the sample TSV snippet below:
            <pre>
A&#9;1
B&#9;2
C&#9;3
D&#9;4
            </pre>
          </li>
          <li>
            Click on the Grid and paste it with Ctrl+V or ⌘+V
        </ol>

        <kendo-grid [data]="gridData" (excelPaste)="onExcelPaste($event)">
            <kendo-grid-column field="Name">
            </kendo-grid-column>
            <kendo-grid-column field="Age">
            </kendo-grid-column>
        </kendo-grid>
    `
})
export class AppComponent {
    public gridData: any[] = [];

    public onExcelPaste(data: any[]): void {
      this.gridData = data;
    }
}

