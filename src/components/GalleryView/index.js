import {useParams} from "react-router-dom";

let {galleries} = useParams();
console.log({galleries})

function GalleryView() {
  return (
    <h1></h1>
  )
}

export default GalleryView;
