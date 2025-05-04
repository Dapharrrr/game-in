"use client";

import Image from "next/image";
import { useState } from "react";
import { sportypo } from "./font";
import { sfProDisplay } from "./font";
import { figtreeSemibold } from "./font";

export default function Home() {
  const [page, setPage] = useState(1);
  const [isAnimating, setIsAnimating] = useState(false);
  const [, setNextPage] = useState<number | null>(null);
  // Ajoutez ces états en haut de votre composant
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitMessage, setSubmitMessage] = useState("");
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);

    if (!email || !firstName || !lastName) {
      setSubmitMessage("Veuillez remplir tous les champs.");
      setIsSubmitting(false);
      return;
    }

    try {
      const response = await fetch('https://api.brevo.com/v3/contacts', {
        method: 'POST',
        headers: {
          'api-key': process.env.NEXT_PUBLIC_BREVO_API_KEY!,
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: JSON.stringify({
          email: email,
          attributes: {
            PRENOM: firstName,
            NOM: lastName
          },
          listIds: [3], // ton ID de liste
          updateEnabled: true
        })
      });
      const data = await response.json();
      console.log(data);
      setSubmitMessage("Contact cree avec succes!");
    } catch (error) {
      setSubmitMessage("Une erreur est survenue.");
      console.log(error);
    } finally {
      setIsSubmitting(false);
    }
  };

  const handlePageChange = (target: number) => {
    if (isAnimating || target === page) return;

    setIsAnimating(true);
    setNextPage(target);

    setTimeout(() => {
      setPage(target);
      setIsAnimating(false);
      setNextPage(null);
    }, 300); // durée de l'animation
  };

  return (
    <div className={`min-h-screen bg-[#0A00C3] text-white font-sans `}>
      {/* Navbar */}
      <nav className="flex justify-between items-center px-8 py-4 bg-[#0B02A3] text-white text-lg font-bold h-[138.26px] navbar-mobile relative">
        <div className="text-2xl font-extrabold italic navbar-logo-mobile">
          <Image src="/logo.png" alt="Logo" width={195.49} height={138.26} />
        </div>
        {/* Hamburger for mobile */}
        <button
          className="navbar-hamburger md:hidden"
          style={{ display: "none" }}
          onClick={() => setMobileMenuOpen((open) => !open)}
          aria-label="Ouvrir le menu"
        >
          <svg width="32" height="32" fill="none" viewBox="0 0 24 24" stroke="white" strokeWidth="2">
            <path strokeLinecap="round" strokeLinejoin="round" d="M4 8h16M4 16h16" />
          </svg>
        </button>
        {/* Desktop links */}
        <div className={`flex gap-20 ${sportypo.className} navbar-links-mobile`}>
          <a href="#concept" className="w-[185px] h-[25px] text-[25.2px] navbar-link">
            CONCEPT
          </a>
          <a href="#tournois" className="w-[185px] h-[25px] text-[25.2px] navbar-link">
            TOURNOIS
          </a>
          <a href="#reserver" className="w-[185px] h-[25px] text-[25.2px] navbar-link">
            RESERVER
          </a>
          <a href="#accueil" className="w-[185px] h-[25px] text-[25.2px] navbar-link">
            ACCUEIL
          </a>
        </div>
        {/* Mobile menu */}
        {mobileMenuOpen && (
          <div className="mobile-menu md:hidden">
            <a href="#concept" className="navbar-link" onClick={() => setMobileMenuOpen(false)}>
              CONCEPT
            </a>
            <a href="#tournois" className="navbar-link" onClick={() => setMobileMenuOpen(false)}>
              TOURNOIS
            </a>
            <a href="#reserver" className="navbar-link" onClick={() => setMobileMenuOpen(false)}>
              RESERVER
            </a>
            <a href="#accueil" className="navbar-link" onClick={() => setMobileMenuOpen(false)}>
              ACCUEIL
            </a>
          </div>
        )}
      </nav>

      {/* Content container */}
      <div className="relative min-h-[calc(100vh-138.26px)] overflow-y-auto overflow-hidden">
        <div
          className={`absolute w-full h-full transition-all duration-300 ${
            isAnimating
              ? "-translate-y-full opacity-0"
              : "translate-y-0 opacity-100"
          }`}
        >
          {page === 1 ? (
            <div className="grid grid-cols-2 items-center h-full mobile-stack">
              <div>
                <Image
                  src="/image.png"
                  width={496}
                  height={1120}
                  alt="Gaming room"
                />
              </div>
              <div>
                <h1
                  className={`text-[64px] font-extrabold uppercase tracking-widest leading-tight ${sportypo.className} text-white`}
                >
                  <div className="relative inline-block">
                    <span className="highlight-1">Rejoins la</span>
                  </div>
                  <br />
                  <div className="relative inline-block">
                    <span className="highlight-2">nouvelle</span>
                  </div>
                  <br />
                  <div className="relative inline-block">
                    <span className="highlight-3">arene du</span>
                  </div>
                  <br />
                  <div className="relative inline-block">
                    <span className="highlight-4">gaming</span>
                  </div>
                </h1>

                <p
                  className={`mt-6 relative bottom-[12vh] left-[8vw] text-[32px] w-[595px] h-[210px] ${sfProDisplay.variable}`}
                >
                  Game&apos;in est un espace dédié à l&apos;univers de
                  l&apos;e-sport. Tournois, initiations, diffusions en direct,
                  jeux en libre accès, bar & snack… tout est réuni pour une
                  expérience gaming inoubliable. Rejoins-nous et entre dans le
                  game IRL.
                </p>
                <div className="flex justify-center mt-8 gap-4">
                  <button
                    onClick={() => handlePageChange(2)}
                    className="bg-[#DA55C9]/80 w-[79px] h-[79px] rounded-full flex items-center justify-center"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="32"
                      height="32"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="white"
                      strokeWidth="2"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M15 19l-7-7 7-7"
                      />
                    </svg>
                  </button>

                  <span
                    className={`text-[45px] flex items-center ${figtreeSemibold.className}`}
                  >
                    1 / 2
                  </span>

                  <button
                    onClick={() => handlePageChange(2)}
                    className="bg-[#DA55C9]/80 w-[79px] h-[79px] rounded-full flex items-center justify-center"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="32"
                      height="32"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="white"
                      strokeWidth="2"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M9 5l7 7-7 7"
                      />
                    </svg>
                  </button>
                </div>
              </div>
            </div>
          ) : (
            <div className="grid grid-cols-[496px_1fr] h-full items-center gap-8 mobile-stack-2">
              <div className="flex items-center h-full">
                <Image
                  src="/gamer2.png"
                  width={496}
                  height={1120}
                  alt="Gamer"
                />
              </div>
              <div className="flex flex-col justify-center h-full relative">
                <h1
                  className={`top-[10vh] left-[10vw] relative text-[64px] font-extrabold uppercase tracking-widest leading-tight text-right ${sportypo.className} text-white`}
                  style={{ marginBottom: "2rem" }}
                >
                  <div className="relative inline-block">
                    <span className="highlight-5">Coming</span>
                  </div>
                  <br />
                  <div className="relative inline-block">
                    <span className="highlight-6">soon</span>
                  </div>
                </h1>
                <p
                  className={`relative left-[20vw] text-[24px] w-[510px] h-[62px] tracking-[-3%] leading-tight ${sfProDisplay.variable}`}
                  style={{ marginBottom: "2rem" }}
                >
                  🚀 Le site Game&apos;in arrive bientôt…Prépare-toi à vivre l&apos;expérience e-sport autrement.👾
                </p>
                <h3
                  className={`relative top-[17vh] left-[13vw] text-[32px] font-extrabold uppercase tracking-[-3%] leading-tight ${sportypo.className} text-white`}
                  style={{ marginBottom: "1.5rem" }}
                >
                  <div className="relative inline-block">
                    <span className="highlight-7">Etre averti de</span>
                  </div>
                  <div>
                    <span className="highlight-8">la publication</span>
                  </div>
                  <div>
                    <span className="highlight-9">du site</span>
                  </div>
                  <div className="relative inline-block">
                    <span className="highlight-10">internet</span>
                  </div>
                </h3>
                <form
                  onSubmit={handleSubmit}
                  className={`relative bottom-[14vh] left-[32vw] space-y-4 text-[16px] text-[#C1C1C1] uppercase w-[472px] rounded-[24px] ${sportypo.className}`}
                  style={{ marginBottom: "1.5rem" }}
                >
                  <div className="flex gap-6 w-[105px] ">
                    <input
                      type="text"
                      placeholder="Prenom"
                      className="px-4 py-2 bg-[#ffffff] rounded-[24px] w-[224px]"
                      value={firstName}
                      onChange={(e) => setFirstName(e.target.value)}
                      required
                    />
                    <input
                      type="text"
                      placeholder="Nom"
                      className="px-4 py-2 bg-[#ffffff] rounded-[24px] w-[224px]"
                      value={lastName}
                      onChange={(e) => setLastName(e.target.value)}
                      required
                    />
                  </div>
                  <input
                    type="email"
                    placeholder="Email"
                    className="px-4 py-2 w-full bg-[#ffffff] rounded-[24px]"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                  />
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className={`px-6 py-2 font-bold align-center ml-[5vw] text-[24px] text-[#6C12E5] w-[324px] h-[56px] mt-2 bg-[#EC5ABA] rounded-[24px] ${
                      sportypo.className
                    } ${isSubmitting ? "opacity-70" : ""}`}
                  >
                    {isSubmitting ? "Envoi..." : "Envoyer"}
                  </button>

                  {submitMessage && (
                    <div
                      className={`text-center mt-2 ${
                        submitMessage.includes("erreur")
                          ? "text-red-400"
                          : "text-green-400"
                      }`}
                    >
                      {submitMessage}
                    </div>
                  )}
                </form>
                <div className="flex justify-center gap-4 page2-pagination">
                  <button
                    onClick={() => handlePageChange(1)}
                    className="bg-[#DA55C9]/80 w-[80px] h-[80px] rounded-full flex items-center justify-center"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="32"
                      height="32"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="white"
                      strokeWidth="2"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M15 19l-7-7 7-7"
                      />
                    </svg>
                  </button>
                  <span className={`text-[40px] flex items-center ${figtreeSemibold.className}`}>
                    2 / 2
                  </span>
                  <button
                    onClick={() => handlePageChange(1)}
                    className="bg-[#DA55C9]/80 w-[80px] h-[80px] rounded-full flex items-center justify-center"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="32"
                      height="32"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="white"
                      strokeWidth="2"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M9 5l7 7-7 7"
                      />
                    </svg>
                  </button>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
