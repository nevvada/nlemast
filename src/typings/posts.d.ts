declare interface Post {
  date: string;
  markdown: string;
  title: string;
}

declare interface Posts {
  [key: string]: Post;
}
