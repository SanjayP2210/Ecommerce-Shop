import React, { useState, useEffect, useRef } from "react";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css"; // Import the styles

const TextEditor = ({ setValue ,value}) => {
  const defaultContent = "<p>This is the default content</p>";
  const [content, setContent] = useState(value || '');
  const [isQuillLoaded, setIsQuillLoaded] = useState(false);
  const quillRef = useRef(null);

  // Function to handle change in editor
  const handleChange = (value) => {
    setContent(value);
    setValue(value);
  };

  // Check if Quill is loaded
  useEffect(() => {
    const checkQuillLoaded = () => {
      if (quillRef.current && quillRef.current.getEditor()) {
        // setIsQuillLoaded(true);
      }
    };

    // Delay to allow Quill to load
    const intervalId = setInterval(checkQuillLoaded, 100);

    // Cleanup interval on component unmount
    return () => clearInterval(intervalId);
  }, []);

  return (
    <div>
      <ReactQuill
        ref={quillRef}
        value={content || value}
        onChange={handleChange}
        modules={TextEditor.modules}
        formats={TextEditor.formats}
      />
      {/* {isQuillLoaded ? <p>Quill is loaded</p> : <p>Loading Quill...</p>} */}
    </div>
  );
};

// Customize the modules and formats according to your needs
TextEditor.modules = {
  toolbar: [
    [{ header: [] }, { font: [] }],
    [{ list: "ordered" }, { list: "bullet" }],
    ["bold", "italic", "underline", "strike", "blockquote"],
    ["link", "image"],
    [{ align: [] }],
    ["clean"],
  ],
};

TextEditor.formats = [
  "header",
  "font",
  "size",
  "bold",
  "italic",
  "underline",
  "strike",
  "blockquote",
  "list",
  "bullet",
  "link",
  "image",
  "align",
];

export default TextEditor;
