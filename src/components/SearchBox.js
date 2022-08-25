import React from 'react'

function SearchBox({searchContent,onChangeField}) {
  return (
    <div className="ma3 bb5 bc-black">
        <input 
               className="pa3 bg-light-blue br4"
               type="text" 
               placeholder="Veille de une ville"
               onChange={onChangeField}
               value={searchContent}
          />
               

    </div>
  )
}

export default SearchBox