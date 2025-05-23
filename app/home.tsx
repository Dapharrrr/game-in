import Footer from "./components/footer";
import Navbar from "./components/navbar";
import Image from "next/image";


export default function Home() {
  return (
    <>
      <section
        style={{
          background: "linear-gradient(180deg, #000000 0%, #6C12E5CC 100%)",
        }}
        className="min-h-screen"
      >
        <Navbar />
        <div className="flex flex-col md:flex-row items-center justify-between w-[547px] h-[622px] max-w-7xl mx-auto px-4 py-10">
          {/* Bloc texte à gauche */}
          <div className="max-w-xl w-full py-8 px-4">
            <p className="text-[#6C12E5] text-2xl font-bold mb-2">
              Game&apos;in
            </p>

            <h1 className="font-bold [font-family:Futura,Arial,sans-serif] text-[56px] leading-[1.2] mb-6">
              <span className="block bg-gradient-to-b from-[#6C12E5] to-[#EC5ABA] bg-clip-text text-transparent">
                Bienvenue chez
                <br />
                Game&apos;in <span className="text-white">– Le QG</span>
              </span>
              <span className="block text-white">des passionnés</span>
              <span className="block text-white">d&apos;e-sport</span>
            </h1>

            <p className="text-white max-w-xl text-lg leading-snug my-4 font-medium">
              Plonge dans une expérience e-sport unique, entre tournois,
              sessions de jeux, communauté de gamers et événements inoubliables.
            </p>

            <button className="gradient-border-btn">
              <span className="gradient-border-content">EN SAVOIR +</span>
            </button>
          </div>

          {/* Image manette à droite */}
          <div className="absolute top-0 right-5 flex-shrink-0 z-20">
            <Image
              src="/joystick2.png"
              alt="Logo"
              width={806}
              height={761}
              className="object-contain opacity-70 w-[806px] h-[761px] "
              priority
            />
          </div>
        </div>

<div className="w-[826px] h-[180px] flex flex-col items-center justify-center text-center mx-auto" style={{ fontFamily: 'Futura, sans-serif' }}>
  <div>
    <span className="bg-gradient-to-r from-[#6C12E5] to-[#EC5ABA] bg-clip-text text-transparent font-bold text-5xl">
      Game&apos;in
    </span>
    <span className="text-white font-medium text-5xl">
      , bien plus qu&apos;un simple
    </span>
  </div>
  <span className="text-white font-medium text-5xl">
    lieu
  </span>
</div>


<section className="w-full flex justify-center py-14">
  <div className="max-w-[900px] w-full flex flex-col items-center">
    <div className="w-full flex flex-row justify-center items-start">
      <p className="text-white text-[16px] leading-[1.6] font-normal max-w-[600px] text-left" style={{ fontFamily: 'SF Pro Display, sans-serif' }}>
        Game’in est un espace physique entièrement dédié à
        <span className="text-[#EC5ABA] font-bold"> l’univers de l’e-sport</span>.
        Tournois, initiations, freeplay, coaching, événements communautaires…
        Ici, tout est pensé pour rassembler les passionné·es de jeux vidéo, débutants comme confirmé·es.
        Grâce à
        <span className="text-[#EC5ABA] font-bold"> notre application mobile intuitive</span>,
        réservez vos sessions, créez votre équipe, suivez vos performances et vivez pleinement votre expérience.
      </p>
<div className="hidden md:block w-[196px] h-[154px]">
  <svg width="196" height="154" viewBox="0 0 196 154" fill="none">
    <g>
      {Array.from({ length: 8 }).map((_, y) =>
        Array.from({ length: 10 }).map((_, x) => (
          <circle
            key={x + '-' + y}
            cx={6 + x * ((196 - 2 * 6) / 9)}
            cy={6 + y * ((154 - 2 * 6) / 7)}
            r="6"
            fill="#EC5ABA"
            fillOpacity="0.22"
          />
        ))
      )}
    </g>
  </svg>
</div>

    </div>
  </div>
</section>

<section className="w-[1302px] h-[426px] mx-auto">
  <p className="text-white text-[24px] font-bold pt-8 pl-2">Tournois du moment</p>
  <div className="flex mt-7">
<div
  className="relative w-[325.5px] h-[377.08px] overflow-hidden flex-shrink-0"
  style={{
    background: '#5AC37F',
    clipPath: 'polygon(0 0, calc(100% - 57px) 0, 100% 57px, 100% 100%, 0 100%)'
    // ↑ Coupe un triangle de 57px sur l'angle haut-droit
  }}
>

  {/* Fond image en overlay */}
  <div
    className="absolute inset-0 z-0"
    style={{
      backgroundImage: "url('/noise.png')",
      backgroundSize: "cover",
      backgroundPosition: "center",
      opacity: 0.2 // 🚩 ici tu choisis l’opacité de l’IMAGE, sans affecter le contenu !
    }}
  />

  <Image 
    src="/ashe.png"
    alt="Personnage LoL"
    width={325}
    height={325}
    className="object-contain pointer-events-none select-none relative top-[160px] left-[50px] "
  />
  {/* CONTENU de la carte : Z > 0 donc passé dessus */}
  {/* Titre & sous-titre */}
  <div className="absolute top-0 left-0 p-6">
    <h3 className="text-white font-medium text-[42px] leading-tight">League of Legends</h3>
    <p className="text-[#E9F5EE] font-normal text-[18px] mt-2">League of Legends</p>
  </div>

  {/* Personnage */}




  {/* Substract décoratif */}
  <div
    className="absolute top-0 right-0 w-[57px] h-[57px] z-20 pointer-events-none"
    style={{
      clipPath: "polygon(100% 0, 0 0, 100% 100%)",
      background: "#fff",
      opacity: 0.2,
    }}
  />

  {/* Flou noir en bas */}
  <div
    className="absolute left-0"
    style={{
      top: 291.7,
      width: 325.5,
      height: 85.38,
      background: "rgba(0,0,0,0.5)",
      opacity: '80%'
    }}
  >
    <div className="relative flex items-center h-full px-6 gap-x-6 z-30">
      <div className="flex flex-col gap-y-1 text-white text-[15px]">
        <div>Entrée <b>Gratuit</b></div>
        <div>Mode <b>5 v 5</b></div>
      </div>
      <button className="ml-auto bg-[#7B2FF2] text-white rounded-full px-7 py-2 font-semibold text-[16px] shadow-lg">REJOINDRE</button>
    </div>
  </div>
</div>
<div
  className="relative w-[325.5px] h-[377.08px] overflow-hidden flex-shrink-0"
  style={{
    background: '#0B02A3',
    clipPath: 'polygon(0 0, calc(100% - 57px) 0, 100% 57px, 100% 100%, 0 100%)'
    // ↑ Coupe un triangle de 57px sur l'angle haut-droit
  }}
>

  {/* Fond image en overlay */}
  <div
    className="absolute inset-0 z-0"
    style={{
      backgroundImage: "url('/noise.png')",
      backgroundSize: "cover",
      backgroundPosition: "center",
      opacity: 0.2 // 🚩 ici tu choisis l’opacité de l’IMAGE, sans affecter le contenu !
    }}
  />

  <Image 
    src="/pubg.png"
    alt="Personnage Pubg"
    width={325}
    height={325}
    className="object-contain pointer-events-none select-none relative top-[160px] left-[50px] "
  />
  {/* CONTENU de la carte : Z > 0 donc passé dessus */}
  {/* Titre & sous-titre */}
  <div className="absolute top-0 left-0 p-6 ">
    <p className="text-white font-medium [font-family:Futura,Arial,sans-serif] text-[42px] w-[231px]">Playerunknown’s
Battlegrounds</p>
    <p className="text-[#E9F5EE] font-normal text-[18px] mt-2">PUBG</p>
  </div>

  {/* Personnage */}




  {/* Substract décoratif */}
  <div
    className="absolute top-0 right-0 w-[57px] h-[57px] z-20 pointer-events-none"
    style={{
      clipPath: "polygon(100% 0, 0 0, 100% 100%)",
      background: "#fff",
      opacity: 0.2,
    }}
  />

  {/* Flou noir en bas */}
  <div
    className="absolute left-0"
    style={{
      top: 291.7,
      width: 325.5,
      height: 85.38,
      background: "rgba(0,0,0,0.5)",
      opacity: '80%'
    }}
  >
    <div className="relative flex items-center h-full px-6 gap-x-6 z-30">
      <div className="flex flex-col gap-y-1 text-white text-[15px]">
        <div>Entrée <b>Gratuit</b></div>
        <div>Mode <b>5 v 5</b></div>
      </div>
      <button className="ml-auto bg-[#7B2FF2] text-white rounded-full px-7 py-2 font-semibold text-[16px] shadow-lg">REJOINDRE</button>
    </div>
  </div>
</div>
<div
  className="relative w-[325.5px] h-[377.08px] overflow-hidden flex-shrink-0"
  style={{
    background: '#6C12E5',
    clipPath: 'polygon(0 0, calc(100% - 57px) 0, 100% 57px, 100% 100%, 0 100%)'
    // ↑ Coupe un triangle de 57px sur l'angle haut-droit
  }}
>

  {/* Fond image en overlay */}
  <div
    className="absolute inset-0 z-0"
    style={{
      backgroundImage: "url('/noise.png')",
      backgroundSize: "cover",
      backgroundPosition: "center",
      opacity: 0.2 // 🚩 ici tu choisis l’opacité de l’IMAGE, sans affecter le contenu !
    }}
  />

  <Image 
    src="/valorant.png"
    alt="Personnage Valorant"
    width={325}
    height={325}
    className="object-contain pointer-events-none select-none relative top-[160px] left-[50px] "
  />
  {/* CONTENU de la carte : Z > 0 donc passé dessus */}
  {/* Titre & sous-titre */}
  <div className="absolute top-0 left-0 p-6">
    <h3 className="text-white font-medium text-[42px] leading-tight">Valorant</h3>
    <p className="text-[#E9F5EE] font-normal text-[18px] mt-2">Valorant</p>
  </div>

  {/* Personnage */}




  {/* Substract décoratif */}
  <div
    className="absolute top-0 right-0 w-[57px] h-[57px] z-20 pointer-events-none"
    style={{
      clipPath: "polygon(100% 0, 0 0, 100% 100%)",
      background: "#fff",
      opacity: 0.2,
    }}
  />

  {/* Flou noir en bas */}
  <div
    className="absolute left-0"
    style={{
      top: 291.7,
      width: 325.5,
      height: 85.38,
      background: "rgba(0,0,0,0.5)",
      opacity: '80%'
    }}
  >
    <div className="relative flex items-center h-full px-6 gap-x-6 z-30">
      <div className="flex flex-col gap-y-1 text-white text-[15px]">
        <div>Entrée <b>Gratuit</b></div>
        <div>Mode <b>5 v 5</b></div>
      </div>
      <button className="ml-auto bg-[#7B2FF2] text-white rounded-full px-7 py-2 font-semibold text-[16px] shadow-lg">REJOINDRE</button>
    </div>
  </div>
</div>
<div
  className="relative w-[325.5px] h-[377.08px] overflow-hidden flex-shrink-0"
  style={{
    background: '#EC5ABA',
    clipPath: 'polygon(0 0, calc(100% - 57px) 0, 100% 57px, 100% 100%, 0 100%)'
    // ↑ Coupe un triangle de 57px sur l'angle haut-droit
  }}
>

  {/* Fond image en overlay */}
  <div
    className="absolute inset-0 z-0"
    style={{
      backgroundImage: "url('/noise.png')",
      backgroundSize: "cover",
      backgroundPosition: "center",
      opacity: 0.2 // 🚩 ici tu choisis l’opacité de l’IMAGE, sans affecter le contenu !
    }}
  />

  <Image 
    src="/csgo.png"
    alt="Personnage CSGO"
    width={325}
    height={325}
    className="object-contain pointer-events-none select-none relative top-[160px] left-[50px] "
  />
  {/* CONTENU de la carte : Z > 0 donc passé dessus */}
  {/* Titre & sous-titre */}
  <div className="absolute top-0 left-0 p-6">
    <h3 className="text-[#111111] font-medium text-[42px] leading-tight">CSGO</h3>
    <p className="text-[#E9F5EE] font-normal text-[18px] mt-2">Counter Strike 
Global Offensive</p>
  </div>

  {/* Personnage */}




  {/* Substract décoratif */}
  <div
    className="absolute top-0 right-0 w-[57px] h-[57px] z-20 pointer-events-none"
    style={{
      clipPath: "polygon(100% 0, 0 0, 100% 100%)",
      background: "#fff",
      opacity: 0.2,
    }}
  />

  {/* Flou noir en bas */}
  <div
    className="absolute left-0"
    style={{
      top: 291.7,
      width: 325.5,
      height: 85.38,
      background: "rgba(0,0,0,0.5)",
      opacity: '80%'
    }}
  >
    <div className="relative flex items-center h-full px-6 gap-x-6 z-30">
      <div className="flex flex-col gap-y-1 text-white text-[15px]">
        <div>Entrée <b>Gratuit</b></div>
        <div>Mode <b>5 v 5</b></div>
      </div>
      <button className="ml-auto bg-[#7B2FF2] text-white rounded-full px-7 py-2 font-semibold text-[16px] shadow-lg">REJOINDRE</button>
    </div>
  </div>
</div>


  </div>
</section>

        <section>
          <h3>Nos services en un coup d&pos;oeil</h3>
          <p>
            Chez Game&pos;in, nous avons pensé à tout pour offrir une expérience
            e-sport complète et accessible. Que vous veniez pour vous amuser,
            progresser ou performer, notre espace vous propose des services
            adaptés à tous les profils de joueurs.
          </p>
          <div>
            <p>
              <span>Accès libre</span>
              <span>aux PC hautes performances</span>
            </p>
            <p>
              <span>Tournois</span>
              <span>réguliers et</span>
              <span>compétitions</span>
              <span>locales</span>
            </p>
            <p>
              <span>Privatisez votre salle</span>
              <span>game&pos;in</span>
            </p>
          </div>
          <div>
            <p>
              <span>Coaching</span>
              <span>et initiations pour progresser</span>
            </p>
            <p>
              <span>Bar/snacking</span>
              <span>sur place</span>
            </p>
          </div>
        </section>
        <section>
          <h3>Nos derniers événements</h3>

          <div>Image</div>
          <h4>Prêt à découvrir</h4>
          <h4>Game&pos;in</h4>
          <div>
            image
            <p>
              Plonge dans l&pos;univers Game&pos;in : un lieu unique où passion,
              compétition et convivialité se rencontrent. Rejoins-nous et vis
              l&pos;expérience e-sport comme jamais auparavant ! Joue, connecte,
              progresse — où tu veux, quand tu veux.
            </p>
          </div>
        </section>
        <Footer />
      </section>
    </>
  );
}
