"use client";
import Image from "next/image";
import { useEffect, useState } from "react";
import { sportypo, sfProDisplay /* , figtreeSemibold */ } from "../app/font";


export default function Home() {
  const [page, setPage] = useState<number>(1);
  const [isAnimating, setIsAnimating] = useState(false);
  const [, setNextPage] = useState<number | null>(null);
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitMessage, setSubmitMessage] = useState("");
  const [isNavOpen, setIsNavOpen] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);

    if (!email || !firstName || !lastName) {
      setSubmitMessage("Veuillez remplir tous les champs.");
      setIsSubmitting(false);
      return;
    }

    try {
      const response = await fetch("https://api.brevo.com/v3/contacts", {
        method: "POST",
        headers: {
          "api-key": process.env.NEXT_PUBLIC_BREVO_API_KEY!,
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          email: email,
          attributes: {
            PRENOM: firstName,
            NOM: lastName,
          },
          listIds: [3], // ton ID de liste
          updateEnabled: true,
        }),
      });
      const data = await response.json();
      console.log(data);

      setSubmitMessage("Contact créé avec succès!");
    } catch (error) {
      console.log(error);

      setSubmitMessage("Une erreur est survenue.");
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
    }, 300);
  };

  useEffect(() => {
    // Ferme menu si resize > md
    const handleResize = () => {
      if (window.innerWidth > 1024) setIsNavOpen(false);
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div className="bg-[#0A00C3] min-h-screen flex flex-col">
      
      {/* Header */}
      <div
        className={`${sportypo.className} bg-[#0B02A3] flex items-center justify-between px-6 py-4 relative`}
      >
        <Image src="/logo.png" alt="Logo" width={120} height={40} />
        {/* Desktop Nav */}
        <nav className="hidden lg:flex text-white font-bold text-lg tracking-wide uppercase space-x-6">
          <span>Accueil</span>
          <span>Concept</span>
          <span>Tournois</span>
          <span>Reserver</span>
        </nav>

        {/* Hamburger Button (mobile) */}
        <button
          className="flex lg:hidden flex-col justify-center items-center z-20"
          onClick={() => setIsNavOpen(!isNavOpen)}
          aria-label="Ouvrir/fermer la navigation"
          type="button"
        >
          <span
            className={`block bg-white h-1 w-7 mb-1 rounded transition-all ${
              isNavOpen ? "rotate-45 translate-y-2" : ""
            }`}
          ></span>
          <span
            className={`block bg-white h-1 w-7 mb-1 rounded transition-all ${
              isNavOpen ? "opacity-0" : ""
            }`}
          ></span>
          <span
            className={`block bg-white h-1 w-7 rounded transition-all ${
              isNavOpen ? "-rotate-45 -translate-y-2" : ""
            }`}
          ></span>
        </button>

        {/* Mobile Nav Overlay */}
        <nav
          className={`fixed top-0 left-0 w-full h-full bg-[#140fcfaa] backdrop-blur flex flex-col items-center justify-center gap-8
      text-white font-bold text-2xl uppercase z-10 transition-all duration-300
      ${
        isNavOpen
          ? "opacity-100 pointer-events-auto"
          : "opacity-0 pointer-events-none"
      }
    `}
        >
          <span className="cursor-pointer" onClick={() => setIsNavOpen(false)}>
            Accueil
          </span>
          <span className="cursor-pointer" onClick={() => setIsNavOpen(false)}>
            Concept
          </span>
          <span className="cursor-pointer" onClick={() => setIsNavOpen(false)}>
            Tournois
          </span>
          <span className="cursor-pointer" onClick={() => setIsNavOpen(false)}>
            Reserver
          </span>
        </nav>
      </div>
      {/* Pages */}
      <div className="flex-1 flex flex-col md:flex-row min-h-0">
        {page === 1 && (
          <>
            {/* Left: image */}
            <div className="w-full md:w-1/2 h-[300px] md:h-screen relative">
              <Image
                src="/image.png"
                alt="Salle e-sport"
                fill
                className="object-cover"
                priority
              />
            </div>

            {/* Right: text */}
            <div className=" w-full md:w-1/2 flex flex-col justify-center text-white p-4 md:p-12">
              <h1
                className={`${sportypo.className} uppercase text-4xl font-extrabold mb-6 `}
              >
                <span className="mark-highlight">Rejoins la</span>
                <br />
                <span className="mark-highlight">nouvelle</span>
                <br />
                <span className="mark-highlight">arene du</span>
                <br />
                <span className="mark-highlight">gaming</span>
              </h1>

              <p
                className={`${sfProDisplay.className} font-medium text-md md:text-xl mb-8`}
              >
                Game&apos;in est un espace dédié à l&apos;univers de
                l&apos;e-sport. Tournois, initiations, diffusions en direct,
                jeux en libre accès, bar & snack... tout est réuni pour une
                expérience gaming inoubliable. Rejoins-nous et entre dans le
                game IRL.
              </p>
              {/* Pagination */}
              <div className="flex items-center gap-4 w-full justify-center mt-8">
                <button
                  className="bg-pink-400 hover:bg-pink-600 rounded-full w-10 h-10 flex items-center justify-center text-white font-bold text-2xl"
                  onClick={() => handlePageChange(page - 1)}
                  disabled={page === 1}
                >
                  &lt;
                </button>
                <span className="text-white text-xl font-bold">{page} / 2</span>
                <button
                  className="bg-pink-400 hover:bg-pink-600 rounded-full w-10 h-10 flex items-center justify-center text-white font-bold text-2xl"
                  onClick={() => handlePageChange(page + 1)}
                >
                  &gt;
                </button>
              </div>
            </div>
          </>
        )}
        {page === 2 && (
          <>
            {/* Left: image */}
            <div className="w-full md:w-1/2 h-[300px] md:h-auto relative">
              <Image
                src="/gamer2.png"
                alt="Gamer"
                fill
                className="object-cover"
              />
            </div>
            {/* Right: texte + formulaire */}
            <div
              className="w-full md:w-1/2 flex flex-col justify-center text-white px-4 py-4 md:p-12
    items-center lg:items-start text-center lg:text-left"
            >
              <h1
                className={`${sportypo.className} uppercase text-4xl md:text-6xl font-extrabold mb-2 self-end flex flex-col items-end text-right" style={{letterSpacing: '.05em'}}`}
              >
                <span className="mark-highlight">Coming</span>
                <span className="mark-highlight">Soon</span>
              </h1>

              <p className="flex items-center text-base md:text-lg mb-3 mt-2">
                <span className="mr-2">
                  🚀 Le site Game&apos;in arrive bientôt... Prépare-toi à vivre
                  l&apos;expérience e-sport autrement.👾
                </span>
              </p>

              <div className="max-w-4xl mx-auto w-full flex flex-col md:flex-row gap-8 items-start my-8">
                {/* Bloc Titre */}
                <div className="w-full md:w-1/2 flex flex-col items-center md:items-start">
                  <h3
                    className={`
    ${sportypo.className}
    sportypo-title
    uppercase font-extrabold leading-tight
    text-center md:text-left
    max-w-xs md:max-w-md mx-auto
  `}
                  >
                    <span className="mark-highlight block">Etre averti de</span>
                    <span className="mark-highlight block">la publication</span>
                    <span className="mark-highlight block">du site</span>
                    <br />
                    <span className="mark-highlight block">internet</span>
                  </h3>
                </div>
                {/* Bloc Formulaire */}
                <div className="w-full md:w-1/2 flex flex-col items-center md:items-end">
                  <form
                    className="w-full max-w-sm flex flex-col gap-2"
                    onSubmit={handleSubmit}
                  >
                    <div className="flex gap-2 w-full">
                      <input
                        type="text"
                        placeholder="Prénom"
                        className="w-1/2 rounded-full px-4 py-2 bg-white text-[#140fcf] font-bold text-base md:text-lg placeholder:text-gray-400 focus:outline-none"
                        value={firstName}
                        onChange={(e) => setFirstName(e.target.value)}
                      />
                      <input
                        type="text"
                        placeholder="Nom"
                        className="w-1/2 rounded-full px-4 py-2 bg-white text-[#140fcf] font-bold text-base md:text-lg placeholder:text-gray-400 focus:outline-none"
                        value={lastName}
                        onChange={(e) => setLastName(e.target.value)}
                      />
                    </div>
                    <input
                      type="email"
                      placeholder="Email"
                      className="w-full rounded-full px-4 py-2 bg-white text-[#140fcf] font-bold text-base md:text-lg placeholder:text-gray-400 focus:outline-none"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                    />
                    <button
                      type="submit"
                      className="w-full font-bold rounded-full bg-pink-400 hover:bg-pink-600 text-white text-base md:text-lg px-8 py-2 transition disabled:opacity-70"
                      disabled={isSubmitting}
                    >
                      Envoyer
                    </button>
                  </form>
                </div>
              </div>

              {submitMessage && (
                <div className="text-sm bg-white/80 text-[#140fcf] rounded px-4 py-2 mt-2 w-fit">
                  {submitMessage}
                </div>
              )}
              {/* Pagination */}
              {/* Pagination */}
              <div className="flex items-center gap-4 w-full justify-center mt-8">
                <button
                  className="bg-pink-400 hover:bg-pink-600 rounded-full w-10 h-10 flex items-center justify-center text-white font-bold text-2xl"
                  onClick={() => handlePageChange(page - 1)}
                >
                  &lt;
                </button>
                <span className="text-white text-xl font-bold">{page} / 2</span>
                <button
                  className="bg-pink-400 hover:bg-pink-600 rounded-full w-10 h-10 flex items-center justify-center text-white font-bold text-2xl"
                  onClick={() => handlePageChange(page + 1)}
                  disabled={page === 2}
                >
                  &gt;
                </button>
              </div>
            </div>
          </>
        )}
      </div>
    </div>
  );
}
