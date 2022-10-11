import { Link } from '@mui/material';
import Image from 'next/image';
import GreenCross from '../public/green-cross.svg';

function FileList({ totalFiles, deleteFile }) {
  const files = totalFiles.map((file, index) => (
    <li key={file.path}>
      <div>
        <p>{file.path}</p>
        <Link onClick={() => deleteFile(index)}>
          <Image src={GreenCross} alt="Sitelogo" />
        </Link>
      </div>
    </li>
  ));
  return <ul className="chip-list">{files}</ul>;
}

export default FileList;
