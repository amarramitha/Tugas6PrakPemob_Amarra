import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-folder',
  templateUrl: './folder.page.html',
  styleUrls: ['./folder.page.scss'],
})
export class FolderPage implements OnInit {
  folder: string; // Define folder as a string type
  photoUrl: string;

  constructor(private activatedRoute: ActivatedRoute) {
    this.photoUrl = 'assets/img/foto-profil.jpg';
    this.folder='';
  }

  ngOnInit() {
    // Get the folder name from the route parameter when this page is loaded
    this.activatedRoute.paramMap.subscribe(params => {
      this.folder = params.get('id') ?? 'Default Folder'; // Use 'Default Folder' if id is null
    });
  }
}
