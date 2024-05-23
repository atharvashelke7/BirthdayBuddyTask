import { useState } from 'react'
import './App.css'


const friendsBirthdays = [
  {
    avatarUrl: "https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg",
    name: "Bertie Yates",
    age: "29 years"
  },
  {
    avatarUrl: "https://images.pexels.com/photos/837358/pexels-photo-837358.jpeg?auto=compress&cs=tinysrgb&w=600",
    name: "Heast Hogan",
    age: "25 years"
  },
  {
    avatarUrl: "https://images.pexels.com/photos/762080/pexels-photo-762080.jpeg?auto=compress&cs=tinysrgb&w=600",
    name: "Larry Little",
    age: "26 years"
  },
  {
    avatarUrl: "https://images.pexels.com/photos/307847/pexels-photo-307847.jpeg?auto=compress&cs=tinysrgb&w=600",
    name: "sean Walsh",
    age: "23 years"
  },
  {
    avatarUrl: "https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=compress&cs=tinysrgb&w=600",
    name: "Brain Yates",
    age: "29 years"
  }
]

function App() {

  const [list, setList] = useState(friendsBirthdays);


  return (


    <div className='main'>
      <div>
        <h2 className='heading'>{list.length} Birthdays Today</h2>
        <section className='details'>
          {
            list.map((friends, i) => {

              const { avatarUrl, name, age } = friends;

              return (

                <article className='art' key={i}>
                  <img className='image' width={"60px"} height={"60px"} src={avatarUrl} alt="" />
                  <div className='info'>
                    <h3>{name}</h3>
                    <p className='name'>{age}</p>
                  </div>
                </article>
              );
            })
          }
          <div className='btn'>
            <button onClick={() => {
              setList([]);
            }}>Clear All</button>
          </div>

        </section>

      </div>

    </div>


  )
}

export default App
