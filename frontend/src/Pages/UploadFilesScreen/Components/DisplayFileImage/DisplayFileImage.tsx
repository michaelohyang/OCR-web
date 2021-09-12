interface DisplayFileImageProps {
  fileArray: [];
}

export default function DisplayFileImage(props: DisplayFileImageProps) {
  return (
    <div className="form-group images-preview">
      {(props.fileArray || []).map((url: any) => (
        <img src={url} alt="..." />
      ))}
    </div>
  );
}
