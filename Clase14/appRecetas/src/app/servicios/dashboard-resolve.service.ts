import { Injectable } from '@angular/core';
import { Resolve } from '@angular/router';
import { of } from 'rxjs';
import { delay } from "rxjs/operators"

@Injectable({
	providedIn: 'root'
})
export class DashboardResolveService implements Resolve<boolean> {

	constructor() { }

	resolve() {
		return of(true)
			.pipe(
				delay(50000)
			)
	}
}
