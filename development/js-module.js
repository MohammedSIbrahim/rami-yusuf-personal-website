// This function calculates the position of the <body> element relative to the document
export const bodyPositionRelative = () => {
    const body = document.body;
  
    // Get the bounding rectangle of the <body> element relative to the viewport
    const bodyRect = body.getBoundingClientRect();
  
    // Get the scroll offsets of the document
    const scrollLeft = window.pageXOffset || document.documentElement.scrollLeft;
    const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
  
    // Calculate the absolute position of the <body> element relative to the document
    const position = {
      top: `${bodyRect.top} ${scrollTop}`,
      left: `${bodyRect.left} ${scrollLeft}`
    };
  
    return position;
  };
