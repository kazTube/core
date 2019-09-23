import {animate, animateChild, animation, group, query, style, transition, trigger, useAnimation} from '@angular/animations';


const slidAnimation = animation([
    query(':leave', animateChild(), {optional: true}),
    query(':enter, :leave', [
        style({
            position: 'absolute',
            width: '100%'
        })
    ], {optional: true}),
    query(':enter', [
        style({transform: `translateX({{enterTranslateX}}%)`})
    ], {optional: true}),
    group([
        query(':leave', [
            animate('500ms cubic-bezier(.22,.6,.45,1.24)', style({transform: `translateX({{leaveTranslateX}}%)`}))
        ], {optional: true}),
        query(':enter', [
            animate('500ms cubic-bezier(.22,.6,.45,1.24)', style({transform: `translateX(0)`}))
        ], {optional: true})
    ]),

    query(':enter', animateChild(), {optional: true}),
]);
export const slider =
    trigger('routeAnimations', [

        transition('product-detail => product-list',
            useAnimation(slidAnimation, {params: {enterTranslateX: 100, leaveTranslateX: -100}})),
        transition('order-detail => order-list',
            useAnimation(slidAnimation, {params: {enterTranslateX: 100, leaveTranslateX: -100}})),
        transition('comment-list => product-detail',
            useAnimation(slidAnimation, {params: {enterTranslateX: 100, leaveTranslateX: -100}})),
        transition('personal-info-rules => personal-info',
            useAnimation(slidAnimation, {params: {enterTranslateX: 100, leaveTranslateX: -100}})),
        transition('* => general-home-page, * => user-home-page',
            useAnimation(slidAnimation, {params: {enterTranslateX: 100, leaveTranslateX: -100}})),
        transition('* => *',
            useAnimation(slidAnimation, {params: {enterTranslateX: -100, leaveTranslateX: 100}})),

    ]);



