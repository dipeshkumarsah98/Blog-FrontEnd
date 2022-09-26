import React, { useState } from "react";
import { useRef } from "react";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";

const MyEditior = () => {
  const [value, setValue] = useState("");
  const editor = useRef();
  const modules = {
    toolbar: [
      [{ header: [1, 2, false] }],
      ["bold", "italic", "underline", "strike", "blockquote"],
      [
        { list: "ordered" },
        { list: "bullet" },
        { indent: "-1" },
        { indent: "+1" },
      ],
      ["link", "image"],
      ["clean"],
    ],
  };

  const formats = [
    "header",
    "bold",
    "italic",
    "underline",
    "strike",
    "blockquote",
    "list",
    "bullet",
    "indent",
    "link",
    "image",
  ];

  const handleSubmit = () => {
    const data = editor.current.unprivilegedEditor.getHTML();
    console.log(data);
    setValue(data);
  };

  const getData = (data) => <div>{data}</div>;
  return (
    <>
      <ReactQuill
        ref={editor}
        theme="snow"
        modules={modules}
        formats={formats}
        className="h-96 py-5 mx-5 bg-gray-100 text-5xl"
        placeholder="enter your text"
      ></ReactQuill>
      <button
        className="bg-blue-600 text-white px-4 py-2 mt-20 ml-5"
        onClick={handleSubmit}
      >
        Submit
      </button>
      <div className="mx-5 my-5">
        {value && <div dangerouslySetInnerHTML={{ __html: value }}></div>}
      </div>
    </>
  );
};

export default MyEditior;
