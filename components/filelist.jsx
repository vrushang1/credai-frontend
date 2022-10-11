function FileList({totalFiles, deleteFile }) {

    const files = totalFiles.map((file, index) => (
        <li key={file.path}>
            {file.path} <span onClick={() => deleteFile(index)}>X</span>
        </li>
    ));
    return (
        <ul>
            {files}
        </ul>
    );

}

export default FileList;