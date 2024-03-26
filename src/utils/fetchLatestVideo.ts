// Função para buscar o vídeo mais recente de um canal do YouTube
export async function fetchLatestVideo(channelId: string, apiKey: string) {
  const apiUrl = `https://www.googleapis.com/youtube/v3/search?part=snippet&channelId=${channelId}&order=date&maxResults=1&key=${apiKey}`;

  try {
    const response = await fetch(apiUrl);
    const data = await response.json();
    if (data.items && data.items.length > 0) {
      const latestVideo = data.items[0];
      const videoId = latestVideo.id.videoId;
      const title = latestVideo.snippet.title;
      const thumbnailUrl = latestVideo.snippet.thumbnails.high.url;
      return { videoId, title, thumbnailUrl };
    } else {
      throw new Error("No videos found for the channel");
    }
  } catch (error) {
    console.error("Error fetching latest video:", error);
    throw error;
  }
}
