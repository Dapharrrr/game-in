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
  const [submitMessage,setSubmitMessage ] = useState("");

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setIsSubmitting(true)
    setSubmitMessage("")

    try {
      // Si votre Next.js et l'API sont sur le même domaine, utilisez un chemin relatif
      const res = await fetch("/api/brevo", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, firstName, lastName }),
      })

      const data = await res.json()

      if (res.ok && data.success) {
        setSubmitMessage("✅ Inscription réussie !")
        // Reset des champs
        setEmail("")
        setFirstName("")
        setLastName("")
      } else {
        console.error("API Error:", data)
        setSubmitMessage("❌ Une erreur est survenue, réessayez.")
      }
    } catch (err) {
      console.error("Fetch Error:", err)
      setSubmitMessage("❌ Impossible de contacter le serveur.")
    } finally {
      setIsSubmitting(false)
    }
  }


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
      <div className={`min-h-screen bg-[#0A00C3] text-white font-sans`}>
        {/* Navbar */}
        <nav className="flex justify-between items-center px-8 py-4 bg-[#0B02A3] text-white text-lg font-bold h-[138.26px]">
          <div className="text-2xl font-extrabold italic">
            <Image src="/logo.png" alt="Logo" width={195.49} height={138.26} />
          </div>
          <div className={`flex gap-20 ${sportypo.className}`}>
            <a href="#concept" className="w-[185px] h-[25px] text-[25.2px] ">
              CONCEPT
            </a>
            <a href="#tournois" className="w-[185px] h-[25px] text-[25.2px]">
              TOURNOIS
            </a>
            <a href="#reserver" className="w-[185px] h-[25px] text-[25.2px]">
              RESERVER
            </a>
            <a href="#accueil" className="w-[185px] h-[25px] text-[25.2px]">
              ACCUEIL
            </a>
          </div>
        </nav>

        {/* Content container */}
        <div className="relative min-h-[calc(100vh-138.26px)] overflow-y-auto">
          <div
            className={`absolute w-full h-full transition-all duration-300 ${
              isAnimating
                ? "-translate-y-full opacity-0"
                : "translate-y-0 opacity-100"
            }`}
          >
            {page === 1 ? (
              <div className="grid grid-cols-2 items-center h-full">
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
              <div className="relative min-h-[calc(100vh-138.26px)] overflow-y-auto overflow-x-hidden overflow-y-hidden">
                <div>
                  <Image
                    src="/gamer2.png"
                    width={496}
                    height={1120}
                    alt="Gamer"
                  />
                </div>
                <div className="">
                  <h1
                    className={`absolute top-[20vh] right-[-8vw] text-[64px] font-extrabold uppercase tracking-widest leading-tight text-right ${sportypo.className} text-white`}
                  >
                    <div className="relative inline-block">
                      <span className="highlight-5">Coming</span>
                    </div>
                    <br />
                    <div className="relative inline-block">
                      <span className="highlight-6">soon</span>
                    </div>
                  </h1>
                </div>
                <p
                  className={`absolute left-[50vw] bottom-[70vh] text-[24px] w-[510px] h-[62px] tracking-[-3%] leading-tight ${sfProDisplay.variable}`}
                >
                  🚀 Le site Game&apos;in arrive bientôt…Prépare-toi à vivre
                  l&apos;expérience e-sport autrement.👾
                </p>

                <div className="absolute bottom-[40vh] ">
                  {" "}
                  {/* Conteneur parent pour contrôler la position */}
                  {/* Texte à gauche du formulaire */}
                  <h3
                    className={`text-[32px] font-extrabold uppercase tracking-[-3%] leading-tight ${sportypo.className} text-white`}
                    style={{ position: "absolute", left: "48vw", top: "14vh" }} // Positionnement à gauche
                  >
                    <div className="relative inline-block">
                      <span className="highlight-7">Etre averti de</span>
                    </div>
                    <div className="">
                      <span className="highlight-8">la publication</span>
                    </div>
                    <div className="">
                      <span className="highlight-9">du site</span>
                    </div>
                    <div className="relative inline-block">
                      <span className="highlight-10">internet</span>
                    </div>
                  </h3>
                  {/* Formulaire */}
                  <form 
    onSubmit={handleSubmit}
    className={`space-y-4 ml-[68vw] text-[16px] text-[#C1C1C1] uppercase w-[472px] rounded-[24px] ${sportypo.className}`}
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
      className={`px-6 py-2 font-bold align-center ml-[5vw] text-[24px] text-[#6C12E5] w-[324px] h-[56px] mt-2 bg-[#EC5ABA] rounded-[24px] ${sportypo.className} ${isSubmitting ? 'opacity-70' : ''}`}
    >
      {isSubmitting ? "Envoi..." : "Envoyer"}
    </button>
    
    {submitMessage && (
      <div className={`text-center mt-2 ${submitMessage.includes("erreur") ? "text-red-400" : "text-green-400"}`}>
        {submitMessage}
      </div>
    )}
  </form>
                </div>

                <div className="absolute right-[25vw] bottom-[20vh] gap-4 flex">
                  <button
                    onClick={() => handlePageChange(1)}
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
                    2 / 2
                  </span>
                  <button
                    onClick={() => handlePageChange(1)}
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
            )}
          </div>
        </div>
      </div>
    );
  }
