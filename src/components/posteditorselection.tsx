import { Post } from "../redux/types";
import { useDispatch } from "react-redux";
import { selectPost } from "../redux/dispatchers/blog/editor/selectPost";
import { setCategory } from "../redux/dispatchers/blog/editor/setCategory";
import { setContent } from "../redux/dispatchers/blog/editor/setContent";
import { setTitle } from "../redux/dispatchers/blog/editor/setTitle";
import { toggleEditing } from "../redux/dispatchers/blog/editor/toggleEditing";

interface Props {
  data: Post;
  onClick?: () => void;
}

export const PostEditorSelection = (props: Props) => {
  const dispatch = useDispatch();

  return (
    <a
      onClick={() => {
        dispatch(selectPost(props.data));
        if (props.data.status == 1) dispatch(toggleEditing());
        props.onClick();
      }}
    >
      {props.data.title}
    </a>
  );
};
