import React from "react"
import Hero from "../dashboard/Hero"
import mainImg from "../../assets/animated_illustrations/solution_animation.json"
import Tabs from "../smallComponents/Tabs"
import { useAuth } from "../../context/AuthContext"

const MySolutions = () => {
  const { currentUser } = useAuth()
  return (
    <div className="sm:ml-0 transition cursor-pointer  px-5 row-start-2 row-end-3 col-start-2 col-end-3 text-purple-50 min-h-screen">
      <Hero
        title="All the solutions and details of ongoing challenges can be found"
        span="here 📚"
        subTitle="Welcome To Coding Space 😊"
        mainImg={mainImg}
        btnTitle="Explore Challenges "
        logoTitle="fas fa-arrow-right"
        lottie
      />
      {currentUser ? <Tabs userID={currentUser.id} /> : null}
    </div>
  )
}

export default MySolutions
