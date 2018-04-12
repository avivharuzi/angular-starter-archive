import { Component, ViewChild, Input, Output, EventEmitter, OnChanges } from '@angular/core';

@Component({
  selector: 'app-file-input',
  templateUrl: './file-input.component.html',
})
export class FileInputComponent implements OnChanges {
  @Input() public files: any;
  @Input() public multiple: boolean;
  @ViewChild('fileInput') public fileInput: any;
  @Output() public changedFiles: EventEmitter<any> = new EventEmitter<any>();
  @Output() public changedUrls: EventEmitter<any> = new EventEmitter<any>();

  public fileLabel: string;
  public fileUrls: any[];

  constructor() {
    this.fileLabel = 'Choose file';
    this.multiple = false;
  }

  ngOnChanges() {
    if (!this.files) {
      this.resetImages();
    }
  }

  onChange(event): void {
    let fileList: FileList = event.target.files;

    this.files = new Array<File>();
    this.fileUrls = new Array<any>();

    if (fileList && fileList.length) {
      for (let i = 0; i < fileList.length; i++) {
        this.files.push(fileList.item(i));

        let reader = new FileReader();
        reader.onload = (onloadEvent: any) => {
          this.fileUrls.push(onloadEvent.target.result);
          if (i === fileList.length - 1) {
            if (i === 0 && !this.multiple) {
              this.fileUrls = this.fileUrls[0];
            }
            this.changedUrls.emit(this.fileUrls);
          }
        };
        reader.readAsDataURL(event.target.files[i]);
      }
    }

    if (this.files && this.files.length > 1) {
      this.fileLabel = this.files.length + ' files selected';
    } else if (this.files.length === 1) {
      this.fileLabel = this.files[0].name;
    } else {
      this.fileLabel = 'Choose file';
    }

    if (!this.multiple && this.files && this.files.length) {
      this.files = this.files[0];
    }

    this.changedFiles.emit(this.files);
  }

  resetImages(): void {
    this.files = null;
    this.fileUrls = null;
    this.fileLabel = 'Choose Images';
    this.fileInput.nativeElement.value = '';
  }
}
