import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { pb } from '../client';

const Post = () => {
    const [comments, setComments] = useState([]);
    const [post, setPost] = useState(null);
    const { id } = useParams();
    const [commentContent, setCommentContent] = useState('');

    const handleCommentContentChange = (ev) => {
        setCommentContent(ev.target.value);
    }

    const fetchPost = () => {
        const post = {
            expand: {
                user: {
                    name: 'Name',
                    username: 'username'
                }
            },
            created: new Date().toISOString(),
            content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.'
        };

        setPost(post);
        setComments([
            {
                expand: {
                    user: {
                        name: 'Name',
                        username: 'username'
                    }
                },
                created: new Date().toISOString(),
                content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.'
            }
        ]);

        return Promise.resolve(post);
        // return pb.collection('post').getOne(id, { 
        //     expand: 'user,comments(post).user' 
        // })
        //     .then((post) => {
        //         setPost(post);

        //         if (Array.isArray(post.expand.comments)) {
        //             setComments(post.expand.comments);
        //         }
        //     });
    }

    const postComment = (ev) => {
        ev.preventDefault();

        // Post comment here
        // return pb.collection('comments').create({
        //     content: commentContent,
        //     // post: post.id
        //     // user: pb.authStore.model.id
        // })
        //     .then(() => {
        //         // Fetch post again to update the list
        //         return fetchPost();
        //     });
    }

    useEffect(() => {
        fetchPost();

        // Subscribe to comments collection
        // pb.collection('comments').subscribe('*', (sub) => {
        //     console.log(sub);

        //     if (sub.action === 'create') {
        //         setComments(oldComments => [sub.record, ...oldComments]);
        //     }
        // });
    }, []);

    return (
        <div>
            <div className="max-w-xl mx-auto py-4">
                {post && <>
                    <div>
                        <p className="font-bold">{post.expand.user.name}</p>
                        <p className="font-normal text-slate-500">@{post.expand.user.username}</p>
                    </div>

                    <p className="pt-2 pb-4 text-2xl">
                        {post.content}
                    </p>

                    <div>
                        <span className="text-sm">Posted {post.created}</span>
                    </div>
                </>}
            </div>
            <div className="border-t py-4">
                {/* Comments section */}
                <div className="max-w-xl mx-auto">
                    <h3 className="text-xl font-bold pb-4">Comments</h3>

                    {/* comment box */}
                    <form onSubmit={postComment} className="flex flex-col space-y-4 pb-4 border-b">
                        <textarea className="w-full border rounded-md p-2" rows={4} placeholder="What's on your mind?">
                        </textarea>

                        <button className="button is-primary self-end">
                            Post
                        </button>
                    </form>

                    <div className="divide-y">
                        {comments.map(comment => (
                            <div className="py-4">
                                <div className="flex items-center justify-between">
                                    <span className="font-bold">{comment.expand.user.name} <span className="font-normal text-slate-500">@{comment.expand.user.username}</span></span>
                                    <span className="text-sm">{comment.created}</span>
                                </div>

                                <p className="pt-2">
                                    {comment.content}
                                </p>
                            </div>))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Post;
