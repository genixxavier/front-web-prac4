import { Component, OnInit } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
    pageTitle: string;

    constructor(private router: Router) {}

    ngOnInit(): void {
        this.router.events.subscribe(event => {
            if (event instanceof NavigationEnd) {
                this.pageTitle = this.getTitleFromRoute(this.router.routerState, this.router.routerState.root).join(' - ');
            }
        });
    }

    private getTitleFromRoute(state: any, parent: any): any {
        const data = [];
        if (parent && parent.snapshot.data && parent.snapshot.data.title) {
            data.push(parent.snapshot.data.title);
        }

        if (state && parent) {
            data.push(...this.getTitleFromRoute(state, state.firstChild(parent)));
        }

        return data;
    }
}
