import { LiveChat } from 'youtube-chat';

async function main() {
  try {
    const liveChat = new LiveChat({ channelId: 'UCIsEhwBMPkRHsEgqYAPQHsA' });

    await liveChat.start();
    console.log('LiveChat started successfully');

    liveChat.on('chat', (chatItem) => {
      console.log(chatItem);
    });

    liveChat.on('error', (err) => {
      console.error('LiveChat error:', err);
    });

    // Keep the process running
    process.on('SIGINT', () => {
      liveChat.stop();
      process.exit(0);
    });
  } catch (error) {
    console.error('An error occurred:', error);
  }
}

main().catch((error) => {
  console.error('Unhandled error in main:', error);
});
