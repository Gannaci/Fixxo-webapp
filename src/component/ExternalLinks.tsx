import React from 'react'

interface ExternalLinkType {
  link: string
  icon: any
}

const ExternalLinks: React.FC<ExternalLinkType> = ({link, icon}) => {
  return (
    <a href={link} target="_blank">
        <i className={icon}></i>
        </a>
  )
}

export default ExternalLinks