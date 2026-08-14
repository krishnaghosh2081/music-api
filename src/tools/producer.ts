import { Kafka } from 'kafkajs';

// Create Kafka instance
const kafka = new Kafka({
  clientId: 'stem-analyze',
  brokers: ['localhost:9092'],
});
// Create producer
const producer = kafka.producer();
const sendMessage = async () => {
  try {
    await producer.connect();
    console.log("Producer connected");
    await producer.send({
      topic: 'my-topic',
      messages: [
        { value: 'Hello Kafka from Node.js!' },
      ],
    });
    console.log("Message sent successfully");
  } catch (error) {
    console.error("Error sending message:", error);
  } finally {
    await producer.disconnect();
  }
};
//sendMessage();

export default sendMessage;