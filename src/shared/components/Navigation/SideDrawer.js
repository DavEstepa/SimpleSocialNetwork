import React from "react";
import { createPortal } from 'react-dom';

import './SideDrawer.css'

const SideDrawer = (props) => {
    const drawer = <aside className="side-drawer">{props.children}</aside>;
    return createPortal(drawer, document.getElementById("drawer-hook"))
}

export default SideDrawer;