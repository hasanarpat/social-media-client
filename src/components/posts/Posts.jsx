import "./posts.scss";
import Post from "../post/Post";
import { useQuery } from "react-query";
import { makeRequest } from "../../axios";

const Posts = () => {
  const { isLoading, error, data } = useQuery(["posts"], () =>
    makeRequest.get("/posts").then((res) => {
      return res.data;
    })
  );
  console.log(data);
  console.log(error);

  return (
    <div className="posts">
      {error
        ? "Something went wwrong"
        : isLoading
        ? "loading"
        : data.map((post) => <Post key={post.id} post={post} />)}
    </div>
  );
};

export default Posts;
