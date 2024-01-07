import * as Dialog from '@radix-ui/react-dialog';
import { IoMdClose } from 'react-icons/io';

type ModalProps = {
  isOpen: boolean
  onChange: (open:boolean) => void ;
  title: string
  description:string
  children: React.ReactNode
}
const Modal = ({children, description,isOpen,onChange,title}:ModalProps) => {
  return (
    <Dialog.Root
    open={isOpen}
    onOpenChange={onChange}
    defaultOpen={true}

    >
      <Dialog.Portal>
        <Dialog.Overlay
        className='bg-black bg-opacity-50
        backdrop-blur-sm fixed inset-0
        '
        >
          <Dialog.Content
          className='fixed drop-shadow-md border border-neutral-700 top-[50%] 
          left-[50%] max-h-full  h-full md:h-auto md:max-h-[80%] w-[90%] md:w-[50%]
          md:max-w-[450px] translate-x-[-50%] translate-y-[-50%] bg-neutral-800
          p-[25px] focus:outline-none rounded-md
          '
          >
            <Dialog.Title
            className='text-xl text-center font-bold mb-4'
            >
              {title}
            </Dialog.Title>
            <Dialog.Description
            className='text-center mb-5 text-sm leading-normal'
            >

              {description}
            </Dialog.Description>
            <div>
              {children}
            </div>
            <Dialog.Close asChild>
              <button className="text-neutral-400 hover:text-white
              absolute top-2 right-2 inline-flex h-5 w-5 appearance-none items-center justify-center 
              rounded-full bg-neutral-700 
              ">
                <IoMdClose size={30} />
              </button>
            </Dialog.Close>
          </Dialog.Content>
        </Dialog.Overlay>

      </Dialog.Portal>
      
    </Dialog.Root>
  )
}

export default Modal
