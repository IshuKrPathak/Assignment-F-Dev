import useAlbum from "hooks/useAlbum";
import Image from "next/image";

import { msToTime } from "utils";
import Head from "next/head";
import PaginationRanges from "components/Pagination";
import { useState } from "react";

interface Props {
  id: string;
}

export default function Album({ id }: Props) {
  let album = useAlbum(id);
  const [page, setPage] = useState(1);

  const handleChange = (event: React.ChangeEvent<unknown>, value: number) => {
    setPage(value);
  };

  const pageSize = 10;
  const startIndex = (page - 1) * pageSize;
  const endIndex = startIndex + pageSize;

  return (
    <div className="pb-10">
      <Head>
        <title>Album: {album?.name}</title>
      </Head>
      <div className="w-full h-52 lg:h-60 2xl:h-72 flex justify-start p-4 ml-4 text-white">
        <div className="w-1/6 mr-8 flex justify-center items-center">
          <div className="w-full">
            <Image
              layout="responsive"
              height="64"
              width="64"
              src={album?.image || "/images/test.jpeg"}
              alt=""
            />
          </div>
        </div>
        <div className="flex flex-col justify-between my-8">
          <div className="text-sm">Album</div>
          <div className="text-3xl lg:text-4xl xl:text-5xl font-extrabold">
            {album?.name}
          </div>
          <div>
            <div className="flex text-sm">
              <div className="font-bold">
                {album?.artists.map((artist) => artist.name).join(", ")}
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Album details rendering */}
      <div className="text-gray-400 mx-8 text-sm">
        {/* Tracks list */}
        {album?.tracks.slice(startIndex, endIndex).map((track, index) => (
          <div
            key={track.id}
            className="w-full flex items-center pr-8 py-2 my-2 hover:bg-white hover:bg-opacity-10 rounded"
          >
            {/* Track number */}
            <div className="w-5/12 flex items-center">
              <div className="w-1/7 text-center">{index + 1}</div>

              {/* Track details */}
              <div className="w-6/7">
                <div className="text-white text-base cursor-pointer whitespace-nowrap overflow-hidden overflow-ellipsis">
                  {track.name}
                </div>
                <div className="text-xs">
                  {track.artists?.map((artist) => artist.name).join(", ")}
                </div>
              </div>
            </div>
            {/* Track duration */}
            <div className="w-7/12 text-right">
              {msToTime(track.duration_ms)}
            </div>
          </div>
        ))}
        {/* Pagination component */}
        <div className="flex justify-center mt-4">
          <PaginationRanges
            count={Math.ceil(album?.tracks.length! / pageSize)}
            defaultPage={1}
            onChange={handleChange}
            siblingCount={10}
          />
        </div>
      </div>
    </div>
  );
}
