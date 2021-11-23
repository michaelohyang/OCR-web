import { useState } from "react";
import "./DisplayFileImage.css";

interface DisplayFileImageProps {
  fileArray: [];
  removeImage: (id: any) => void;
}

export default function DisplayFileImage(props: DisplayFileImageProps) {
  const [defaultImages, setDefaultImages] = useState<boolean>(true);

  let showExpandedImage = (url: any, e: any) => {
    console.log(url);
    console.log(e);
    if (defaultImages === true) {
      setDefaultImages(false);
    } else {
      setDefaultImages(true);
    }
  };

  return (
    <div>
      {(props.fileArray || []).map((url: any, id: any) =>
        defaultImages ? (
          <div className="resizeImage">
            <img
              className="picture"
              src={url.image}
              alt="medicalImage"
              onClick={(e) => showExpandedImage(url, e)}
            />
            <div className="deleteBtn">
              <button onClick={() => props.removeImage(url.id)}>&times;</button>
            </div>
          </div>
        ) : (
          <div id="myModal" className="modal">
            <span
              className="closeExpandedImage"
              onClick={(e) => showExpandedImage(url, e)}
            >
              &times;
            </span>
            <img
              src={url.image}
              className="modal-content"
              alt="expandedImage"
            />
          </div>
        )
      )}
    </div>
  );
}
