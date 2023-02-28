import React from 'react'
import "./portfolioList.scss"

export default function PortfolioList({id, title, active, setselect}) {
  return (
    <li className={active ? "porfolioList active" : "portfolioList"}
    onClick = {() => setselect(id)}>
        {title}
    </li>
  )
}
