// Interfaces
interface Author {
  name: string;
  avatar: string;
}

const authorOne: Author = { name: "Zahran", avatar: "/dist/image1" };

interface Post {
  title: string;
  body: string;
  tags: string[];
  created_at: Date;
  author: Author;
}

const newPost: Post = {
  title: "Learn Programming",
  body: "Belajar pemograman itu asyik",
  tags: ["coding", "design"],
  created_at: new Date(),
  author: authorOne,
};

// as function arguments type
function createdPost(post: Post): void {
  console.log(`created post ${post.title} by ${post.author.name}`);
}

createdPost(newPost);

// with arrays

let posts: Post[] = [];
posts.push(newPost);
