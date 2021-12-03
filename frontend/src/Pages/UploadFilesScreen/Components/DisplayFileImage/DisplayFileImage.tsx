import { useState } from "react";
import "./DisplayFileImage.css";

interface DisplayFileImageProps {
  fileArray: [];
  removeImage: (id: any) => void;
}

export default function DisplayFileImage(props: DisplayFileImageProps) {
  const [defaultImages, setDefaultImages] = useState<boolean>(true);
  const [clickedImage, setClickedImage] = useState<any>();

  let showExpandedImage = (image: any) => {
    if (defaultImages === true) {
      setClickedImage(image);
      setDefaultImages(false);
    } else {
      setDefaultImages(true);
    }
  };

  return (
    <div>
      {(props.fileArray || []).map((image: any, id: any) =>
        defaultImages ? (
          <div className="resizeImage" key={id}>
            <img
              className="picture"
              src={URL.createObjectURL(image)}
              alt="medicalImage"
              onClick={(e) => showExpandedImage(image)}
            />
            <div className="deleteBtn">
              <button onClick={() => props.removeImage(id)}>&times;</button>
            </div>
          </div>
        ) : (
          <div id="myModal" className="modal" key={id}>
            <span
              className="closeExpandedImage"
              onClick={(e) => showExpandedImage(image)}
            >
              &times;
            </span>
            <img
              src={URL.createObjectURL(clickedImage)}
              className="modal-content"
              alt="expandedImage"
            />
          </div>
        )
      )}
    </div>
  );
}
