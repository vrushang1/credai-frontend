function FileList({totalFiles }) {

    const files = totalFiles.map(file => (
        <li key={file.path}>
        {file.path}
        </li>
    ));
    return (
        <ul>
            {files}
        </ul>
    );

}

export default FileList;