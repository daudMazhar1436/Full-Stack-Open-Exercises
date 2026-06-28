const App = () => {
  const course = 'Half Stack application development'
  const part1 = {
    name: 'Fundamentals of React',
    exercise: 10
  }

  const part2 = {
    name: 'Using props to pass data',
    exercise: 7
  }

  const part3 = {
    name: 'State of a component',
    exercise: 14
}

  return (
    <div>
      <Header courseName =  {course} />
      <Content part1 = {part1} part2 = {part2} part3 = {part3}/>
      <Total part1 = {part1} part2 = {part2} part3 = {part3}/>
    </div>
  )
}

const Header = (props) => {
  console.log(props)
  return(
  <h1>{props.courseName}</h1>)
}

const Content = (props) => {
  console.log(props)
  return (
    <div>
      <Part part = {props.part1}/>
      <Part part = {props.part2}/>
      <Part part = {props.part3}/>
    </div>
  )
}

const Part = (props) => {
  console.log(props)
  return(
    <p> {props.part.name} {props.part.exercise}</p>
  )
}

const Total = (props) => {
  console.log(props)
  return(
    <p> Total Number of Exercises: {props.part1.exercise + props.part2.exercise + props.part3.exercise}</p>
  )
}

export default App