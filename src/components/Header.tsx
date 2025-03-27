import { useEffect, useState } from "react";
import "./../assets/HeaderAnimation.css";

export default function Header() {
    const texts = [
        <>
            egzamin INF.04 <i className="bi bi-window-desktop" id={"inf-04"}></i>
        </>,
        <>
            egzamin INF.03 <i className="bi bi-globe" id={"inf-03"}></i>
        </>,
    ];
    const animationDuration = 1000; // czas trwania animacji w ms
    const intervalDuration = 3000; // czas między animacjami

    const [currentIndex, setCurrentIndex] = useState(0);
    const [isAnimating, setIsAnimating] = useState(false);

    // Obliczamy indeks kolejnego napisu
    const nextIndex = (currentIndex + 1) % texts.length;

    useEffect(() => {
        const timer = setInterval(() => {
            setIsAnimating(true);
            // Po zakończeniu animacji aktualizujemy indeks
            setTimeout(() => {
                setCurrentIndex(nextIndex);
                setIsAnimating(false);
            }, animationDuration);
        }, intervalDuration);
        return () => clearInterval(timer);
    }, [currentIndex, nextIndex, intervalDuration, animationDuration]);

    return (
        <div className="header-container">
            {isAnimating ? (
                <div className="animation-wrapper">
                    <div className="header-text slide-out">{texts[currentIndex]}</div>
                    <div className="header-text slide-in">{texts[nextIndex]}</div>
                </div>
            ) : (
                <div className="header-text">{texts[currentIndex]}</div>
            )}
        </div>
    );
}
