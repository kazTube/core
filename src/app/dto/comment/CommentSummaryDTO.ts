export class CommentSummaryDTO {
    userProductCommentId: number;
    productCode: string;
    title: string;
    message: string;
    positiveOpinion: string[];
    negativeOpinion: string[];
    rate: number;


    constructor(userProductCommentId: number, productCode: string,
                title: string, message: string, positiveOpinion: string[], negativeOpinion: string[], rate: number) {
        this.userProductCommentId = userProductCommentId;
        this.productCode = productCode;
        this.title = title;
        this.message = message;
        this.positiveOpinion = positiveOpinion;
        this.negativeOpinion = negativeOpinion;
        this.rate = rate;
    }

    public static emptyInstance() {
        return new CommentSummaryDTO(
            undefined,
            undefined,
            undefined,
            undefined,
            [],
            [],
            undefined,
        );
    }

    public static clone(commentSummary: CommentSummaryDTO) {
        return new CommentSummaryDTO(
            commentSummary.userProductCommentId,
            commentSummary.productCode,
            commentSummary.title,
            commentSummary.message,
            commentSummary.positiveOpinion ? commentSummary.positiveOpinion.map(value => value) : [],
            commentSummary.negativeOpinion ? commentSummary.negativeOpinion.map(value => value) : [],
            commentSummary.rate,
        );
    }
}
