import React from "react";
import { createPortal } from 'react-dom';
import { CSSTransition } from "react-transition-group";

import './SideDrawer.css'

const SideDrawer = (props) => {
    const nodeRef = React.useRef(null);
    const drawer = (
        <CSSTransition
            nodeRef={nodeRef} //Fix: findDOMNode was passed an instance of Transition which is inside StrictMode. Instead, add a ref directly to the element you want to reference
            in={props.show}
            timeout={200}
            classNames="slide-in-left"
            mountOnEnter
            unmountOnExit
        >
            <aside className="side-drawer" onClick={props.onClick}>{props.children}</aside>
        </CSSTransition>
    );
    return createPortal(drawer, document.getElementById("drawer-hook"))
}

export default SideDrawer;