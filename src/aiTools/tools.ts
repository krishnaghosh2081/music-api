
import Song from "../models/Song.ts";


// 1. Define local function logic
export function getSongsFromDB() {
   
      const songs = async()=>{
        try {
          const songFromDB=await Song.find().select('title -_id');
          return JSON.stringify(songFromDB);
      } catch (error) {
          return JSON.stringify({ message: "No Songs found"});
      }
    }
    return songs();
}

export function getWeather(location:string) {
  if (location.toLowerCase().includes('berlin')) {
    return JSON.stringify({ temperature: '14°C', condition: 'Rainy' });
  }
  return JSON.stringify({ temperature: '22°C', condition: 'Sunny' });
}


  // 2. Describe tools using JSON Schema
  export const tools = [{
    type: 'function',
    function: {
      name: 'getWeather',
      description: 'Get the current weather for a specific location',
      parameters: {
        type: 'object',
        properties: {
          location: { type: 'string', description: 'The city name' },
        },
        required: ['location'],
      },
    },
  },
{
    type: 'function',
    function: {
      name: 'getSongsFromDB',
      description: 'Get the songs stored in your DB',
    },
  }];

