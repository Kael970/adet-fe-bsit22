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
      title: 'Kurt',
      description: 'secret'
    },
    {
      title: 'Xierick',
      description: 'secret'
    },
    {
      title: 'Bautista',
      description: 'secret'
    }
  ])

  deletePost(index: number) {
    this.posts().splice(index, 1);
  }
}
