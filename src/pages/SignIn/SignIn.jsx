import { Background, Container, Form } from "./styles";
import { FiMail, FiLock} from "react-icons/fi"
import { Input } from "../../components/Input/Input";
import { Button } from "../../components/Button/Button";

export default function SignIn(){
  return(
    <Container>
      <Form>
        <h1>Notes</h1>
        <p>App to save and manage your asufel links and notes</p>
        <h2>Sign In</h2>

        <Input 
          placeholder="E-mail"
          type="text"
          icon={ FiMail }
        />
        <Input 
          placeholder="Password"
          type="password"
          icon={ FiLock }
        />
        <Button title="Sign In" />
        <a href="#">Sign Up</a>
      </Form>
      <Background />
    </Container>
  )
}