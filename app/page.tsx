export default function Home() {
  return (
    <div className="min-h-screen bg-black text-white font-sans">
      <section 
  className="relative flex flex-col items-center min-h-screen bg-cover bg-center"
  style={{
    backgroundImage: "url('/drone-bg.JPG')",
  }}
>
        <div className="absolute inset-0 bg-black/60"></div>

        <div className="relative z-10 max-w-5xl">
          <div className="flex justify-center mb-8">
            <img
              src="/akroskye-logo.png"
              alt="Akroskye logo"
              className="w-40 md:w-56 drop-shadow-2xl"
            />
          </div>

          <h1 className="text-5xl md:text-7xl font-bold mb-6 tracking-wide">
            AKROSKYE
          </h1>

          <p className="text-zinc-300 text-lg md:text-2xl max-w-3xl mx-auto leading-relaxed mb-10">
            Profesjonelle dronebilder og inspeksjoner for entreprenører,
            eiendom og næringsliv.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="#kontakt"
              className="bg-white text-black px-8 py-4 rounded-2xl font-semibold hover:scale-105 transition"
            >
              Kontakt oss
            </a>

            <a
              href="#tjenester"
              className="border border-zinc-700 px-8 py-4 rounded-2xl font-semibold hover:bg-zinc-900 transition"
            >
              Våre tjenester
            </a>
          </div>
        </div>
      </section>

      <section className="px-6 py-24 max-w-6xl mx-auto grid md:grid-cols-2 gap-14 items-center">
        <div>
          <p className="text-zinc-500 uppercase tracking-[0.2em] text-sm mb-3">
            Om Akroskye
          </p>

          <h2 className="text-4xl font-bold mb-6">
            Moderne dronearbeid med fokus på kvalitet og sikkerhet
          </h2>

          <p className="text-zinc-300 leading-relaxed mb-5 text-lg">
            Akroskye leverer dronebilder, inspeksjoner og dokumentasjon for
            entreprenører, eiendom og næringsliv.
          </p>

          <p className="text-zinc-400 leading-relaxed">
            Med erfaring fra arbeid for entreprenører og bruk av DJI Air 3,
            tilbyr vi fleksible og kostnadseffektive løsninger.
          </p>
        </div>

        <div className="bg-zinc-900 border border-zinc-800 rounded-3xl p-8 shadow-2xl">
          <div className="space-y-6">
            <div>
              <h3 className="text-xl font-semibold mb-2">Takinspeksjon</h3>
              <p className="text-zinc-400">
                Effektiv inspeksjon av tak og fasader uten behov for stillas.
              </p>
            </div>

            <div>
              <h3 className="text-xl font-semibold mb-2">Eiendomsfoto</h3>
              <p className="text-zinc-400">
                Profesjonelle dronebilder og video for bolig og næring.
              </p>
            </div>

            <div>
              <h3 className="text-xl font-semibold mb-2">
                Byggdokumentasjon
              </h3>
              <p className="text-zinc-400">
                Oversiktsbilder og progresjonsdokumentasjon for prosjekter.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section
        id="tjenester"
        className="bg-zinc-950 border-t border-zinc-900 px-6 py-24"
      >
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <p className="text-zinc-500 uppercase tracking-[0.2em] text-sm mb-3">
              Tjenester
            </p>

            <h2 className="text-4xl font-bold">
              Dronebaserte tjenester
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: 'Takinspeksjon',
                text:
                  'Dokumentasjon av skader og tilstand med dronebilder.',
              },
              {
                title: 'Eiendom & bolig',
                text:
                  'Dronefoto og video som fremhever eiendommer fra luften.',
              },
              {
                title: 'Entreprenør & bygg',
                text:
                  'Løpende dokumentasjon og oversikt over byggeprosjekter.',
              },
            ].map((service, index) => (
              <div
                key={index}
                className="bg-black border border-zinc-800 rounded-3xl p-8"
              >
                <h3 className="text-2xl font-semibold mb-4">
                  {service.title}
                </h3>

                <p className="text-zinc-400 leading-relaxed">
                  {service.text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
<section className="px-6 py-24 text-center bg-cover bg-center"
  style={{
    backgroundImage: "url('/bottom-drone.JPG')",
  }}
>     <div className="w-full h-full bg-black/40 flex items-center justify-center">
        <div className="max-w-4xl mx-auto bg-zinc-900 border border-zinc-800 rounded-[2rem] p-12 shadow-2xl">
          <h2 className="text-4xl font-bold mb-6">
            Trenger du dronebilder eller inspeksjon?
          </h2>

          <p className="text-zinc-400 text-lg mb-8">
            Ta kontakt for en uforpliktende prat om prosjektet ditt.
          </p>

          <a
            href="mailto:kontakt@akroskye.no"
            className="inline-block bg-white text-black px-8 py-4 rounded-2xl font-semibold"
          >
            kontakt@akroskye.no
          </a>
        </div>
      </section>
      <section
        id="kontakt"
        className="border-t border-zinc-900 px-6 py-12"
      >
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-start gap-8 text-white">
            <div className="flex items-center gap-4 mb-3">
              <img
                src="/akroskye-logo.png"
                alt="Akroskye logo"
                className="w-12 h-12 object-contain"
              />

              <h3 className="text-white text-2xl font-bold">Akroskye</h3>
            </div>

            <p>Dronefoto • Inspeksjon • Dokumentasjon</p>
          </div>

          <div>
  <p className="mb-2 text-white">
    Telefon: +47 988 60 811
  </p>

  <p className="mb-2 text-white">
    E-post: kontakt@akroskye.no
  </p>

  <p className="text-white">
    Lokasjon: Rogaland, Norge
  </p>
</div>
    </section>
  )
}