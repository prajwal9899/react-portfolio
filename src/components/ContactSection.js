import React from 'react'
import styled from 'styled-components'
import Button from './Button'
import PText from './PText'

const ContactBannerStyle = styled.div`
    padding: 10rem 0;
    .conatctBanner_wrapper{
        background-color: var(--deep-dark);
        border-radius: 12px;
        padding: 5rem 0;
        text-align: center;
    }
    .conatctBanner_heading{
        font-size: 4rem;
        margin-bottom: 2rem;
    }

    @media only screen and (max-width: 768px){
        .conatctBanner_heading{
            font-size: 2.8rem;
        }
    }

`

export default function ContactSection() {
    return (
        <ContactBannerStyle>
            <div className="container">
                <div className="conatctBanner_wrapper">
                    <PText >
                        Have a project in mind 
                    </PText>
                    <h3 className="conatctBanner_heading">
                        Let me help you
                    </h3>
                    <Button btnText="Contact now" btnLink="/contact" outline=""/>
                </div>
            </div>
        </ContactBannerStyle>
    )
}
