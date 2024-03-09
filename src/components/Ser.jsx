import React from 'react';

function Ser(props) {
    return (
        <>
             <div className="w-[354px] min-h-[242px] bg-[#e7ebf2] flex flex-col gap-[10px] px-[24px] py-[40px] rounded-[8px]">
              <img src={props.src} alt="" className="w-[54px]" />
              <h4 className="text-[20px] font-[700] text-[#6d758f]">{props.title}</h4>
              <p className="text-[14px] text-[#6d758f]">{props.content}</p>
            </div>
        </>
     );
}

export default Ser;