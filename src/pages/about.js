import Navbar from "../components/Navbar";
import Card from "../components/Card"


export default function About() {
  const name = "John"
    
    return (
      <div>
        <Navbar />
        <Card 
          firstname={name}
          lastname={"Doe"}
          address="Davao"
         />
    </div>
    )
}