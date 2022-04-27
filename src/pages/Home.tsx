import { useNavigate } from 'react-router-dom'
import ilustrationImg from '../assets/images/illustration.svg'
import logoImg from '../assets/images/logo.svg'
import googleIconImg from '../assets/images/google-icon.svg'
import { Button } from '../components/Button'
import '../styles/auth.scss'
import { useAuth } from '../hooks/useAuth'


export function Home() {
    const navigate = useNavigate()
    const {signInWithGoogle, user} = useAuth()

    async function handleCreatRoom() {
        if (!user) {
            await signInWithGoogle()
        }        
        navigate('/rooms/new')
    }

    return (
        <div id='page-auth'>
            <aside>
                <img src={ilustrationImg} alt="Ilustração simbolizando perguntas e respostas" />
                <strong>Crie salas de Q&amp;A ao vivo</strong>
                <p>Tire suas dúvidas de sua audiência em tempo real</p>
            </aside>
            <main>
                <div className="main-container">
                    <img src={logoImg} alt="Letmeask" />
                    <button onClick={() => handleCreatRoom()} className="create-room">
                        <img src={googleIconImg} alt="Logo Google" />
                        Crie uma sala com o Google
                    </button> 
                    <div className="separator">ou entre em uma sala</div>
                    <form>
                        <input
                            type="rext"
                            placeholder='Digite o código da sala'
                        />
                        <Button type='submit'>
                            Entrar na sala
                        </Button>
                    </form>
                </div>
            </main>
        </div>
    )
}