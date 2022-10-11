import { Link } from '@mui/material';
import React, { useCallback, useMemo, useState } from 'react';
import { useDropzone } from 'react-dropzone';
import Image from 'next/image';
import FileUpload from '../public/file-upload-icon.svg';

const baseStyle = {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  padding: '20px',
  borderWidth: 1,
  borderRadius: 4,
  borderColor: 'rgba(0, 0, 0, 0.12)',
  borderStyle: 'dashed',
  backgroundColor: '#fff',
  transition: 'border .3s ease-in-out',
};

const activeStyle = {
  borderColor: '#2196f3',
};

const acceptStyle = {
  borderColor: '#00e676',
};

const rejectStyle = {
  borderColor: '#ff1744',
};

function FileDrop({ totalFiles, addFiles }) {
  const onDrop = useCallback((acceptedFiles) => {
    addFiles((old) => [...old, ...acceptedFiles]);
  }, []);

  const {
    acceptedFiles,
    fileRejections,
    getRootProps,
    getInputProps,
    isDragActive,
    isDragAccept,
    isDragReject,
  } = useDropzone({
    onDrop,
    accept: {
      'application/pdf': [],
    },
  });

  const style = useMemo(
    () => ({
      ...baseStyle,
      ...(isDragActive ? activeStyle : {}),
      ...(isDragAccept ? acceptStyle : {}),
      ...(isDragReject ? rejectStyle : {}),
    }),
    [isDragActive, isDragReject, isDragAccept]
  );

  return (
    <section className="container">
      <div {...getRootProps({ style })}>
        <input {...getInputProps()} />
        <Image src={FileUpload} alt="FileUpload" />
        <p>
          {' '}
          <Link>Click to upload</Link> or drag and drop Bank Statements
        </p>
      </div>
    </section>
  );
}

export default FileDrop;
