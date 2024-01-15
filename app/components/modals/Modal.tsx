'use client'
import { useCallback, useEffect, useState } from "react";
import { isRegExp } from "util/types";

interface ModalProps{
    isOpen?: boolean
    onClose: () => void;
    onSubmit: () => void;
    title?:string;
    body?: React.ReactElement;
    footer?: React.ReactElement;
    actionLabel: string;
    disabled?: boolean;
    secondaryAction?: ()=> void;
    secondaryLabel?: string;
}

const Modal: React.FC<ModalProps> = ({
    isOpen,
    onClose,
    onSubmit,
    title,
    body,
    footer,
    actionLabel,
    disabled,
    secondaryAction,
    secondaryLabel
}) => {
    const [showModal, setShowModal] = useState(isOpen)
    
    useEffect(()=>{
        setShowModal(isOpen);
    },[isOpen])

    const handleClose = useCallback(()=>{

    },[]);
    return (
    <div></div>
  )
}

export default Modal