import JoditEditor from 'jodit-react';
// import dynamic from 'next/dynamic';
import React, { useRef, useMemo } from 'react';
function RTEditor({ value, onChange }) {
	const editor = useRef(null);

	const config = useMemo(
		() => ({
			readonly                      : false, // all options from https://xdsoft.net/jodit/doc/
			height                        : '600px',
			width                         : '100%',
			enableDragAndDropFileToEditor : true,
			buttons                       : [
				'source',
				'|',
				'bold',
				'italic',
				'underline',
				'|',
				'ul',
				'ol',
				'|',
				'font',
				'fontsize',
				'brush',
				'paragraph',
				'|',
				'image',
				'table',
				'link',
				'|',
				'left',
				'center',
				'right',
				'justify',
				'|',
				'undo',
				'redo',
				'|',
				'hr',
				'eraser',
				'fullsize',
				'preview',
			],
			uploader             : { insertImageAsBase64URI: true },
			removeButtons        : ['brush', 'file'],
			showXPathInStatusbar : false,
			showCharsCounter     : false,
			showWordsCounter     : false,
			toolbarAdaptive      : true,
			toolbarSticky        : false,
		}),
		[],
	);

	return (
		<JoditEditor
			config={config}
			value={value}
			ref={editor}
			tabIndex={0}
			onBlur={(k) => {
				onChange(k);
			}}

		/>
	);
}
export default RTEditor;
