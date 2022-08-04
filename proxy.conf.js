const PROXY_CONF = [
  {
    //context berbeda dengan path, jika ingin menggunakan
    //path bisa menggunakan file json dengan fungsi pathRewrite
    context: [
      "/api"
    ],
    target: "http://localhost:8988",
    secure: false,
    changeOrigin: true
  }
]
module.exports = PROXY_CONF
