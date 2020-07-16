import { createFeatureSelector, createSelector } from '@ngrx/store';

// STORE ITEM CONFIG
import { IEntityState, IWorldCountry, IWorldCity } from './world.interface';

const FEATURE_SELECTOR = createFeatureSelector<IEntityState>('world');

// GETTER'S
export const getCountries = createSelector(FEATURE_SELECTOR, ({ world }) => (world ? world : null));

export const getCountriesCreated = createSelector(getCountries, countries => (countries ? countries.filter(country => country.isCreated) : null));
export const getCountriesNotCreated = createSelector(getCountries, countries => (countries ? countries.filter(country => !country.isCreated) : null));

export const getCountryByCityId = createSelector(getCountries, (countries: IWorldCountry[], { cityId }: { cityId: string }) => {
	if (countries) {
		return countries.filter(country => {
			return country.cities.map(city => {
				if (city.id === cityId) {
					return country;
				}
			});
		})[0];
	}

	return null;
});

export const getCities = createSelector(getCountries, (countries: IWorldCountry[], { countryId }: { countryId: string }) => {
	if (countries) {
		const cities: IWorldCity[] = [];

		countries.forEach(country => {
			if (country.id === countryId) {
				cities.push(...country.cities);
			}
		});

		return cities;
	}

	return null;
});

export const getCitiesByIds = createSelector(getCountries, (countries: IWorldCountry[], { citiesIds }: { citiesIds: string[] }) => {
	if (countries) {
		const cities: IWorldCity[] = [];

		countries.forEach(country => {
			citiesIds.forEach(cityCode => {
				country.cities.find(city => {
					if (city.id === cityCode) {
						cities.push(city);
					}
				});
			});
		});

		return cities;
	}

	return null;
});

export const getCitiesCreated = createSelector(getCountriesCreated, countries => {
	if (countries) {
		const cities: IWorldCity[] = [];

		countries.forEach(country =>
			country.cities.filter(city => {
				if (city.isCreated) {
					cities.push(city);
				}
			})
		);

		return cities;
	}

	return null;
});

export const getCitiesNotCreated = createSelector(getCountriesCreated, (countries: IWorldCountry[], { countryId }: { countryId: string }) => {
	if (countries) {
		const cities: IWorldCity[] = [];

		countries.forEach(country => {
			if (country.id === countryId) {
				country.cities.filter(city => {
					if (!city.isCreated) {
						cities.push(city);
					}
				});
			}
		});

		return cities;
	}

	return null;
});
