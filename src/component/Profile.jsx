import React from 'react'

const Profile = () => {
  return (
    <div>
    <h1>passing jsx as props </h1>
<ProfileCart
name='tom'
age={23}
greeting={
    <div>
        <strong>hello tom</strong>
        </div>}
>
<p>Hobbies:reading</p>
<button>contact</button>
</ProfileCart>

    </div>
  )
}

export default Profile

function ProfileCart(props){
return <>
<h2>name:{props.name}</h2>
<p>age:{props.age}</p>
<p>greeting:{props.greeting}</p>
<div>{props.children}</div>
</>
}