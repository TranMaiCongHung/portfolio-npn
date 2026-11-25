"use client";

import React, { useState, useEffect, useRef } from "react";
import { Volume2, VolumeX } from "lucide-react";

interface PinkTopBarProps {
  currentPage?: number;
}

export function PinkTopBar({ currentPage }: PinkTopBarProps) {
  const [isVisible, setIsVisible] = useState(true);
  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const userPausedRef = useRef(false);

  // Audio setup and auto-play handler
  useEffect(() => {
    const audio = audioRef.current;
    if (!audio) return;

    audio.volume = 0.5;
    audio.loop = true;

    const activationEvents = ["click", "pointerdown", "touchstart", "touchend", "keydown"];

    const cleanupInteractionListeners = () => {
      activationEvents.forEach((evt) => {
        window.removeEventListener(evt, handleFirstInteraction, { capture: true });
      });
    };

    // 1. Try auto-playing immediately on mount (and when audio is ready)
    const tryAutoplay = () => {
      if (userPausedRef.current || !audio.paused) return;
      audio
        .play()
        .then(() => {
          setIsPlaying(true);
          cleanupInteractionListeners();
        })
        .catch(() => {
          // Browser blocked unmuted autoplay before user gesture; wait for first interaction
          setIsPlaying(false);
        });
    };

    // 2. Global fallback: start playing on the first valid user gesture anywhere on the screen
    const handleFirstInteraction = (evt: Event) => {
      if (userPausedRef.current) {
        cleanupInteractionListeners();
        return;
      }
      const target = evt.target as HTMLElement | null;
      if (target?.closest("[data-audio-toggle]")) return;
      if (audio.paused) {
        audio
          .play()
          .then(() => {
            setIsPlaying(true);
            cleanupInteractionListeners();
          })
          .catch(() => {});
      } else {
        cleanupInteractionListeners();
      }
    };

    activationEvents.forEach((evt) => {
      window.addEventListener(evt, handleFirstInteraction, { capture: true, passive: true });
    });

    tryAutoplay();
    audio.addEventListener("canplay", tryAutoplay, { once: true });

    // 3. Keep state perfectly in sync with native audio events & guarantee seamless loop
    const onPlay = () => setIsPlaying(true);
    const onPause = () => setIsPlaying(false);
    const onEnded = () => {
      audio.currentTime = 0;
      audio.play().catch(() => {});
    };

    audio.addEventListener("play", onPlay);
    audio.addEventListener("pause", onPause);
    audio.addEventListener("ended", onEnded);

    return () => {
      cleanupInteractionListeners();
      audio.removeEventListener("canplay", tryAutoplay);
      audio.removeEventListener("play", onPlay);
      audio.removeEventListener("pause", onPause);
      audio.removeEventListener("ended", onEnded);
    };
  }, []);

  // Smart Hide on Scroll Down, Show on Scroll Up
  useEffect(() => {
    let lastY = typeof window !== "undefined" ? window.scrollY : 0;
    let ticking = false;

    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          const currentY = window.scrollY;

          // Always visible near top of page
          if (currentY < 60) {
            setIsVisible(true);
          } else if (currentY > lastY + 5) {
            // Scrolling down -> hide header
            setIsVisible(false);
          } else if (currentY < lastY - 5) {
            // Scrolling up -> show header
            setIsVisible(true);
          }

          lastY = currentY;
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleAudio = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    const audio = audioRef.current;
    if (!audio) return;

    if (!audio.paused) {
      userPausedRef.current = true;
      audio.pause();
      setIsPlaying(false);
    } else {
      userPausedRef.current = false;
      if (audio.error) {
        audio.load();
      }
      audio
        .play()
        .then(() => setIsPlaying(true))
        .catch((err) => console.log("Play failed:", err));
    }
  };

  return (
    <>
      {/* Hidden HTML5 Audio Element */}
      <audio
        ref={audioRef}
        src="/audio/snaptik.vn_7419265447847054598.mp3"
        autoPlay
        loop
        playsInline
        preload="auto"
      />

      {/* Spacer so the fixed header doesn't cover top content on first load */}
      <div className="w-full h-8 sm:h-9 pointer-events-none" />

      {/* Fixed Header that slides down when scrolling up, slides up when scrolling down */}
      <header
        className={`fixed top-0 left-0 right-0 z-50 w-full bg-[#DCA3A8] border-b border-[#C98F94] shadow-xs backdrop-blur-md transition-transform duration-300 ease-in-out ${
          isVisible ? "translate-y-0" : "-translate-y-full"
        }`}
      >
        <div className="mx-auto w-full max-w-[1480px] px-4 sm:px-6 lg:px-8 py-1 sm:py-1.5 flex items-center justify-between">
          {/* Audio Speaker Icon Button (Replaces NPN Portfolio text, only icon with 2 states) */}
          <button
            type="button"
            data-audio-toggle="true"
            onClick={toggleAudio}
            aria-label={isPlaying ? "Mute audio" : "Play audio"}
            title={isPlaying ? "Tắt âm thanh" : "Bật âm thanh"}
            className="p-1 sm:p-1.5 rounded-full hover:bg-white/20 active:scale-95 transition-all text-white flex items-center justify-center cursor-pointer select-none"
          >
            {isPlaying ? (
              <Volume2 className="w-4 h-4 sm:w-[18px] sm:h-[18px] text-white animate-pulse" />
            ) : (
              <VolumeX className="w-4 h-4 sm:w-[18px] sm:h-[18px] text-white/80" />
            )}
          </button>

          {/* Navigation Links: About me, Projects, Contact (PDF button removed) */}
          <nav className="flex items-center gap-5 sm:gap-8 text-xs sm:text-[13px] font-montserrat font-medium text-white tracking-wider">
            <a
              href="#page-1"
              className="hover:underline underline-offset-4 transition-all opacity-95 hover:opacity-100"
            >
              About me
            </a>
            <a
              href="#projects"
              className="hover:underline underline-offset-4 transition-all opacity-95 hover:opacity-100"
            >
              Projects
            </a>
            <a
              href="#page-4"
              className="hover:underline underline-offset-4 transition-all opacity-95 hover:opacity-100"
            >
              Contact
            </a>
          </nav>
        </div>
      </header>
    </>
  );
}
