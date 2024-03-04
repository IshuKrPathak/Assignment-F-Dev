import Link from "next/link";

export default function Logo() {
  return (
    <Link href="/">
      <div className="text-white flex justify-start items-center ml-8 my-5 cursor-pointer">
        <div className="text-5xl">
          <svg width="1em" height="1em" viewBox="0 0 16 16">
            <path
              d="M8 0C3.6 0 0 3.6 0 8s3.6 8 8 8s8-3.6 8-8s-3.559-8-8-8zm3.681 11.559c-.159.241-.441.319-.681.159c-1.881-1.159-4.241-1.4-7.041-.759c-.281.081-.519-.119-.6-.359c-.081-.281.119-.519.359-.6c3.041-.681 5.681-.4 7.759.881c.281.119.322.438.203.678zm.96-2.2c-.2.281-.559.4-.841.2C9.641 8.24 6.359 7.84 3.841 8.64c-.319.081-.681-.081-.759-.4c-.081-.319.081-.681.4-.759c2.919-.881 6.519-.441 9 1.081c.238.119.359.519.159.797zm.078-2.24C10.16 5.6 5.878 5.438 3.438 6.2a.749.749 0 0 1-.919-.481c-.119-.4.119-.8.481-.919c2.841-.841 7.519-.681 10.481 1.081c.359.2.481.681.281 1.041c-.203.278-.681.397-1.044.197z"
              fill="currentColor"
            ></path>
          </svg>
        </div>
        <div className="text-2xl font-extrabold ml-2">Spotify</div>
      </div>
    </Link>
  );
}
