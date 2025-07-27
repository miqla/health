import { useEffect, useRef } from "react";

const UploadWidget = () => {
  const cloudinaryRef = useRef();

  useEffect(() => {
    cloudinaryRef.current = window.cloudinary;
  }, []);

  return <button className="btn btn-soft">Upload</button>;
};

export default UploadWidget;
