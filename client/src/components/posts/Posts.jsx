import Post from "../post/Post"; // Importing Post component
import "./posts.css"; // Importing styles for Posts component

// Component for rendering multiple posts
export default function Posts() {
  return (
    <div className="posts"> {/* Container for posts */}
      {/* Individual post components */}
      <Post img="https://miro.medium.com/v2/resize:fit:438/1*Hm11aBfgcQ4tDnAqF5ePVQ@2x.jpeg" />
      <Post img="https://i.pinimg.com/736x/f4/c4/45/f4c445f705af66c9c86c0e4885f953a3.jpg" />
      <Post img="https://image-cdn-ak.spotifycdn.com/image/ab67706c0000da845177880dd7ecf7cce3874116"/>
      <Post img="https://i.pinimg.com/736x/60/23/69/60236935026f7d289cf729e38c582249.jpg"/>
      <Post img="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSOZdt0CAjLlJQjJ7Eed_z4XSe0_VdxWtemM0-OHysIsQ&s"/>
      <Post img="https://images.adsttc.com/media/images/5e8b/c207/b357/6565/bb00/0282/newsletter/12.jpg?1586217470"/>
      <Post img="https://drifttravel.com/wp-content/uploads/2023/01/travel-aesthetic-content-japan.jpg"/>
      <Post img="https://i.pinimg.com/474x/e2/64/c7/e264c7e698b575a1818b05787dfe64a3.jpg"/>
      <Post img="https://t4.ftcdn.net/jpg/05/78/43/83/360_F_578438327_R6MwMnxXb48epnS92AJg8tUZrYNTB9ZW.jpg"/>
    </div>
  );
}
