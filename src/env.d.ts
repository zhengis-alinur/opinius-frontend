interface ImportMetaEnv {
    readonly VITE_CLOUD_NAME: string;
    readonly SERVER_URL: string;
    readonly VITE_UPLOAD_PRESET: string;
}

interface ImportMeta {
    readonly env: ImportMetaEnv;
}
