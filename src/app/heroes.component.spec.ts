/*
 * Testing a simple Angular 2 component
 * More info: https://angular.io/docs/ts/latest/guide/testing.html#!#simple-component-test
 */

import { NO_ERRORS_SCHEMA } from '@angular/core';
import { TestBed, async, ComponentFixture } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { HeroesComponent } from './heroes.component';
import { Hero } from './hero';

describe('HeroesComponent', () => {
    let fixture: ComponentFixture<HeroesComponent>;
    let comp: HeroesComponent;
    let el;

    let hero: Hero = {
            id: 99,
            name: 'Test'
        };

    beforeEach(() => {
        TestBed.configureTestingModule({
            declarations: [
                HeroesComponent
            ],
            providers: [],
            schemas: [ NO_ERRORS_SCHEMA ]
        });
    });

    beforeEach(async(() => {
        TestBed.compileComponents().then(() => {
            fixture = TestBed.createComponent(HeroesComponent);
            comp = fixture.componentInstance;

        });
    }));

    it('should enter the assertion', () => {
        fixture.detectChanges();

        comp.onSelect(hero);
        expect(comp.selectedHero).toBe(hero);
    });
});
