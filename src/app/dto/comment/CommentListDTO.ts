import {CommentDTO} from './CommentDTO';

export class CommentListDTO {
    commentList: CommentDTO[];
    commentsCount: number;
    totalRate: number;
    thisUserComment: CommentDTO;


    constructor(commentList: CommentDTO[], commentsCount: number, totalRate: number, thisUserComment: CommentDTO) {
        this.commentList = commentList;
        this.commentsCount = commentsCount;
        this.totalRate = totalRate;
        this.thisUserComment = thisUserComment;
    }
}
