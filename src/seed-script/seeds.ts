import dotenv from 'dotenv';
dotenv.config(); // Loads your .env file

import mongoose from 'mongoose';
import Song from '../models/Song';

const songsData = [
  {
    title: "Wanted Dead or Alive",
    artist: "Bon Jovi",
    difficulty: "Intermediate",
    genre: "Rock",
    tabContent: "Intro/Verse: D - C - G - D (Fingerpicking pattern)",
    backingTrackUrl: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3",
    videoUrl: "https://www.youtube.com/watch?v=SRvDaVvDw-0"
  },
  {
    title: "Ain't Talkin' 'bout Love",
    artist: "Van Halen",
    difficulty: "Intermediate",
    genre: "Hard Rock",
    tabContent: "Intro Riff: Am - G - F - E (Arpeggiated palm muting)",
    backingTrackUrl: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-2.mp3",
    videoUrl: "https://www.youtube.com/watch?v=SwwvnwsqW8"
  },
  {
    title: "Iron Man",
    artist: "Black Sabbath",
    difficulty: "Beginner",
    genre: "Heavy Metal",
    tabContent: "Main Riff: E5 - G5 - A5 - Bb5 - A5",
    backingTrackUrl: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-3.mp3",
    videoUrl: "https://www.youtube.com/watch?v=5sQ5FX00KYg"
  },
  {
    title: "Paranoid",
    artist: "Black Sabbath",
    difficulty: "Beginner",
    genre: "Heavy Metal",
    tabContent: "Main Riff: E5 - G - A - D - C",
    backingTrackUrl: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-4.mp3",
    videoUrl: "https://www.youtube.com/watch?v=0qanF-9mEdA"
  },
  {
    title: "For Whom the Bell Tolls",
    artist: "Metallica",
    difficulty: "Intermediate",
    genre: "Heavy Metal",
    tabContent: "Intro Chromatic Line: E - F - F# - G",
    backingTrackUrl: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-5.mp3",
    videoUrl: "https://www.youtube.com/watch?v=cdgq-rnlIDE"
  }
];

async function seedDB() {
  try {
    const mongoURI = process.env.MONGO_URI;
    if (!mongoURI) {
      throw new Error("MONGO_URI is not defined in the .env file!");
    }

    console.log("Connecting to MongoDB Atlas...");
    await mongoose.connect(mongoURI);
    console.log("Connected successfully!");

    await Song.deleteMany({});
    await Song.insertMany(songsData);
    console.log("Metal & Rock tutorial songs seeded successfully!");
  } catch (err) {
    console.error("Error seeding database:", err);
  } finally {
    await mongoose.connection.close();
    console.log("Database connection closed.");
  }
}

seedDB();