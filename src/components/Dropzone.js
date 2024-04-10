import React from "react";
import { useDropzone } from "react-dropzone";

const Dropzone = ({ onFileDrop, error }) => {
  const { getRootProps, getInputProps } = useDropzone({
    onDrop: (acceptedFiles) => {
      // Call the onFileDrop function with the accepted files
      if (onFileDrop) {
        onFileDrop(acceptedFiles);
      }
    },
  });

  return (
    <div
      {...getRootProps()}
      className="mb-10 p-10 h-20 w-3/4 bg-white rounded"
      style={{ zIndex: 21 }}
    >
      <input {...getInputProps()} />
      <p className="">Drag & Drop Document</p>
      {error && <span className="text-red-500">{error}</span>}
    </div>
  );
};

export default Dropzone;
