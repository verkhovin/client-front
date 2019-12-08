import { Component, Input } from '@angular/core';
@Component({
  selector: 'app-reaction',
  templateUrl: './reaction.template.html',
  styleUrls: ['./reaction.style.scss']
})
export class ReactionComponent {
    @Input() likeEventHandler: () => void;
    @Input() dislikeEventHandler: () => void;
    @Input() bookmarkEventHandler: () => void;

    onLikeClick() {
        if (this.likeEventHandler) {
            this.likeEventHandler();
        }
    }

    onDislikeClick() {
        if (this.dislikeEventHandler) {
            this.dislikeEventHandler();
        }
    }

    onBookmarkClick() {
        if (this.bookmarkEventHandler) {
            this.bookmarkEventHandler();
        }
    }
}
