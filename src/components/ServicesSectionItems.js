import React from 'react'
import {MdDesktopMac} from 'react-icons/md'
import styled from 'styled-components'
import Ptext from './PText'

const ItemStyles = styled.div`
    text-align: center;
    .services_item_icon{
        svg{
            width: 3rem;
        }
        .servicesItem_title{
            font-size: 2.5rem;
            font-family: 'Montserrat Semibold';
        }
        .para{
            margin-top: 2rem;
        }
    }
`

export default function ServicesSectionItems({
    icon=<MdDesktopMac />,
    title="web Design",
    description =" Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nisi adipisci blanditiis quasi odit dolore suscipit praesentium minus eius aliquid! Enim?"

}) {
    return (
        <ItemStyles>
           <div className="services_item_icon">
               {icon}
               <div className="servicesItem_title">{title}</div>
               <Ptext>
                  {description}
               </Ptext>
           </div>
        </ItemStyles>
    )
}
