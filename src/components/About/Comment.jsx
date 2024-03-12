//icon
import { FaStar } from "react-icons/fa"

function Comment() {
  return (
    <>
      <div className="border-2 border-grey max-w-[358px] p-[10px] rounded-lg flex flex-col gap-4 relative basis-[358px] shrink-0 mb-2">
        <div className="flex text-[#d4af37] gap-3 text-[24px]">
          <FaStar />
          <FaStar />
          <FaStar />
          <FaStar />
          <FaStar />
        </div>

        <p>heir communication throughout the project was exceptional, and we couldn't be happier with the outcome.</p>

        <h5>Brian Clark</h5>

        <p className="mt-[-10px]">VP of Marketing at Snapchat</p>
      </div>
    </>
  )
}

export default Comment
