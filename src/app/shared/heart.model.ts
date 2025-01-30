export class Heart {
    constructor(
        public full: boolean,
        public urlFullHeart: string = "/assets/icons8-heart-24.png",
        public urlEmptyHeart: string = "/assets/icons8-heart-241.png"
    ) { }
    public showsHeart(): string {
        if (this.full) {
            return this.urlFullHeart
        } else {
            return this.urlEmptyHeart
        }
    }
}