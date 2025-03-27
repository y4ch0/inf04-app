import { useEffect, useRef } from "react";

interface DialogProps {
    isOpen: boolean;
    onClose: () => void;
    children: React.ReactNode;
}

const Dialog: React.FC<DialogProps> = ({ isOpen, onClose, children }) => {
    const dialogRef = useRef<HTMLDialogElement>(null);

    useEffect(() => {
        if (isOpen) {
            dialogRef.current?.showModal();
        } else {
            closeWithAnimation();
        }
    }, [isOpen]);

    const closeWithAnimation = () => {
        const dialog = dialogRef.current;
        const body = dialog?.querySelector(".body");

        if (!dialog || !body) return;

        const keyFrame = new KeyframeEffect(body, [{ transform: "scale(1)" }, { transform: "scale(0.8)" }], { duration: 300, easing: "ease", direction: "normal" });

        const keyFrame1 = new KeyframeEffect(dialog, [{ opacity: "1" }, { opacity: "0" }], { duration: 300, easing: "ease", direction: "normal" });

        const animation = new Animation(keyFrame, document.timeline);
        const animation1 = new Animation(keyFrame1, document.timeline);
        animation.play();
        animation1.play();
        animation.onfinish = () => {
            dialog.close();
            onClose();
        };
    };

    const handleBackgroundClick = (event: React.MouseEvent<HTMLDialogElement>) => {
        const body = dialogRef.current?.querySelector(".body");
        if (body && !body.contains(event.target as Node)) {
            closeWithAnimation();
        }
    };

    return (
        <dialog ref={dialogRef} onClick={handleBackgroundClick}>
            <div className="body">
                {children}
                <button className="dialog-close" onClick={closeWithAnimation}>
                    &times;
                </button>
            </div>
        </dialog>
    );
};

export default Dialog;
