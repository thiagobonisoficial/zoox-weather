import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

// FORMS COMPONENTS
import { LoginFormComponent } from './forms/login-form/login-form.component';
import { CreateFormComponent } from './forms/create-form/create-form.component';

// LISTS COMPONENTS
import { SelectItemListComponent } from './lists/select-item-list/select-item-list.component';

// NAVBARS COMPONENTS
import { HeaderNavComponent } from './navbars/header-nav/header-nav.component';
import { FooterNavComponent } from './navbars/footer-nav/footer-nav.component';
import { FooterNavControllerComponent } from './navbars/footer-nav/footer-nav-controller/footer-nav-controller.component';
import { SelectItemNavComponent } from './navbars/select-item-nav/select-item-nav.component';

// CARDS COMPONENTS
import { CardDefaultComponent } from './cards/card-default/card-default.component';
import { CardLoginComponent } from './cards/card-login/card-login.component';
import { CardWeatherComponent } from './cards/card-weather/card-weather.component';
import { CardWeatherConditionsComponent } from './cards/card-weather/card-weather-conditions/card-weather-conditions.component';
import { CardWeatherInformationsComponent } from './cards/card-weather/card-weather-informations/card-weather-informations.component';
import { CardWeatherClimateComponent } from './cards/card-weather/card-weather-climate/card-weather-climate.component';

// CONTAINERS COMPONENTS
import { FieldsetComponent } from './containers/fieldset/fieldset.component';
import { SearchDataComponent } from './containers/search-data/search-data.component';
import { UserProfileComponent } from './containers/user-profile/user-profile.component';

// UTILS COMPONENTS
import { IconComponent } from './utils/icon/icon.component';
import { ImageComponent } from './utils/image/image.component';
import { InputComponent } from './utils/input/input.component';
import { SelectOptionComponent } from './utils/select-option/select-option.component';
import { ButtonComponent } from './utils/button/button.component';

const Components = [
	LoginFormComponent,
	CreateFormComponent,
	SelectItemListComponent,
	HeaderNavComponent,
	FooterNavComponent,
	FooterNavControllerComponent,
	SelectItemNavComponent,
	CardDefaultComponent,
	CardLoginComponent,
	CardWeatherComponent,
	CardWeatherConditionsComponent,
	CardWeatherInformationsComponent,
	CardWeatherClimateComponent,
	SearchDataComponent,
	UserProfileComponent,
	FieldsetComponent,
	IconComponent,
	ImageComponent,
	InputComponent,
	SelectOptionComponent,
	ButtonComponent,
];

@NgModule({
	declarations: [Components],
	imports: [CommonModule, ReactiveFormsModule],
	exports: [Components],
})
export class ComponentsModule {}
