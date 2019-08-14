import { Component, OnInit } from '@angular/core';
import { Post } from "../interfaces/post";

@Component({
  selector: 'social-posts',
  templateUrl: './social-posts.component.html',
  styleUrls: ['./social-posts.component.css']
})
export class SocialPostsComponent implements OnInit {

  // show: boolean = false;

  posts: Post[] = [
    {
      title: "title1",
      thought: "thought1"
    },
    {
      title: "title2",
      thought: "thought2"
    },
    {
      title: "title3",
      thought: "thought3"
    },
    {
      title: "title4",
      thought: "thought4"
    }
  ];

  deletePost(index: number): void {
    this.posts.splice(index, 1);
  }
  constructor() {}

  ngOnInit() {
  }

}
