import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import contactData from './contactData';

export default function Contact() {
    return (
        <div className="icon container">
            {
                contactData.map((item, i) => {
                    const { icon, href } = item;
                    return (
                        <a href={href} target='_blank' key={`${href}-${i}`}>
                            <FontAwesomeIcon icon={ icon } size="6x" />
                        </a>
                    );
                })
            }
            {/* <a href='/beihwsgvdn'>
                <FontAwesomeIcon icon={index, i} size="6x" />
            </a>
            <FontAwesomeIcon icon={['fas', 'envelope']} size="6x" />
            <FontAwesomeIcon icon={['fab', 'github-square']} size="6x" /> */}
        </div>
    )
}
