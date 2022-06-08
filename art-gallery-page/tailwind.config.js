module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'grid1': "url('assets/desktop/image-grid-1.jpg')",
        'grid1x2': "url('assets/desktop/image-grid-1@2x.jpg')",
        'grid2': "url('assets/desktop/image-grid-2.jpg')",
        'grid2x2': "url('assets/desktop/image-grid-2@2x.jpg')",
        'grid3': "url('assets/desktop/image-grid-3.jpg')",
        'grid3x2': "url('assets/desktop/image-grid-3@2x.jpg')",
        'gridHero': "url('assets/desktop/image-hero.jpg')",
        'gridHerox2': "url('assets/desktop/image-hero@2x.jpg')",
        'grid1t': "url('assets/tablet/image-grid-1.jpg')",
        'grid1x2t': "url('assets/tablet/image-grid-1@2x.jpg')",
        'grid2t': "url('assets/tablet/image-grid-2.jpg')",
        'grid2x2t': "url('assets/tablet/image-grid-2@2x.jpg')",
        'grid3t': "url('assets/tablet/image-grid-3.jpg')",
        'grid3x2t': "url('assets/tablet/image-grid-3@2x.jpg')",
        'gridHerot': "url('assets/tablet/image-hero.jpg')",
        'gridHerox2t': "url('assets/tablet/image-hero@2x.jpg')",
        'grid1m': "url('assets/mobile/image-grid-1.jpg')",
        'grid1x2m': "url('assets/mobile/image-grid-1@2x.jpg')",
        'grid2m': "url('assets/mobile/image-grid-2.jpg')",
        'grid2x2m': "url('assets/mobile/image-grid-2@2x.jpg')",
        'grid3m': "url('assets/mobile/image-grid-3.jpg')",
        'grid3x2m': "url('assets/mobile/image-grid-3@2x.jpg')",
        'gridHerom': "url('assets/mobile/image-hero.jpg')",
        'gridHerox2m': "url('assets/mobile/image-hero@2x.jpg')"
      },
    
    colors: {
      "almostBlack": "#151515",
      "camel": "#D5966C",
      "pureWhite": "#FFFFFF",
      "myGrey": "#444444",
      }
    },

    fontFamily: {
      "outfit": ['Outfit', "sans-serif"],
      "bigShoulder": ['Big Shoulders Display', "cursive"],
      },

      letterSpacing: {
        btn: "3.64px"
      },
    },

  plugins: [],
}