"use strict";
const authorOne = { name: "Zahran", avatar: "/dist/image1" };
const newPost = {
    title: "Learn Programming",
    body: "Belajar pemograman itu asyik",
    tags: ["coding", "design"],
    created_at: new Date(),
    author: authorOne,
};
// as function arguments type
function createdPost(post) {
    console.log(`created post ${post.title} by ${post.author.name}`);
}
createdPost(newPost);
// with arrays
let posts = [];
posts.push(newPost);
