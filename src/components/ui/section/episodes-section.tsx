import { NavLink } from 'react-router';

type Props = { episodes: string[] };

export const EpisodesSection = ({ episodes }: Props) => {
  const episodesIds = episodes.map((item) => Number(item.split('/').pop()));

  return (
    <section className="flex w-full justify-center pt-5 mt-5 border-t-2 flex-col">
      <p className="font-bold text-center pb-5">Episodes</p>
      <div className="flex flex-wrap gap-3">
        {episodesIds.map((id) => (
          <NavLink
            key={id}
            to={`/episode/${id}`}
            className={`transition flex
            hover:shadow-emerald-700 shadow-md rounded-md
            border-cyan-900 border-2 p-3 outline-2
            hover:outline-2
            hover:outline-emerald-700
            hover:bg-gray-700
            hover:cursor-pointer`}
          >
            {id}
          </NavLink>
        ))}
      </div>
    </section>
  );
};
