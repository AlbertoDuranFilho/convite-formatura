import { useRef } from 'react'
import Envelope from './components/Envelope'
import SecaoCapa from './components/SecaoCapa'
import SecaoSaveTheDate from './components/SecaoSaveTheDate'
import SecaoEngracada from './components/SecaoEngracada'
import SecaoLembrete from './components/SecaoLembrete'
import SecaoTrajetoria from './components/SecaoTrajetoria'
import SecaoAgradecimento from './components/SecaoAgradecimento'
import BotaoVoltarTopo from './components/BotaoVoltarTopo'

function App() {
  const audioRef = useRef(null)

  const handleOpen = () => {
    // a música só toca depois do gesto do usuário (clique no envelope),
    // que é o que libera o autoplay no navegador.
    // Troque o src abaixo pelo arquivo final quando tiver a música.
    audioRef.current?.play().catch(() => {})
  }

  return (
    <div className="min-h-screen bg-bege-fundo">
      <Envelope onOpen={handleOpen} />

      <audio ref={audioRef} loop src="/audio/trilha.mp3" />

      <main>
        <SecaoCapa />
        <SecaoSaveTheDate />
        <SecaoEngracada />
        <SecaoLembrete />
        <SecaoTrajetoria />
        <SecaoAgradecimento />
      </main>

      <BotaoVoltarTopo />
    </div>
  )
}

export default App
