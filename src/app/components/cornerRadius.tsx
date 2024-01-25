export default function Corner () {
  return (
      <div className="">
          <div
            className="relative flex h-16 w-16 items-center justify-end bg-white"
            style={{ borderRadius: "50% 0 0 0" }}
          >
            <svg
              style={{
                width: "20px",
                position: "absolute",
                top: "-20px",
                right: "0px",
                transform: "rotate(180deg) scale(1.01)",
              }}
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 100 100"
            >
              <path
                d="m100,0H0v100C0,44.77,44.77,0,100,0Z"
                fill="#fff"
              ></path>
            </svg>
            {/* <button className="absolute bottom-0 right-0 z-10 flex h-14 w-14 items-center justify-center rounded-full bg-black text-2xl font-normal text-white hover:bg-teal-500">
              +
            </button> */}
            <svg
              style={{
                width: "20px",
                position: "absolute",
                bottom: "0px",
                left: "-20px",
                transform: "rotate(180deg) scale(1.01)",
              }}
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 100 100"
            >
              <path
                d="m100,0H0v100C0,44.77,44.77,0,100,0Z"
                fill="#fff"
              ></path>
            </svg>
          </div>
        </div>
  )
}