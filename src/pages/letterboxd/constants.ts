import SignUpSketch1 from "../../images/letterboxd/signupsketch1.png";
import SignUpSketch2 from "../../images/letterboxd/signupsketch2.png";
import SignUpSketch3 from "../../images/letterboxd/signupsketch3.png";
import HomeSketchImage from "../../images/letterboxd/homesketch.png";
import HomeLofiImage from "../../images/letterboxd/homelofi.png";

export const sectionOne = [
  {
    title: "Overview",
    text: `Letterboxd is a social media platform and network for film lovers. It allows you to track, rate, and review movies you’ve seen and add others to a watchlist for future viewing.
    
    The application has garnered a large following and is one of the leading “movie review” mobile applications.`,
  },
  {
    title: "Goals",
    text: `It can be overwhelming and complicated for users to discover films, movie lists, and other users to follow on the application. 
    
    My goal with this project was to redesign specific workflows and screens to ease usability and expose more features on the platform.`,
  },
  {
    title: "Skills",
    text: `User Research
    User Experience
    Mobile Design`,
  },
];

export const sectionTwo = [
  {
    text: `As a part of redesigning an existing brand and application, it is important to maintain consistency while improving current user experiences. I will be using the same color palette and Inter as the font family for readability.`,
  },
];

export const sectionThree = [
  {
    header: "Strengths",
    text: `Letterboxd is a one-stop shop for reviewing films you’ve seen, adding films to a future watchlist, and engaging with other users with their own opinions. Their platform has proven to be successful, becoming the leading mobile application in its genre. The social aspect and “casual critic” role established for users gives it leverage over similar products.`,
  },
  {
    header: "Weaknesses",
    text: `Some workflows and user experiences on the application are overcomplicated and confusing for the discovery of new movies. This can be intimidating and limit user adoption. Missing features like movie quotes and awards could allow for other products to make up for areas Letterboxd is lacking in or blocking with a $50 per year paywall.`,
  },
];

export const sectionFour = [
  {
    title: "User Feedback",
    text: `To gauge user feedback and pain points, I consulted friends who are users and 50 application reviews from both the Google Play and Apple App stores. From this information, I compiled a list of common pitfalls in the application’s user experiences. I did not take into account reviews that mentioned the applications advertisements and premium service.`,
  },
];

export const sectionFive = [
  {
    title: "User Personas",
    text: `To address a range of users, I created a small set of user stories to better define who users are and prioritize what their needs and expectations from the product.`,
  },
  {
    header: "Alex",
    title: "Avid movie fan",
    text: `Alex uses Letterboxd to review films and track his film-watching habits. He wants to expand his current taste by discovering new genres he typically does not engage with.`,
  },
  {
    header: "Sam",
    title: "Casual viewer",
    text: `Sam wants to learn more about film culture and trends. They are interested in learning more about popular movies.`,
  },
];

export const sectionSix = [
  {
    title: "Areas of Focus",
    text: `After initial research and analyzing the limitations of Letterboxd, I chose two areas of focus:`,
  },
];

export const sectionSixText = `1. Create a new sign up flow with user follow and movie recommendations 

2. Rework the home screen to include movie recommendations and access to hidden features`;

export const sectionSeven = [
  {
    title: "User Flows",
    text: `For each of the areas of focus, I created an ideal user flow to help me identify potential pain points and better understand the structure for my designs.`,
  },
];

export const sectionEight = [
  {
    title: "Sketch and Lo-Fi Designs",
    text: `To begin the ideation phase, I started by sketching low-fidelity screens that aligned with the user flows from the strategy phase and stemmed from my initial research.
    
    From there, I created a low-fidelity layout for the application's home screen.`,
  },
];

export const sectionNine = [
  {
    src: SignUpSketch1,
    altText:
      "A sketch of the first screen of the new sign up flow which prompts users to fill out their email and choose a username and password.",
  },
  {
    src: SignUpSketch2,
    altText:
      "A sketch of the second screen of the new sign up flow which prompts users to select genres that they're interested in.",
  },
  {
    src: SignUpSketch3,
    altText:
      "A sketch of the third screen of the new sign up flow which displays a list of users related to their genres of interest to follow. The user can choose which users to follow.",
  },
];

export const sectionTen = [
  {
    src: HomeSketchImage,
    altText:
      "A sketch of the new home page flow which includes a featured movie carousel, movie recommendations, movie lists, popular user reviews, and suggested users to follow.",
  },
  { src: HomeLofiImage, altText: "A low-fidelity mockup of the home screen." },
];

export const sectionEleven = [
  {
    title: "New Sign Up Screens",
    text: `To address the lack of movie recommendations and user-to-user interactions, I wanted to include new screens in the sign up process.

    In these new screens, users will select genres that they like or are interested in. From there, they will be able to follow users that may have similar interests or popularity in a genre.`,
  },
];

export const sectionTwelve = [
  {
    title: "New Home Screen Design",
    text: `The home screen redesign allows for more film discovery for a user by providing movies, movie lists and user follow recommendations based on preferences.`,
  },
];

export const sectionThirteen = [
  {
    title: "Featured movies",
    text: `To engage users more, I wanted to create a more interactive UI for the popular movies of the week. This redesign includes more information for the user to base their interactions around. The user is given insight into the public ratings and review count, as well as the movie’s related genres.`,
  },
  {
    title: "Movie recommendations",
    text: `Based on the user’s movie reviews, ratings, users they follow, and genre selections upon sign up, their movie recommendations will be updated.

    This section serves as a way to continuously rotate user preferences and ensure they are discovering new films every week.`,
  },
  {
    title: "New from friends",
    text: `Taking from the original home screen, I decided to keep the “New from friends” feature. This allows for users to discover new films and read reviews from users they follow.`,
  },
  {
    title: "Movie lists",
    text: `When researching user feedback, many users reported “movie lists” as one of the application’s hidden features. 

    To address this pain point, I chose to include a peek into a user’s suggested lists on the home screen. This allows for further film exploration, as well as insight into one of the app’s features.`,
  },
  {
    title: "Popular reviews",
    text: `As a way for users to discover more users and films, I included this “Popular reviews” section. Users will be able to read popular reviews on popular movies and choose whether or not to a.) follow the user and/or b.) watch the film.`,
  },
  {
    title: "Suggested users",
    text: `As the user continues to log their film activity, this section will allow them to discover new users to follow.`,
  },
];
