import dotenv from "dotenv";

dotenv.config({ path: ".env" });

export interface Config {
    port: number;
    debugLogging: boolean;
    sakuraUrl: string
}

const isDevMode = process.env.NODE_ENV == "development";

const config: Config = {
    port: +(process.env.PORT || 6734),
    debugLogging: isDevMode,
    sakuraUrl: "http://www.yhdm.so"
};

export { config };
