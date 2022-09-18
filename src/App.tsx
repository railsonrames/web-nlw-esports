import './styles/main.css'

import logoImg from './assets/logo.svg'

function App() {
  return (
    <div className='max-w-[1344px] mx-auto flex flex-col items-center my-20'>
      <img src={logoImg} />
      <h1 className='text-6xl text-white font-black my-20'>
        Seu <span className='text-transparent bg-nlw-gradient bg-clip-text'>duo</span> está aqui
      </h1>

      <div className='grid grid-cols-6 gap-6 mt-16'>
        <a href='' className='relative rounded-lg overflow-hidden'>
          <img src='/game-1.svg' />
          <div className='w-full pt-16 pb-4 px-4 bg-game-gradient absolute bottom-0 left-0 right-0'>
            <strong className='font-bold text-white block'>Legue of Legends</strong>
            <span className='text-zinc-300 text-sm block'>34 anúncios</span>
          </div>
        </a>
        <a href='' className='relative rounded-lg overflow-hidden'>
          <img src='/game-2.svg' />
          <div className='w-full pt-16 pb-4 px-4 bg-game-gradient absolute bottom-0 left-0 right-0'>
            <strong className='font-bold text-white block'>Dota 2</strong>
            <span className='text-zinc-300 text-sm block'>14 anúncios</span>
          </div>
        </a>
        <a href='' className='relative rounded-lg overflow-hidden'>
          <img src='/game-3.svg' />
          <div className='w-full pt-16 pb-4 px-4 bg-game-gradient absolute bottom-0 left-0 right-0'>
            <strong className='font-bold text-white block'>CS: GO</strong>
            <span className='text-zinc-300 text-sm block'>32 anúncios</span>
          </div>
        </a>
        <a href='' className='relative rounded-lg overflow-hidden'>
          <img src='/game-4.svg' />
          <div className='w-full pt-16 pb-4 px-4 bg-game-gradient absolute bottom-0 left-0 right-0'>
            <strong className='font-bold text-white block'>Apex Legends</strong>
            <span className='text-zinc-300 text-sm block'>7 anúncios</span>
          </div>
        </a>
        <a href='' className='relative rounded-lg overflow-hidden'>
          <img src='/game-5.svg' />
          <div className='w-full pt-16 pb-4 px-4 bg-game-gradient absolute bottom-0 left-0 right-0'>
            <strong className='font-bold text-white block'>Fortnite</strong>
            <span className='text-zinc-300 text-sm block'>12 anúncios</span>
          </div>
        </a>
        <a href='' className='relative rounded-lg overflow-hidden'>
          <img src='/game-6.svg' />
          <div className='w-full pt-16 pb-4 px-4 bg-game-gradient absolute bottom-0 left-0 right-0'>
            <strong className='font-bold text-white block'>Word of Warcraft</strong>
            <span className='text-zinc-300 text-sm block'>3 anúncios</span>
          </div>
        </a>
      </div>
    </div>
  )
}

export default App
