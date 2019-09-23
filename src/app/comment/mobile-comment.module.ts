import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {CommentListResolver} from './comment-list/comment-list.resolver';
import {AuthenticationGuard} from '../routing/authentication.guard';
import {CommentModule} from './comment.module';
import {StarRatingModule} from 'angular-star-rating';
import {CommentListComponent} from './comment-list/comment-list.component';
import {MobileInsertCommentComponent} from './insert-comment/mobile-insert-comment/mobile-insert-comment.component';
import {CommentResolver} from './insert-comment-form/comment-resolver.service';
import {SharedModule} from '../shared/shared.module';

const routes: Routes = [
    {
        path: 'list/:code',
        component: CommentListComponent,
        resolve: {resolvedData: CommentListResolver},
        data: {animation: 'comment-list'}
    },
    {
        path: 'insert/:code',
        component: MobileInsertCommentComponent,
        canActivate: [AuthenticationGuard]
    },
    {
        path: 'edit/:code',
        component: MobileInsertCommentComponent,
        resolve: {userComment: CommentResolver},
        canActivate: [AuthenticationGuard]

    },
    {
        path: '**',
        redirectTo: '/home'
    }

];

@NgModule({
    declarations: [MobileInsertCommentComponent],
    imports: [
        CommentModule,
        SharedModule,
        StarRatingModule.forChild(),
        RouterModule.forChild(routes),
    ],
    entryComponents: []

})
export class MobileCommentModule {
}
