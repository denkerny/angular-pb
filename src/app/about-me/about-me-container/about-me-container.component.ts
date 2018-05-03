import { Component, OnInit, Inject } from '@angular/core';
import { MatDialog, MAT_DIALOG_DATA } from '@angular/material';

const IMGS: string[] = [
  'http://www.edelweissfurniture.com/images/restorationGalleryBackground.jpg',
  'http://1.bp.blogspot.com/-K0EvglgDlXw/U84VbELqV7I/AAAAAAAAFnM/CXFXV6MGWNs/s1600/Mud+cracked+dirt+soil+ground+texture+ver+1.jpg',
  'https://juegosrev.com/wp-content/uploads/2017/06/Wood-Wallpaper-Backgrounds-Gallery-79-Plus-PIC-WPW5013239.jpg'
]

@Component({
  selector: 'app-about-me-container',
  templateUrl: './about-me-container.component.html',
  styleUrls: ['./about-me-container.component.css']
})
export class AboutMeContainerComponent implements OnInit {
  wait: boolean = false
  imageUrlArray = IMGS
  constructor(public dialog: MatDialog) { }

  ngOnInit() {
  }

  openDialog(value) {
    this.dialog.open(ModalWork1, {
      data: {
        img: value
      }
    });
    this.wait = true
    setTimeout(() => {
      this.wait = false;
    }, 1000)
  }

}

@Component({
  selector: 'modal-work1',
  templateUrl: 'modal-work1.html',
})
export class ModalWork1 {
  constructor(@Inject(MAT_DIALOG_DATA) public data: any) {}
}