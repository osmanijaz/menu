import React, { useState } from 'react'
import Title from './Title'
import menu from './data'
import Menu from './Menu'
import Categories from './Categories'


// // 1.
// const tempCategories = menu.map((item)=>item.category)
// // 2.
// const tempSet = new Set(tempCategories)
// // 3.
// const tempItems = ['all',...tempSet]
// console.log(tempItems)

// 4.
const allCategories = ['all', ...new Set(menu.map((item)=>item.category))]



const App = () => {
 
const [menuItems, setMenuItems] = useState(menu)

// 5.
const [categories, setCategories] = useState(allCategories)
// console.log(categories)

// 6.
const filterItems = (category)=>{

// 9. all
if(category === 'all'){
  setMenuItems(menu)
  return

}

  console.log(category)



  // 8.
  const newItems = menu.filter((item)=>item.category === category)
setMenuItems(newItems)

}





  return (
    <main>
      <section className="menu">
        <Title text="Our Menu" />

        {/* 6. */}
        {/* 7. filterItems={filterItems} */}
        <Categories categories={categories} filterItems={filterItems} />

        <Menu items={menuItems} />
      </section>
    </main>
  )
}

export default App