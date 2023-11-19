import React, { useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { pb } from "../client";

export default () => {
    const [posts, setPosts] = React.useState([]);
    const [postContent, setPostContent] = React.useState('');
    const [unsubscribeFunc, setUnsubscribeFunc] = React.useState(null);
    const name = pb.authStore.model ? pb.authStore.model.name : 'Name';

    const fetchPosts = (append = false) => {
        setPosts([
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

        return Promise.resolve(posts);
        
        // Fetch posts here
        // return pb.collection('posts').getFullList({ sort: '-created' })
        //     .then((posts) => {
        //         if (append) {
        //             setPosts(oldPosts => [...posts, ...oldPosts]);
        //         } else {
        //             setPosts(posts);
        //         }
        //     });
    }

    const handlePostContentChange = (ev) => {
        setPostContent(ev.target.value);
    }

    const createPost = (ev) => {
        ev.preventDefault();

        // Create a post here
        // return pb.collection('posts').create({
        //     content: postContent
        // })
        //     .then(() => {
        //         setPostContent('');
        //     })
        //     .then(() => {
        //         // Fetch posts again to update the list
        //         return fetchPosts(true);
        //     });
    }

    useEffect(() => {
        fetchPosts();
        
        // Subscribe to posts collection
        // pb.collection('posts').subscribe('*', (sub) => {
        //     console.log(sub);

        //     if (sub.action === 'create') {
        //         setPosts(oldPosts => [sub.record, ...oldPosts]);
        //     }
        // });
    }, []);

    return (
        <div>
            {true && <div className="border-b px-6 py-3">
                <form onSubmit={createPost} className="max-w-xl mx-auto w-full flex flex-col space-y-2">
                    <h1 className="text-2xl">Hello, <span className="font-bold">{name}</span>!</h1>

                    <textarea 
                        value={postContent}
                        onChange={handlePostContentChange}
                        className="w-full border rounded-md p-2" 
                        rows={8} 
                        placeholder="What's on your mind?">
                    </textarea>

                    <button type="submit" className="button is-primary self-end">
                        Post
                    </button>
                </form>
            </div>}

            <div className="max-w-xl mx-auto pt-4">
                <h2 className="text-2xl font-bold pb-4">Posts</h2>

                <div className="space-y-4">
                    {posts.map((post, postIdx) => (
                        <Link key={`${postIdx}_${post.id ?? postIdx}`} to={`/posts/1`} className="hover:bg-slate-100 hover:border-slate-400 block border rounded-md p-4">
                            <div className="flex items-center justify-between">
                                <span className="font-bold">{post.expand?.user.name ?? 'Name'} <span className="font-normal text-slate-500">@{post.expand?.user.username ?? 'username'}</span></span>
                                <span className="text-sm">{post.created}</span>
                            </div>

                            <p className="pt-2">
                                {post.content}
                            </p>
                        </Link>))}
                </div>
            </div>
        </div>
    );
};
