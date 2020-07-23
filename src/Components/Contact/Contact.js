import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export default function Contact() {
    return(
        <div className="icon container">
            <FontAwesomeIcon icon={['fab', 'linkedin']} size="6x" />
            <FontAwesomeIcon icon={['fas', 'envelope']} size="6x" />
            <FontAwesomeIcon icon={['fab', 'github-square']} size="6x" />
        </div>
    )
}
