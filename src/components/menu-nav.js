import React from 'react'
import { Link } from "gatsby";
const ScrolltoLink = () => (
    <ul id="shortcuts">
        <li>
          <Link to ="/#donuts">Donuts</Link>
        </li>
        <li>
          <Link to ="/#baked_treats">Baked Treats</Link>
        </li>
        <li>
          <Link to ="/#drinks">Drinks</Link>
        </li>
      </ul>
) 
export default ScrolltoLink;