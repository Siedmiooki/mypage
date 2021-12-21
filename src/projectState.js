import igdb_app from "./img/igdb_app_big.jpg";
import igdb_app2 from "./img/igdb_app_big2.jpg";
import player_app from "./img/player_app_big2.jpg";
import player_app2 from "./img/player_app_big.jpg";
import homepage1 from "./img/homepage_big.jpg";
import homepage2 from "./img/homepage_big2.jpg";
import crypto1 from "./img/cryptoHQ_big.jpg";
import crypto2 from "./img/cryptoHQ_big2.jpg";
import crypto3 from "./img/cryptoHQ_big3.jpg";
import store1 from "./img/store_big.jpg";
import store2 from "./img/store_big2.jpg";
import store3 from "./img/store_big3.jpg";

export const ProjectState = () => {
    return [
        {
            title: "Fashion Store",
            mainImg: store1,
            secondaryImg: store2,
            thirdImg: store3,
            url: "/work/store_project",
            git: "https://github.com/Siedmiooki/StoreApp",
            live: "https://focused-northcutt-a97ce7.netlify.app",
            info: [
                {
                    title: "Project overview",
                    description:
                        "Fashion Store Project was created on my GF request ;) I tryed to make simple, clear and functional online store with cart, favorites and order history.",
                },
                {
                    title: "Technology",
                    description:
                        "Fashion Store Project was built with React, Redux Toolkit, Styled Component, Context State and ASOS Rapid API.",
                },
            ],
        },
        {
            title: "Crypto HQ",
            mainImg: crypto1,
            secondaryImg: crypto2,
            thirdImg: crypto3,
            url: "/work/crypto_hq",
            git: "https://github.com/Siedmiooki/cryptoapp",
            live: "https://flamboyant-elion-081156.netlify.app",
            info: [
                {
                    title: "Project overview",
                    description:
                        "Crypto HQ is an application providing informations about most popular cryptocurrencies and exchange markets with alot of details, graphs, history data. News section contains many crypto articles from different sources.",
                },
                {
                    title: "Technology",
                    description:
                        "Crypto HQ was built with React, Redux Toolkit, Ant Design and Rapid API.",
                },
            ],
        },
        {
            title: "Game Database App",
            mainImg: igdb_app,
            secondaryImg: igdb_app2,
            url: "/work/igdb_app",
            git: "https://github.com/Siedmiooki/GameInfoApp",
            live: "https://hardcore-bell-2605b8.netlify.app",
            info: [
                {
                    title: "Project overview",
                    description:
                        "React application providing alot of informations about popular, upcomming and recent video games with details on click funcionality. Search feature alows to find any informations about a game from API database.",
                },
                {
                    title: "Technology",
                    description:
                        "Game Database App was built with React, Redux, Framer Motion, Styled Components and rawg.io API.",

                },
            ],
        },
        {
            title: "Player App",
            mainImg: player_app,
            secondaryImg: player_app2,
            url: "/work/player_app",
            git: "https://github.com/Siedmiooki/react-player",
            live: "https://epic-babbage-bca114.netlify.app",
            info: [
                {
                    title: "Project overview",
                    description:
                        "Simple react application with localy stored music database.",
                },
                {
                    title: "Technology",
                    description:
                        "React player was built with React, Sass and FontAwsome Icons.",
                },
            ],
        },
        {
            title: "Homepage",
            mainImg: homepage1,
            secondaryImg: homepage2,
            url: "/work/homepage",
            git: "https://github.com/Siedmiooki/mypage",
            live: "https://optimistic-carson-1a56a2.netlify.app",
            info: [
                {
                    title: "Project overview",
                    description:
                        "My homepage was inspired by one of tutorial project that I encounter during my react studies. Clean, simple and functional.",
                },
                {
                    title: "Technology",
                    description:
                        "My homepage was biult in React, Framer Motion, Styled Components and local database. Nodemailer connected to Gmail and Firebase function used in contact section.",
                },
            ],
        },
    ];
};