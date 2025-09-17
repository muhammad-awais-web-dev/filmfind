# FilmFind 🎬

A modern React application for discovering movies, TV shows, and celebrities using The Movie Database (TMDB) API. FilmFind provides an intuitive interface to explore popular content, search across multiple media types, and view detailed information about your favorite entertainment.

## ✨ Features

### 🏠 **Home Page**
- **Trending Content**: Discover what's trending across movies and TV shows
- **Popular Movies**: Browse popular movies with different categories (Now Playing, Popular, Top Rated, Upcoming)
- **Popular TV Shows**: Explore TV shows with various filtering options
- **Responsive Hero Section**: Visually appealing landing experience

### 🔍 **Search Functionality**
- **Multi-Type Search**: Search across movies, TV shows, and people in one unified search
- **Paginated Results**: Efficient browsing through large result sets
- **Smart Navigation**: Direct navigation to detailed pages based on content type

### 📄 **Detailed Pages**
- **Movie Details**: Complete movie information including cast, similar movies, and production details
- **TV Show Details**: Comprehensive TV show data with season information, cast, and similar shows
- **Person Details**: Celebrity profiles with biography, known works, and popularity metrics
- **Interactive Elements**: Click-through navigation between related content

### 📋 **List Pages**
- **Dynamic Lists**: Browse different categories of movies and TV shows
- **Pagination**: Seamless navigation through multiple pages of content
- **Flexible Routing**: Support for various list types and categories

## 🛠️ Tech Stack

- **React 19.1.1**: Latest React with modern hooks and features
- **React Router DOM 7.9.1**: Advanced routing and navigation
- **CSS Modules**: Scoped styling for maintainable code
- **TMDB API**: The Movie Database API for comprehensive entertainment data
- **Responsive Design**: Mobile-first approach with comprehensive media queries

## 📁 Project Structure

```
src/
├── API/
│   └── tmbd.js                 # Centralized API integration
├── components/
│   ├── Card.js                 # Reusable movie/TV card component
│   ├── Navbar.js              # Navigation component
│   ├── Footer.js              # Footer component
│   ├── PersonCard.js          # People card component
│   └── ScrollToTop.js         # Scroll behavior component
├── pages/
│   ├── home/
│   │   ├── Home.js            # Main landing page
│   │   ├── Movies.js          # Movie categories section
│   │   ├── TV.js              # TV shows section
│   │   ├── Trending.js        # Trending content
│   │   └── Hero.js            # Hero section
│   ├── preview/
│   │   ├── PreviewPageMovie.js # Movie detail page
│   │   └── PreviewPageTv.js   # TV show detail page
│   ├── searchResult/
│   │   └── SearchResult.js    # Search results page
│   ├── peoples/
│   │   ├── Peoples.js         # People listing page
│   │   └── PersonDetail.js    # Person detail page
│   └── Lists/
│       └── List.js            # Dynamic list pages
└── App.js                     # Main application component
```

## 🚀 Getting Started

### Prerequisites
- Node.js (v14 or higher)
- npm or yarn
- TMDB API key (get one at [TMDB](https://www.themoviedb.org/settings/api))

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/muhammad-awais-web-dev/filmfind.git
   cd filmfind
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Environment Setup**
   Create a `.env` file in the root directory:
   ```bash
   REACT_APP_AUTHORIZATION=your_tmdb_bearer_token_here
   ```

4. **Start the development server**
   ```bash
   npm start
   ```
   Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

## 📱 Available Scripts

### `npm start`
Runs the app in development mode with hot reloading.

### `npm test`
Launches the test runner in interactive watch mode.

### `npm run build`
Builds the app for production to the `build` folder with optimized bundle.

### `npm run eject`
**Note: This is a one-way operation!** Ejects the app from Create React App setup.

## 🔧 API Integration

The application uses a centralized API approach with the TMDB API:

```javascript
// Centralized API function following DRY principles
export async function API(option = '', additional = '') {
    try {
        const res = await fetch(`${BASE_URL}/${option}?${additional}`, options);
        // Error handling and response processing
        return json;
    } catch (err) {
        console.error(err);
    }
}
```

### Key API Endpoints Used:
- **Movies**: `/movie/popular`, `/movie/now_playing`, `/movie/top_rated`, `/movie/upcoming`
- **TV Shows**: `/tv/popular`, `/tv/top_rated`, `/tv/on_the_air`
- **Search**: `/search/multi` (searches across movies, TV shows, and people)
- **Details**: `/movie/{id}`, `/tv/{id}`, `/person/{id}`
- **Credits**: `/movie/{id}/credits`, `/tv/{id}/credits`
- **Similar**: `/movie/{id}/similar`, `/tv/{id}/similar`

## 🎯 Key Features Implementation

### useParams Hook Usage
The application extensively uses React Router's `useParams` hook for extracting URL parameters:

```javascript
// Example from PersonDetail.js
const { id } = useParams();

// Example from SearchResult.js
const { query } = useParams();
const page = parseInt(useParams().page) || 1;

// Example from List.js
const type = useParams().type;
const List = useParams().list;
```

### DRY Principle Implementation
- **Centralized API Function**: Single API function handles all TMDB requests
- **Reusable Components**: Card components used across different pages
- **Consistent Error Handling**: Standardized error handling patterns
- **CSS Modules**: Reusable styling patterns

## 🔮 Future Enhancements

See [NEXT_STEPS.md](NEXT_STEPS.md) for detailed improvement plans including:
- Enhanced error handling and loading states
- Performance optimizations
- User authentication and personalization
- Advanced search filters
- Offline support

## 📊 Current Status

✅ **Completed Features:**
- Core navigation and routing
- TMDB API integration
- Search functionality
- Detail pages for all content types
- Responsive design
- Component-based architecture

🔄 **In Progress:**
- Enhanced error handling
- Performance optimizations
- UI/UX improvements

See [PROJECT_REVIEW.md](PROJECT_REVIEW.md) for comprehensive project analysis.

## 🤝 Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- [The Movie Database (TMDB)](https://www.themoviedb.org/) for providing the comprehensive movie and TV show API
- [Create React App](https://github.com/facebook/create-react-app) for the initial project setup
- React community for excellent documentation and resources

---

**Made with ❤️ by [Muhammad Awais](https://github.com/muhammad-awais-web-dev)**
