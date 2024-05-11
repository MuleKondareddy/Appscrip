import React from "react";

const StoriesPage = () => {
  const stories = [
    {
      id: 1,
      title: "A Day in the Life of a Developer",
      author: "John Doe",
      content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit...",
    },
    {
      id: 2,
      title: "The Journey of Learning React.js",
      author: "Jane Smith",
      content: "Pellentesque habitant morbi tristique senectus et netus et...",
    },
    // Add more stories as needed
  ];

  return (
    <div>
      <h1 className="text-center">Stories</h1>
      <div className="container">
        {stories.map((story) => (
          <div key={story.id} className="card mb-3">
            <div className="card-body">
              <h5 className="card-title">{story.title}</h5>
              <p className="card-subtitle mb-2 text-muted">By {story.author}</p>
              <p className="card-text">{story.content}</p>
              <a href={`/stories/${story.id}`} className="btn btn-primary">
                Read More
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default StoriesPage;
