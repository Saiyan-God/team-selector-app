
import { MdDelete } from 'react-icons/md';

export interface DeleteButtonType {
    onClick?: React.MouseEventHandler<HTMLButtonElement>
    className?: string
}

export default function DeleteButton({
    onClick,
    className,
}: DeleteButtonType) {

    const buttonClassName = `${className || ''} hover:bg-indigo-100 hover:rounded flex place-content-center items-center px-1`
    return (
        <>
        <button
            className={buttonClassName}
            onClick={onClick}
        >
            <MdDelete/>
        </button>
        </>
    )
}