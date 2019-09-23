import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {CommentSummaryDTO} from '../dto/comment/CommentSummaryDTO';
import {RestAddresses} from '../core/constants/RestAddresses';
import {CommentListDTO} from '../dto/comment/CommentListDTO';
import {map, shareReplay} from 'rxjs/operators';
import {CommentDTO} from '../dto/comment/CommentDTO';
import {Subscriber} from 'rxjs/src/internal/Subscriber';

@Injectable({
    providedIn: 'root'
})
export class CommentService {

    commentListPageSize = 5;

    constructor(private httpClient: HttpClient) {
    }

    getCommentList(productCode: string, limit: number, offset: number): Observable<CommentListDTO> {
        return this.httpClient.post<CommentListDTO>(RestAddresses.GET_COMMENT_LIST, {
            productCode: productCode,
            limit: limit,
            offset: offset
        });
    }

    getUserCommentByProductCode(productCode: string): Observable<CommentDTO> {
        return this.httpClient.post<CommentListDTO>(RestAddresses.GET_COMMENT_LIST, {
            productCode: productCode,
            limit: 1,
            offset: 0
        }).pipe(map(commentList => commentList.thisUserComment));
    }

    like(commentId: number): Observable<boolean> {
        return this.httpClient.post<boolean>(RestAddresses.LIKE_OR_DISLIKE_COMMENT, {
            isLike: true,
            userProductCommentId: commentId
        });
    }

    dislike(commentId: number): Observable<boolean> {
        return this.httpClient.post<boolean>(RestAddresses.LIKE_OR_DISLIKE_COMMENT, {
            isLike: false,
            userProductCommentId: commentId
        });
    }

    // todo add real api
    delete(commentId: number): Observable<boolean> {
        // return this.httpClient.post<boolean>(RestAddresses.DELETE_COMMENT, {
        //     commentId: commentId
        // });
        return Observable.create((o: Subscriber<boolean>) => {
            setTimeout(() => {
                o.next(true);
            }, 3000);
        });
    }

    insertComment(CommentToInsert: CommentSummaryDTO): Observable<boolean> {
        return this.httpClient.post<boolean>(RestAddresses.INSERT_COMMENT, CommentToInsert)
            .pipe(shareReplay(1));
    }
}
