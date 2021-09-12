import "./DisplayFileImage.css";

interface DisplayFileImageProps {
  fileArray: [];
}

export default function DisplayFileImage(props: DisplayFileImageProps) {
  return (
    <div className="resizeImage">
      {(props.fileArray || []).map((url: any) => (
        <img src={url} alt="..." />
      ))}
    </div>
  );
}
