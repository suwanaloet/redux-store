import React from "react";

// The ...props means, spread all of the passed props onto this element
// That way we don't have to define them all individually

//Was never reliant on Connect() GlobalState
//leave as is
function DeleteBtn(props) {
  return (
    <span {...props} role="button" tabIndex="0">
      ✗
    </span>
  );
}

export default DeleteBtn;
