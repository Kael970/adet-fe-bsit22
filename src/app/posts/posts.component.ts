import { Component, signal } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-posts',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.scss']
})
export class PostsComponent {
  public posts = signal([
    {
      title: 'John',
      description: 'Gwapo'
    },
    {
      title: 'Lloyd',
      description: 'Kaayo'
    },
    {
      title: 'Valmoria',
      description: 'Ko'
    }
  ])

  deletePost(index: number) {
    this.posts().splice(index, 1);
  }
}
