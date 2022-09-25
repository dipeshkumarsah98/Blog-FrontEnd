import React, { useState } from "react";
import { Editor, EditorState } from "draft-js";
import "draft-js/dist/Draft.css";

const MyEditior = () => {
  const [editorState, setEditorState] = useState(() =>
    EditorState.createEmpty()
  );
  const editor = React.useRef(null);
  function focusEditor() {
    editor.current.focus();
  }
  return (
    <div
      className="container my-10 border border-black h-52 cursor-text px-2 py-2"
      onClick={focusEditor}
    >
      <Editor
        ref={editor}
        editorState={editorState}
        onChange={setEditorState}
        toolbar={{
          inline: { inDropdown: true },
          list: { inDropdown: true },
          textAlign: { inDropdown: true },
          link: { inDropdown: true },
          history: { inDropdown: true },
        }}
        placeholder="Write something!"
      />
    </div>
  );
};

export default MyEditior;
