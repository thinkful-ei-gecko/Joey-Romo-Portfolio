const body = function(){


  const render = function(){
    return  `    
`;
  };
  const appendBody = function(){
    $('body').append(render());
  };
  return {
    render,
    appendBody
  };
}();