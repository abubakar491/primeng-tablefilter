import { Component } from '@angular/core';
import {ConfirmationService} from 'primeng/api';
import {Message} from 'primeng/api';
import { PrimeNGConfig } from 'primeng/api';

@Component({
  selector: 'app-overlay-confirm-dialog',
  templateUrl: './overlay-confirm-dialog.component.html',
  styles: [`
        :host ::ng-deep button {
            margin-right: .25em;
        }
  `],
  providers: [ConfirmationService]
})
export class OverlayConfirmDialogComponent { 
  
    msgs: Message[] = [];

    position: string;

    constructor(private confirmationService: ConfirmationService, private primengConfig: PrimeNGConfig) {}

    ngOnInit() {
      this.primengConfig.ripple = true;
    }

    confirm1() {
        this.confirmationService.confirm({
            message: 'تدعم عروض الترويج؟',
            header: 'Confirmation',
            icon: 'pi pi-exclamation-triangle',
            accept: () => {
                this.msgs = [{severity:'info', summary:'Confirmed', detail:'You have accepted'}];
            },
            reject: () => {
                this.msgs = [{severity:'info', summary:'Rejected', detail:'You have rejected'}];
            }
        });
    }

    confirm2() {
        this.confirmationService.confirm({
            message: 'Do you want to delete this record?',
            header: 'Delete Confirmation',
            icon: 'pi pi-info-circle',
            accept: () => {
                this.msgs = [{severity:'info', summary:'Confirmed', detail:'Record deleted'}];
            },
            reject: () => {
                this.msgs = [{severity:'info', summary:'Rejected', detail:'You have rejected'}];
            }
        });
    }

    confirmPosition(position: string) {
        this.position = position;

        this.confirmationService.confirm({
            message: 'Do you want to delete this record?',
            header: 'Delete Confirmation',
            icon: 'pi pi-info-circle',
            accept: () => {
                this.msgs = [{severity:'info', summary:'Confirmed', detail:'Record deleted'}];
            },
            reject: () => {
                this.msgs = [{severity:'info', summary:'Rejected', detail:'You have rejected'}];
            },
            key: "positionDialog"
        });
    }
}
