import { Button } from "@nextui-org/react";
import PlusIcon from "../../../assets/icons/Plus";
import MovieCommentBox from "./MovieCommentBox";

export default function MovieComment() {
  return (
    <div className="space-y-10">
      <div className="flex items-center justify-between">
        <h3 className="text-gray-600 dark:text-gray-60 text-sm md:text-lg">Reviews</h3>
        <Button className="rounded-lg dark:bg-black-8 py-3.5 px-4 text-sm md:text-lg" startContent={<PlusIcon />}>Add Your Review</Button>
      </div>
      <MovieCommentBox />
      <MovieCommentBox />
      <MovieCommentBox />
    </div>
  );
}
