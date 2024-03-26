import Project_card from "../project_card/Project_card";
import first from "./imgs/Rectangle 22 (2).png";
import second from "./imgs/Rectangle 22 (3).png";
import third from "./imgs/Rectangle 22.png";

const Projects = () => {
  // date
  const projects = [
    {
      img: first,
      langs: ["html", "css", "javascript", "react", "tailwind css"],
      title: "X Crypto",
      disc: "Live fetched Data is displayed",
      link:"https://crypto-market-odhwjil1w-userisrizz.vercel.app/exchanges"
    },
    {
      img: second,
      langs: ["html", "css", "javascript", "Node.js"],
      title: "Admin Dashboard",
      disc: "Enhanced product page with dynamic Chart.js and Chakra UI elements",
      link:"https://admin-dashboard-po30vw84m-userisrizz.vercel.app/"
    },
    {
      img: third,
      langs: ["html", "css", "javascript", "react", "node.js"],
      title: "Dill Shops",
      disc: "E-comerce website   ",
      link: "https://ecoomerce-site-86qglrnfk-userisrizz.vercel.app/"
    },
  ];

  return (
    <>
      <div className="px-5 max-w-[1560px] mx-auto mt-20 py-10">
        {/* top */}
        <div className=" flex justify-between items-center gap-5">
          {/* left */}
          <div data-aos="fade-down" className=" text-white w-2/3 font-medium text-[32px] flex items-center gap-2">
            <div className="">
              <span className="text-[#C778DD]">#</span>projects
            </div>
            <div className="line w-2/3 h-px bg-[#C778DD]"></div>
          </div>
          {/* right */}
          <div className=" text-white font-medium">
            <a href="">
              <span>View all ~~&gt;</span>
            </a>
          </div>
        </div>
        {/* bottom */}
        <div className="flex flex-wrap justify-between gap-4 my-12">
          {/* cards */}
          {projects.map(({ img, langs, title, disc, link}) => {
            return (
              <>
                <Project_card
                  img={img}
                  langs={langs}
                  title={title}
                  disc={disc}
                  link={link}
                />
              </>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default Projects;
