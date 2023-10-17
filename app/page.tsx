import Container from './components/container'
import { Button } from './shared/button'

export default function Home() {
  return (
    <main className='text-rose-950 min-h-[300vh]'>
      <Container>
        <Button>Area Button</Button>
      </Container>
    </main>
  )
}
