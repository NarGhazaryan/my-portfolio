import React from 'react';
import { CopyToClipboard } from 'react-copy-to-clipboard';

import './JobCard.css'

const JobCard = ({ i }) => {
    const [copied, setCopied] = React.useState(false)

    function copy() {
        setCopied(true)
        setTimeout(() => {
            setCopied(false)
        }, 1500)
    }

    return (
        <div className="JobCard">
            <div className="JobHeader">
                <div className="JobDesc">
                    <p style={{ display: "inline-block", margin: 0, color: "rgb(79, 227, 195)", fontSize: '1.5rem' }}>{i.title}</p>
                    <p style={{ display: "inline-block", margin: 0, color: "rgb(79, 227, 195)", fontSize: '1.2rem' }}>{i.description}</p>
                </div>
            </div>
            {i.icons}
            <CopyToClipboard text={i.gitClone}>
                <div onClick={copy} className="copy-div">{copied ? 'Link Copied' : 'Copy Git clone link'}</div>
            </CopyToClipboard>
        </div>
    );
}

export default JobCard;