import CardTemplate from "../shared/CardTemplate"

function LinkCards() {
  const links = [
    {
      title: "Web Design",
      path: "/designo-website/web-design",
      background: "bg-sm-web-design",
    },
    {
      title: "App Design",
      path: "/designo-website/app-design",
      background: "bg-sm-app-design",
    },
    {
      title: "Graphic Design",
      path: "/designo-website/graphic-design",
      background: "bg-sm-graphic-design",
    },
  ]

  return (
    <div className="flex flex-col gap-6">
      {links.map((link) => (
        <CardTemplate key={link.title} className={`relative h-62.5 flex justify-center items-center text-white ${link.background}`}>
          <div className="absolute inset-0 bg-pure-black opacity-50 z-10 rounded-2xl hover:bg-primary hover:opacity-80"></div>
          <div className="relative z-20">
            <h2 className="font-medium uppercase mb-3">{link.title}</h2>
            <div className="flex justify-center items-center gap-4">
              <p className="font-medium uppercase text-center tracking-super-wide">View Projects</p>
              <img src="/designo-website/shared/desktop/icon-right-arrow.svg" alt="" />
            </div>
          </div>
        </CardTemplate>
      ))}
    </div>
  )
}

export default LinkCards