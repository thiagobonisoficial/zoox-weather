import { TestBed } from '@angular/core/testing';

import { WeatherStoreService } from './weather.service';

describe('WeatherStoreService', () => {
	let service: WeatherStoreService;

	beforeEach(() => {
		TestBed.configureTestingModule({});
		service = TestBed.inject(WeatherStoreService);
	});

	it('should be created', () => {
		expect(service).toBeTruthy();
	});
});
