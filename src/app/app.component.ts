import {Component, OnInit, OnChanges} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit, OnChanges {
    constructor(private route: ActivatedRoute){};
    ngOnInit() {
        //console.log(this.route);
        console.log(window.location.href);
    }

    ngOnChanges(){
        //console.log(this.route)
    }
}
