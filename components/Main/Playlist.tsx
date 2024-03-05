import usePlaylist from "hooks/usePlaylist";
import Image from "next/image";
import Head from "next/head";

import React from "react";
import PaginationRanges from "components/Pagination";

interface Props {
  id: string;
}

export default function Playlist({ id }: Props) {
  let playlist = usePlaylist(id);
  const [page, setPage] = React.useState(1);

  const handleChange = (event: React.ChangeEvent<unknown>, value: number) => {
    setPage(value);
  };

  const pageSize = 10;
  const startIndex = (page - 1) * pageSize;
  const endIndex = startIndex + pageSize;

  return (
    <div className="pb-10">
      <Head>
        <title>Playlist: {playlist?.name}</title>
      </Head>
      <div className="w-full h-44 lg:h-52 xl:h-60 flex justify-start p-4 ml-4 text-white">
        <div className="h-full mr-8 w-1/7 flex justify-center items-center">
          <div className="w-full">
            <Image
              layout="responsive"
              height="64"
              width="64"
              src={playlist?.image || "/images/test.jpeg"}
              alt=""
            />
          </div>
        </div>
        <div className="flex flex-col justify-between my-4">
          <div className="text-sm">Playlist</div>
          <div>
            <div className="text-3xl lg:text-4xl xl:text-5xl font-extrabold">
              {playlist?.name}
            </div>
            <div className="text-gray-300 text-sm mt-3">
              {playlist?.description}
            </div>
          </div>
        </div>
      </div>
      

      <div className="text-gray-400 mx-8 text-sm">
        <div className="w-full flex pr-8 py-4 border-b border-gray-500">
          <div className="w-7/12 lg:w-5/12 flex">
            <div className="w-1/7 text-center">S.no</div>
            <div>Title</div>
          </div>
          <div className="w-3/12 2xl:w-4/12">Album</div>
        </div>
        {playlist?.tracks.slice(startIndex, endIndex).map((track, index) => (
          <div
            key={track.id}
            className="w-full flex items-center pr-8 py-2 my-2 hover:bg-white hover:bg-opacity-10 rounded"
          >
            <div className="w-7/12 lg:w-5/12 flex items-center pr-8">
              <div className="w-1/7 text-center">{index + 1}</div>

              <div className="w-6/7 flex">
                <div className="w-1/12">
                  <div className="w-full">
                    <Image
                      layout="responsive"
                      height="64"
                      width="64"
                      src={track.image}
                      alt=""
                    />
                  </div>
                </div>
                <div className="w-11/12 pl-3">
                  <div className="text-white text-base whitespace-nowrap overflow-hidden overflow-ellipsis hover:underline cursor-pointer">
                    {track.name}
                  </div>
                  <div className="text-xs">
                    {track.artists.map((artist) => artist.name).join(", ")}
                  </div>
                </div>
              </div>
            </div>
            <div className="w-3/12 2xl:w-4/12">{track.album.name}</div>
          </div>
        ))}
        <div className="flex justify-center mt-4">
          <PaginationRanges
            count={Math.ceil(playlist?.tracks.length! / pageSize)}
            defaultPage={1}
            onChange={handleChange}
            siblingCount={10}
          />
        </div>
      </div>
    </div>
  );
}
