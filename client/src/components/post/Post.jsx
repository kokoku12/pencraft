import { Link } from "react-router-dom"; // Importing Link component from react-router-dom
import "./post.css"; // Importing styles for Post component

// Component for rendering a single post
export default function Post({ img }) {
  return (
    <div className="post"> {/* Container for the post */}
      <img
        className="postImg"
        src={img}
        alt=""
      /> {/* Post image */}
      <div className="postInfo"> {/* Information about the post */}
        <div className="postCats"> {/* Categories of the post */}
          <span className="postCat">
            <Link className="link" to="/posts?cat=Music">
              Music
            </Link>
          </span>
          <span className="postCat">
            <Link className="link" to="/posts?cat=Life">
              Life
            </Link>
          </span>
        </div>
        <span className="postTitle"> {/* Title of the post */}
          <Link to="/post/abc" className="link">
            Article Title
          </Link>
        </span>
        <hr /> {/* Horizontal line separator */}
        <span className="postDate">1 day ago</span> {/* Date of the post */}
      </div>
      <p className="postDesc"> {/* Description of the post */}
        {/* Lorem ipsum text */}
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Assumenda
        officia architecto deserunt deleniti? Labore ipsum aspernatur magnam
        fugiat, reprehenderit praesentium blanditiis quos cupiditate ratione
        atque, exercitationem quibusdam, reiciendis odio laboriosam?Lorem ipsum
        dolor sit amet, consectetur adipisicing elit. Assumenda
        officia architecto deserunt deleniti? Labore ipsum aspernatur magnam
        fugiat, reprehenderit praesentium blanditiis quos cupiditate ratione
        atque, exercitationem quibusdam, reiciendis odio laboriosam?Lorem ipsum
        dolor sit amet, consectetur adipisicing elit. Assumenda
        officia architecto deserunt deleniti? Labore ipsum aspernatur magnam
        fugiat, reprehenderit praesentium blanditiis quos cupiditate ratione
        atque, exercitationem quibusdam, reiciendis odio laboriosam?
      </p>
    </div>
  );
}
