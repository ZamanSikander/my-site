import hero_section from "../assets/hero_section.svg";
const Hero = () => {
  return (
    <main className="flex flex-col-reverse md:flex-row items-center justify-between p-8 md:p-16">
      <section className="flex-1 text-center md:text-left space-y-4">
        <h1 className="text-lg md:text-3xl font-bold text-gray-800 font-orbitron">
          Hello, I am Zaman Sikander. <br /> Frontend Developer Based in
          Pakistan.
        </h1>
        <p className="text-gray-600 font-sans">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti,
          nisi vitae voluptate accusantium, suscipit commodi veritatis ducimus
          officia facilis magnam labore ut repudiandae repellendus natus ea.
          Temporibus odit nihil ea.
        </p>
      </section>
      <section className="flex-1 flex justify-center">
        <div className="w-full  md:max-w-screen-sm">
          <img
            src={hero_section}
            alt="main-hero"
            className=" object-cover w-full h-auto"
          />
        </div>
      </section>
    </main>
  )
}

export default Hero