import React, { useEffect, useState } from 'react';
import axios from 'axios';

const NewsFeed = () => {
    const [posts, setPosts] = useState([]);

    useEffect(() => {
        const fetchPosts = async () => {
            try {
                const response = await axios.get('http://localhost:3000/posts'); // Replace with your API endpoint for fetching posts
                setPosts(response.data);
            } catch (error) {
                console.log('Error fetching posts:', error);
            }
        };

        fetchPosts();
    }, []);

    return (
        <section className="py-5 text-center container">
            <div className="row py-lg-5">
                <div className="col-lg-6 col-md-8 mx-auto">
                    <h1 className="fw-light">News Feed</h1>
                    <div className="news-feed-content">
                        <p className="lead text-body-secondary">
                            Here is the list of all posts of people that you follow.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default NewsFeed;
