export class CommentDTO {
    userProductCommentId: number;
    userId: number;
    title: string;
    rate: number;
    date: string;
    time: string;
    fullname: string;
    message: string;
    positiveOpinion: string[];
    negativeOpinion: string[];
    likeCount: number;
    dislikeCount: number;
    isLikedByThisUser: boolean;
    isDislikedByThisUser: boolean;

    constructor(userProductCommentId: number, userId: number, title: string, rate: number,
                date: string, time: string, fullname: string, message: string, positiveOpinion: string[],
                negativeOpinion: string[], likeCount: number, dislikeCount: number, isLikedByThisUser: boolean,
                isDislikedByThisUser: boolean) {
        this.userProductCommentId = userProductCommentId;
        this.userId = userId;
        this.title = title;
        this.rate = rate;
        this.date = date;
        this.time = time;
        this.fullname = fullname;
        this.message = message;
        this.positiveOpinion = positiveOpinion;
        this.negativeOpinion = negativeOpinion;
        this.likeCount = likeCount;
        this.dislikeCount = dislikeCount;
        this.isLikedByThisUser = isLikedByThisUser;
        this.isDislikedByThisUser = isDislikedByThisUser;
    }

    public static emptyInstance() {
        return new CommentDTO(
            undefined,
            undefined,
            undefined,
            undefined,
            undefined,
            undefined,
            undefined,
            undefined,
            [],
            [],
            undefined,
            undefined,
            undefined,
            undefined,
        );
    }
}
