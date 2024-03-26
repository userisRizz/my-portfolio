import React from 'react'

const Fun_facts = () => {
    return (
        <div className='px-5 max-w-[1560px] mx-auto pt-20 py-10'>
            {/* title */}
            <div className=" mb-12 text-[32px] font-medium text-white">
                <span className='text-[#C778DD]'>#</span>
                my-achievements
            </div>
            <div className="flex justify-center gap-y-10 md:justify-between gap-4 items-center flex-wrap">
                {/* left */}
                <div className=" flex justify-start gap-4 w-full md:w-[48%] flex-wrap">
                    <div className="fact border border-[#ABB2BF] p-2 text-[#ABB2BF] text-base font-normal">
                    Launch a Standout Portfolio Website:
                    </div>
                    <div className="fact border border-[#ABB2BF] p-2 text-[#ABB2BF] text-base font-normal">
                    Master Core Front-End Technologies:
                    </div>
                    <div className="fact border border-[#ABB2BF] p-2 text-[#ABB2BF] text-base font-normal">
                    Contribute Actively to Open Source:
                    </div>
                    <div className="fact border border-[#ABB2BF] p-2 text-[#ABB2BF] text-base font-normal">
                    Design Seamless Responsive Interfaces:
                    </div>
                    <div className="fact border border-[#ABB2BF] p-2 text-[#ABB2BF] text-base font-normal">
                    Excel in Competitive Coding Challenges:
                    </div>
                    <div className="fact border border-[#ABB2BF] p-2 text-[#ABB2BF] text-base font-normal">
                        My favorite movie is The Green Mile:
                    </div>
                    <div className="fact border border-[#ABB2BF] p-2 text-[#ABB2BF] text-base font-normal">
                    Completing Online Courses:
                    </div>
                </div>
                {/* right */}
                <div className=" flex justify-center items-center  w-full md:w-[48%]">
                    <img className=' w-[250px]' src={require("./imgs/Group 53.png")} alt="" />
                </div>
            </div>
        </div>
    )
}

export default Fun_facts