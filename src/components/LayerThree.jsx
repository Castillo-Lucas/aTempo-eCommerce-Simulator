import React from 'react'

const LayerThree = ({ layerThree, handleSelectMegaMenu }) => {
  return (
    <div
      className={`fixed z-10 min-h-full h-full bg-zinc-800/90 w-full ${
        layerThree === true  ? "fidex drawerEffect" : "hidden"
      }`}
      onClick={(e) => {
        handleSelectMegaMenu(e);
      }}
    ></div>
  )
}

export default LayerThree
