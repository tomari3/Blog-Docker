import { Comment } from "./Comment";
import { Loading } from "../../../assets/Loading";

export const Comments = ({ data, sub }) => {
  const comments = !(data[0] instanceof Object) ? (
    <Loading />
  ) : (
    data.map((comment) => {
      return <Comment key={comment._id} commentData={comment} sub={sub} />;
    })
  );

  return (
    <div className={`comment-section_${sub ? "sub-" : ""}comments`}>
      {data.length === 0 ? "no comments" : comments}
    </div>
  );
};
