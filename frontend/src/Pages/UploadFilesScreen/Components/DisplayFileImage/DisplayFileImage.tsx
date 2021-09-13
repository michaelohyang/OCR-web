import "./DisplayFileImage.css";

interface DisplayFileImageProps {
  fileArray: [];
  removeImage: (id: any) => void;
}

export default function DisplayFileImage(props: DisplayFileImageProps) {
  return (
    <div className="resizeImage">
      {(props.fileArray || []).map((url: any, id: any) => (
        <>
          <img src={url.image} alt="..." />
          <button onClick={() => props.removeImage(url.id)}>x</button>
        </>
      ))}
    </div>
  );
}
