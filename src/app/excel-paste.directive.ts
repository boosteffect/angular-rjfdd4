import {
    Directive,
    EventEmitter,
    HostListener,
    Output
} from '@angular/core';

@Directive({
  selector: '[excelPaste]'
})
export class ExcelPasteDirective {
  @Output()
  public excelPaste: EventEmitter<any[]> = new EventEmitter<any[]>();

  @HostListener('paste', [ '$event' ])
  public onPaste(e: any) {
    if (e.target.tagName && e.target.tagName.match(/(input|textarea)/i)) {
      // Do not handle past when an input element is currently focused
      return;
    }

    // Get clipboard data as text
    const data = e.clipboardData.getData('text');

    // Simplified parsing of the TSV data with hard-coded columns
    const rows = data.split('\n');
    const result = rows.map(row => {
      const cells = row.split('\t');
      return {
        Name: cells[0],
        Age: cells[1]
      };
    });

    this.excelPaste.emit(result);
  }
}

