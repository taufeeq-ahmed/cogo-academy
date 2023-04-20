import Editor from "@monaco-editor/react";
import React from "react";
const EditorComponent = ({ onChange,
    language,
    code,
    theme,
    className,
    height, }) => {
    function handleEditorChange(value) {
        onChange(value)
    }

    return (
        <Editor height={height ?? '80vh'}
            width={`100%`}
            language={language || 'html'}
            value={code}
            theme={theme}
            defaultValue={code}
            onChange={(value) => handleEditorChange(value)}
        />
    );
}

export default EditorComponent;