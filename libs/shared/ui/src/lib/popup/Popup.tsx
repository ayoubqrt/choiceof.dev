import { FC } from 'react'

interface PopupProps {
  text: string
}

export const Popup: FC<PopupProps> = ({ text }) => {
  return (
    <a
      href="https://github.com/bdebon/choiceof.dev"
      target="_blank"
      rel="noopener noreferrer"
      className="fixed flex bottom-1/2 left-1/2 ml-[-6.5rem] md:bottom-3 md:left-3 md:ml-0 z-10 bg-white w-52 h-12 justify-center items-center animate-popup opacity-90 rounded-md border-black border-4"
    >
      {text}
    </a>
  )
}
