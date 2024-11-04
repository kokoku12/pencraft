import { Link } from "react-router-dom"; // Importing Link component from react-router-dom
import "./singlePost.css"; // Importing styles for SinglePost component

// Component for rendering a single post
export default function SinglePost() {
  return (
    <div className="singlePost"> {/* Container for the single post */}
      <div className="singlePostWrapper"> {/* Wrapper for post content */}
        {/* Post image */}
        <img
          className="singlePostImg"
          src="https://images.pexels.com/photos/6685428/pexels-photo-6685428.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
          alt=""
        />
        {/* Post title with edit and delete icons */}
        <h1 className="singlePostTitle">
          The Post Title
          <div className="singlePostEdit"> {/* Container for edit and delete icons */}
            <i className="singlePostIcon far fa-edit"></i> {/* Edit icon */}
            <i className="singlePostIcon far fa-trash-alt"></i> {/* Delete icon */}
          </div>
        </h1>
        {/* Information about the post */}
        <div className="singlePostInfo">
          <span>
            Author:
            {/* Link to the author's profile */}
            <b className="singlePostAuthor">
              <Link className="link" to="/posts?username=Richneil">
                Richneil
              </Link>
            </b>
          </span>
          <span>1 day ago</span> {/* Post timestamp */}
        </div>
        {/* Post description */}
        <p className="singlePostDesc">
          {/* Long post content */}
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Iste error
          quibusdam ipsa quis quidem doloribus eos, dolore ea iusto impedit!
          Voluptatum necessitatibus eum beatae, adipisci voluptas a odit modi
          eos! Lorem, ipsum dolor sit amet consectetur adipisicing elit. Iste
          error quibusdam ipsa quis quidem doloribus eos, dolore ea iusto
          impedit! Voluptatum necessitatibus eum beatae, adipisci voluptas a
          odit modi eos! Lorem, ipsum dolor sit amet consectetur adipisicing
          elit. Iste error quibusdam ipsa quis quidem doloribus eos, dolore ea
          iusto impedit! Voluptatum necessitatibus eum beatae, adipisci voluptas
          a odit modi eos! Lorem, ipsum dolor sit amet consectetur adipisicing
          elit. Iste error quibusdam ipsa quis quidem doloribus eos, dolore ea
          iusto impedit! Voluptatum necessitatibus eum beatae, adipisci voluptas
          a odit modi eos! Lorem, ipsum dolor sit amet consectetur adipisicing
          elit. Iste error quibusdam ipsa quis quidem doloribus eos, dolore ea
          iusto impedit! Voluptatum necessitatibus eum beatae, adipisci voluptas
          a odit modi eos!
          <br />
          <br />
          {/* More post content */}
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Iste error
          quibusdam ipsa quis quidem doloribus eos, dolore ea iusto impedit!
          Voluptatum necessitatibus eum beatae, adipisci voluptas a odit modi
          eos! Lorem, ipsum dolor sit amet consectetur adipisicing elit. Iste
          error quibusdam ipsa quis quidem doloribus eos, dolore ea iusto
          impedit! Voluptatum necessitatibus eum beatae, adipisci voluptas a
          odit modi eos! Lorem, ipsum dolor sit amet consectetur adipisicing
          elit. Iste error quibusdam ipsa quis quidem doloribus eos, dolore ea
          iusto impedit! Voluptatum necessitatibus eum beatae, adipisci voluptas
          a odit modi eos! Lorem, ipsum dolor sit amet consectetur.
        </p>
      </div>
    </div>
  );
}
