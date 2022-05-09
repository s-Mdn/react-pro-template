module.exports = {
  style: {
    postcssOptions: { // options 已经不在适用
      plugins: [
        require('tailwindcss'),
        require('autoprefixer'),
      ],
    },
  },
}
