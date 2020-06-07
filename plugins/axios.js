export default function({ $axios }) {
  $axios.onRequeset(config => {
    if (process.env.QIITA_TOKEN) {
      config.headers.common.Authorization = process.env.QIITA_TOKEN;
    }
    return config;
  });
}
