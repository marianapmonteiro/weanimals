import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';

const TextEditor = ({ value, onChange, width }) => {
    const modules = {
        toolbar: [
            ['bold', 'italic', 'underline', 'strike'], // Inline formatting buttons
            [{ 'header': [1, 2, 3, 4, 5, 6, true] }], // Custom header dropdown
            [{ 'list': 'ordered' }, { 'list': 'bullet' }], // Lists
        ]
    };

    return (
        <>
            <ReactQuill modules={modules} value={value} onChange={onChange} theme="snow" style={{ width: width }} />
        </>
    );
};

export default TextEditor;