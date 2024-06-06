import React from 'react';
import Link from 'next/link';
//import { Link as ScrollLink } from 'react-scroll';


const ClickableElements = ({ targetSection , textProps }) => {
    const handleClick = () => {
      const shopyblog = document.querySelector('#shopyblog').clientHeight;
      const blog = document.querySelector('.blog-details-post_sec').clientHeight;
      // Scroll to the specified section when the element is clicked
      if (targetSection) {
        const element = document.getElementById(targetSection);
        // const offset = element.getBoundingClientRect().top + window.scrollY - headerHeight;
        // const offset = (element.getBoundingClientRect().top + headerHeight);
        const offset = (element.offsetTop - 100);
        if (element) {
          // element.scrollIntoView({ behavior: 'smooth', block: 'start', inline: 'start' });
          window.scrollTo({
              top: offset,
              behavior: 'smooth', // Optional: Use smooth scrolling
          });
        }
      }
    };


    return (
        <div>
          {/* Clickable element */}
          <Link onClick={handleClick} href='javascript:void(0)'>{textProps}</Link>
    
          {/* ScrollLink for smooth scrolling */}
          {/* <ScrollLink
            to={targetSection}
            onClick={handleClick}
            spy={true}
            smooth={true}
             // Adjust the offset based on your layout
            duration={150}
            offset={-200}
          >
            
          </ScrollLink> */}
        </div>
      );
    };
    
    export default ClickableElements;