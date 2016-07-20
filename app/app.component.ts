import {Component} from "@angular/core";
import { ROUTER_DIRECTIVES } from '@angular/router';


import { TriangleComponent } from './triangle/triangle.component';
import { WelcomeComponent } from './home/welcome.component';

@Component ({
    selector : 'tr-app',
    templateUrl : "app/app.component.html",
    
    directives: [ ROUTER_DIRECTIVES, TriangleComponent, WelcomeComponent],
    precompile: [TriangleComponent, WelcomeComponent]
})


export class AppComponent{

title : string = "Teiangle challenge";

}