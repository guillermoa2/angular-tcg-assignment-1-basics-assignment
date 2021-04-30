import { Component } from "@angular/core";

@Component ({
    selector: 'app-warning-alert',
    template: 
        ` <p> This is a Warning!!<p>`,
    styles: [
        `p {
            color: red;
            background-color: pink;
            border: 2px solid red;
        }
        `]
})
export class WarningAlertComponent {
    
}