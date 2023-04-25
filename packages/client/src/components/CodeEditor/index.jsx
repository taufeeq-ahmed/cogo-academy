import Editor from "@monaco-editor/react";
import React from "react";
import styles from './styles.module.css'
const EditorComponent = ({ onChange,
    language,
    code,
    theme,
    className,
    height, style_box={} }) => {
    function handleEditorChange(value) {
        onChange(value);
    }

    return (
        <div className={styles.style_box}>
            <Editor height={height ?? '80vh'}
                width={`100%`}
                language={language || 'html'}
                value={code}
                theme={theme}
                // defaultValue={code}
                onChange={(value) => handleEditorChange(value)}
            />
        </div>
    );
}

export default EditorComponent;