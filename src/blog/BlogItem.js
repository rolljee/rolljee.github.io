import { useParams } from "react-router-dom";
import content from "./content";

export default function BlogItem() {
  const { id } = useParams();

  return content[id] ? content[id]() : <div>Not found</div>;
}
