import "./DisplayFileImage.css";

interface DisplayFileImageProps {
  fileArray: [];
  removeImage: (id: any) => void;
}

export default function DisplayFileImage(props: DisplayFileImageProps) {
  return (
    <div>
      {(props.fileArray || []).map((url: any, id: any) => (
        <div className="resizeImage">
          <img className="picture" src={url.image} alt="medicalImage" />

          <div className="deleteBtn">
            <button onClick={() => props.removeImage(url.id)}>x</button>
          </div>
        </div>
      ))}
    </div>
  );
}
