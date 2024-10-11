import reactImg from '../../assets/react-core-concepts.png'
export default function Header(){
    return (
        <header>
        <img src={reactImg} alt="reactImg"/>
        <h1>React essentials</h1>
        <p>Core React concepts you will need for almost any app you are going to build!</p>
      </header>
    )
}