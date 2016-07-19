import {Component} from "@angular/core";
import { NgForm }    from '@angular/forms';

import { TriangleFormComponent } from './triangle-form.component';

@Component ({
    selector : 'tr-app',
    templateUrl : "app/app.component.html",
    directives: [TriangleFormComponent]    
})

export class AppComponent{


}