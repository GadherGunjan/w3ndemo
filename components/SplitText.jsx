import React, {useState, useEffect} from "react"
import { useInView } from 'react-intersection-observer';

const SplitText = (props) => {

  const [splitResult, setSplitResult] = useState([]); 

  const [inViewRef, inView] = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });

  const [addClass, setAddClass] = useState(false);

  useEffect(() => {
    if (inView && !addClass) {
      
      // const delayTimeout = setTimeout(() => {
      // }, 50);
      setAddClass(true);

     // return () => clearTimeout(delayTimeout);
    }

    function splitTextWithHTML(text) {

      const tempElement = document.createElement('div');
      tempElement.innerHTML = text;
  
      const nodes = Array.from(tempElement.childNodes);
      const result = [];
  
      nodes.forEach(node => {

          if (node.nodeType === Node.TEXT_NODE) {
              // const words = node.textContent.trim().split(/\s+/);
              const words = node.textContent.trim().replace(/<br\s*\/?>/gi, '\n').split('\n').filter(line => line.trim() !== '');
              result.push(...words);
          } else if (node.nodeType === Node.ELEMENT_NODE) {
              result.push(node.outerHTML);
          }
      });
  
      return result;
  }

  const result = splitTextWithHTML(props.copy);
  setSplitResult(result);
  
}, [inView, addClass ,props.copy]);

  if (props.copy) {

    function containsHtmlTags(inputString) {
      var htmlTagsPattern = /<.*?>/; // Regular expression to match HTML tags
      return htmlTagsPattern.test(inputString);
    }
    
    return (
      <div className={`wordwrap ${addClass ? 'visible' : ''}`} ref={inViewRef}>
        
        {splitResult.map(function (char, index) {
          
          let style = { "animationDelay": (0.2 + index / 10) + "s" }
          let customeVal = char
          const totalLength = props.copy.split(" ").length
          if (index !== (totalLength - 1)) {
            customeVal = char
          }
          if (containsHtmlTags(props.copy)) {
            return (
              <React.Fragment key={index}>
                <div className='word_wrap overflow-hidden'>
                  <div
                    className="word"
                    // aria-hidden="true"
                    style={style}
                    dangerouslySetInnerHTML={{ __html: customeVal }}
                  >
                  </div>
                </div>
                {/* <span className="whitespace"> </span> */}
              </React.Fragment>
            );
          } else {
            return (
              <React.Fragment key={index}>
                <div className='word_wrap overflow-hidden'>
                  <div
                    className="word"
                    // aria-hidden="true"
                    style={style}
                  >
                    {customeVal}
                  </div>
                </div>
                {/* <span className="whitespace"> </span> */}
              </React.Fragment>
            );
          }
         
        })}
      </div>
    );
  }
  return ''
}


export default SplitText;