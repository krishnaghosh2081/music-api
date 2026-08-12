const songsData = [
  {
    title: 'Wanted Dead or Alive',
    artist: 'Bon Jovi',
    difficulty: 'Intermediate',
    genre: 'Rock',
    tabContent: 'Intro/Verse: D - C - G - D (Fingerpicking pattern)',
    backingTrackUrl:
      'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3',
    videoUrl: 'https://www.youtube.com/watch?v=SRvDaVvDw-0',
    vidLesson1:
      'https://www.youtube.com/watch?v=4IcSpp7P48c&pp=ygUtYm9uIGpvdmkgLSB3YW50ZWQgZGVhZCBvciBhbGl2ZSBndWl0YXIgbGVzc29u',
    vidLesson2:
      'https://www.youtube.com/watch?v=xSyN5ETBLNU&pp=ygUtYm9uIGpvdmkgLSB3YW50ZWQgZGVhZCBvciBhbGl2ZSBndWl0YXIgbGVzc29u',
    vidLesson3:
      'https://www.youtube.com/watch?v=gCILrgxqESg&pp=ygUtYm9uIGpvdmkgLSB3YW50ZWQgZGVhZCBvciBhbGl2ZSBndWl0YXIgbGVzc29u',
    vidLesson4:
      'https://www.youtube.com/watch?v=7LdD-xHxcuQ&pp=ygUtYm9uIGpvdmkgLSB3YW50ZWQgZGVhZCBvciBhbGl2ZSBndWl0YXIgbGVzc29u0gcJCcQLAYcqIYzv',
  },
  {
    title: "Ain't Talkin' 'bout Love",
    artist: 'Van Halen',
    difficulty: 'Intermediate',
    genre: 'Hard Rock',
    tabContent: 'Intro Riff: Am - G - F - E (Arpeggiated palm muting)',
    backingTrackUrl:
      'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-2.mp3',
    videoUrl: 'https://www.youtube.com/watch?v=SwwvnwsqW8',
    vidLesson1:
      'https://www.youtube.com/watch?v=_a-_NBpSe_c&pp=ygUyVmFuIGhhbGVuIC0gYWlu4oCZdCB0YWxraW5nIGJvdXQgbG92ZWd1aXRhciBsZXNzb24%3D',
    vidLesson2:
      'https://www.youtube.com/watch?v=tt9bCqd0PVc&pp=ygUyVmFuIGhhbGVuIC0gYWlu4oCZdCB0YWxraW5nIGJvdXQgbG92ZWd1aXRhciBsZXNzb24%3D',
    vidLesson3:
      'https://www.youtube.com/watch?v=QnuQVQ_jL5M&pp=ygUyVmFuIGhhbGVuIC0gYWlu4oCZdCB0YWxraW5nIGJvdXQgbG92ZWd1aXRhciBsZXNzb24%3D',
    vidLesson4:
      'https://www.youtube.com/watch?v=30jTTlgbjRM&pp=ygUyVmFuIGhhbGVuIC0gYWlu4oCZdCB0YWxraW5nIGJvdXQgbG92ZWd1aXRhciBsZXNzb24%3D',
  },
  {
    title: 'Iron Man',
    artist: 'Black Sabbath',
    difficulty: 'Beginner',
    genre: 'Heavy Metal',
    tabContent: 'Main Riff: E5 - G5 - A5 - Bb5 - A5',
    backingTrackUrl:
      'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-3.mp3',
    videoUrl: 'https://www.youtube.com/watch?v=5sQ5FX00KYg',
    vidLesson1:
      'https://www.youtube.com/watch?v=q8jrm91bqog&pp=ygUkYmxhY2sgc2FiYmF0aCBpcm9uIG1hbiBndWl0YXIgbGVzc29u',
    vidLesson2:
      'https://www.youtube.com/watch?v=UJvgrpr1ux4&pp=ygUkYmxhY2sgc2FiYmF0aCBpcm9uIG1hbiBndWl0YXIgbGVzc29u',
    vidLesson3:
      'https://www.youtube.com/watch?v=_B9Lw3DifvE&pp=ygUkYmxhY2sgc2FiYmF0aCBpcm9uIG1hbiBndWl0YXIgbGVzc29u',
    vidLesson4:
      'https://www.youtube.com/watch?v=_B9Lw3DifvE&pp=ygUkYmxhY2sgc2FiYmF0aCBpcm9uIG1hbiBndWl0YXIgbGVzc29u',
  },
  {
    title: 'Paranoid',
    artist: 'Black Sabbath',
    difficulty: 'Beginner',
    genre: 'Heavy Metal',
    tabContent: 'Main Riff: E5 - G - A - D - C',
    backingTrackUrl:
      'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-4.mp3',
    videoUrl: 'https://www.youtube.com/watch?v=0qanF-9mEdA',
    vidLesson1:
      'https://www.youtube.com/watch?v=B2R3WZXzsNA&pp=ygUmQmxhY2sgU2FiYmF0aCAtIFBhcmFub2lkIGd1aXRhciBsZXNzb24%3D',
    vidLesson2:
      'https://www.youtube.com/watch?v=jwca7tQZnkQ&pp=ygUmQmxhY2sgU2FiYmF0aCAtIFBhcmFub2lkIGd1aXRhciBsZXNzb24%3D',
    vidLesson3:
      'https://www.youtube.com/watch?v=4164vFNg4FE&pp=ygUmQmxhY2sgU2FiYmF0aCAtIFBhcmFub2lkIGd1aXRhciBsZXNzb24%3D',
    vidLesson4:
      'https://www.youtube.com/watch?v=B4cQyu63Ktw&pp=ygUmQmxhY2sgU2FiYmF0aCAtIFBhcmFub2lkIGd1aXRhciBsZXNzb24%3D',
  },
  {
    title: 'For Whom the Bell Tolls',
    artist: 'Metallica',
    difficulty: 'Intermediate',
    genre: 'Heavy Metal',
    tabContent: 'Intro Chromatic Line: E - F - F# - G',
    backingTrackUrl:
      'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-5.mp3',
    videoUrl: 'https://www.youtube.com/watch?v=cdgq-rnlIDE',
    vidLesson1:
      'https://www.youtube.com/watch?v=ZjRuyWUXFk8&pp=ygUyTWV0YWxsaWNhIC0gRm9yIHdob20gdGhlIGJlbGxzIHRvbGxzIGd1aXRhciBsZXNzb24%3D',
    vidLesson2:
      'https://www.youtube.com/watch?v=cniVsbWBqwY&pp=ygUyTWV0YWxsaWNhIC0gRm9yIHdob20gdGhlIGJlbGxzIHRvbGxzIGd1aXRhciBsZXNzb24%3D',
    vidLesson3:
      'https://www.youtube.com/watch?v=MUaqcGiYfnU&pp=ygUyTWV0YWxsaWNhIC0gRm9yIHdob20gdGhlIGJlbGxzIHRvbGxzIGd1aXRhciBsZXNzb24%3D',
    vidLesson4:
      'https://www.youtube.com/watch?v=Ah8fbOtQdmA&pp=ygUyTWV0YWxsaWNhIC0gRm9yIHdob20gdGhlIGJlbGxzIHRvbGxzIGd1aXRhciBsZXNzb24%3D',
  },
];

export default songsData;
