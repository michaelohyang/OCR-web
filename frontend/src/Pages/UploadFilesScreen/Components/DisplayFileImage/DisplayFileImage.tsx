import { useState } from "react";
import "./DisplayFileImage.css";

interface DisplayFileImageProps {
  fileArray: [];
  removeImage: (id: any) => void;
}

/**
 * Shows the images that has been uploaded onto the UI
 * @param props interface that allows this function to use properties from its parent
 * @returns a TSX element
 */
export default function DisplayFileImage(props: DisplayFileImageProps) {
  const [defaultImages, setDefaultImages] = useState<boolean>(true);
  const [clickedImage, setClickedImage] = useState<any>();

  /**
   * When clicked, it will either expand or minimize a image
   * @param image event handler (the image to be expanded or minimized)
   * @returns void
   */
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
