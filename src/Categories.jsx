import React from 'react'

// 1. {categories}
// 2. {filterItems}
const Categories = ({categories, filterItems}) => {



  return (
    <div className='btn-container'>
      {categories.map((category)=>{
        return (

          
          // 3. onClick={()=>filterItems(category)
          <button
            type="button"
            className="btn"
            key={category}
            onClick={() => filterItems(category)}
          >
            {category}
          </button>
        )



      })}
      
      
    </div>
  )
}

export default Categories