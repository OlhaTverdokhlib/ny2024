
import Image from 'next/image';
import gamesListStyles from "./games-list.module.scss";
import "../../../public/pictures/new-year.jpeg";
import Link from 'next/link';

export default function GamesList() { 
 
    const games = [
      {
        title: "Вгадай зображення",
        description: "Опис конкурсу 1",
        imageUrl: "/pictures/guess-picture.jpeg",
        link: "/guess-picture",
      },
      {
        title: "Конкурс 2",
        description: "Опис конкурсу 2",
        imageUrl: "/pictures/new-year.jpeg",
        link: "/contest2",
      },

      {
        title: "Конкурс 3",
        description: "Опис конкурсу 3",
        imageUrl: "/pictures/new-year.jpeg",
        link: "/contest3",
      },
    ];

    return (
      <div className={gamesListStyles.block}>
        {games.map((game, index) => (
          <div key={index} className={gamesListStyles.block__item}>
            <Link href={game.link}>
              <h2 className={gamesListStyles.block__item__title}>
                {game.title}
              </h2>
              <Image
                className={gamesListStyles.block__item__img}
                // src={game.imageUrl}
                src={game.imageUrl}
                alt={`Game ${game.title}`}
                width={360}
                height={360}
              ></Image>
            </Link>

            <div className={gamesListStyles.block__item__info}>
              <div className={gamesListStyles.block__details}>
                <h3>Правила гри:</h3>
                <p>Опис</p>
                <a href={game.link}>Детальніше</a>
              </div>
            </div>
          </div>
        ))}
      </div>
    );
    

}